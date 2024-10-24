import React from 'react'
import {
  render, // 將 React 組件渲染到虛擬 DOM 中，模擬組件的渲染過程
  screen, // 提供一組 API 用於查找已渲染的 DOM 節點，如查找文字、按鈕或圖片等
  fireEvent, // 模擬使用者的操作（例如點擊、鍵盤輸入等事件）
} from '@testing-library/react'
import { Carousel } from '@/components/Carousel/index.client'
import { mockSlides } from '@/__mock__/index.mock'

// 模擬 next/image module
jest.mock('next/image', () => ({
  __esModule: true,
  // 告知 Jest 是要模擬一個 ES Module 而非 CommonJS (Default)
  // Common JS 是 modules.exports
  // next/image 是一個默認導出的模塊，所以需要
  default: (props: any) => <img {...props} />, // next/image 是 Next.js 內建的圖片優化 component，不容易在測試中運行 (太複雜)，所以用 <img/> 代替
}))

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  // 模擬 Swiper 輪播組件，簡單地返回 DOM 結構，避免 Swiper 組件在測試環境中引入額外的邏輯
}))

jest.mock('swiper/modules', () => ({
  Navigation: true,
  Pagination: true,
  Autoplay: true,
  // 模擬 Swiper 輪播組件的 module，簡單地返回 true，避免 Swiper 組件在測試環境中引入額外的邏輯
}))

jest.mock('swiper/css', () => {})
jest.mock('swiper/css/navigation', () => {})
jest.mock('swiper/css/pagination', () => {})

describe(// 測試集 - describe 是 jest 的 method，用於描述定義 test

'Carousel Component', () => {
  // it - 定義具體測試的描述和內容
  it('Render 正確數量的 slides', () => {
    render(<Carousel slides={mockSlides} />) // render - render component 並輸入測試數據
    const renderedSlides = screen.getAllByRole('img') // 找出所有的 img 元素
    expect(renderedSlides).toHaveLength(mockSlides.length) // 檢查 img 元素的數量是否等於測試數據的長度
  })

  it('Render 正確的 slides title', () => {
    render(<Carousel slides={mockSlides} />)
    mockSlides.forEach(({ title }) => {
      if (title) {
        expect(screen.getByText(title)).toBeInTheDocument()
      }
    })
  })

  it('Open External link when slide is clicked', () => {
    global.open = jest.fn() // 模擬 window.open 函數，這樣我們可以檢查它是否在測試中被調用
    // jest.fn() - 用於模擬函數，不會有實際行為，但可以記錄調用次數與調用時的參數 - 可檢查性
    // test 時只需要模擬行為而非真正執行邏輯 - 簡化邏輯
    // 如果直接使用 global.open 的話就真的會打開新標籤頁了，不需要 - 避免副作用
    render(<Carousel slides={mockSlides} />)

    // screen.debug() // 調試查看渲染結果，檢查是否正確選取了元素

    mockSlides.forEach(({ title, externalUrl }) => {
      const slideWithLink = screen.getByRole('img', { name: title }) // 使用 getByRole 選擇 img

      // 在每次測試前清除調用記錄
      ;(global.open as jest.Mock).mockClear() // 使用 jest.Mock 來明確告訴編譯器這是一個模擬函數

      fireEvent.click(slideWithLink)
      if (externalUrl) {
        // 檢查是否正確打開外部鏈接
        expect(global.open).toHaveBeenCalledWith(externalUrl, '_blank')
      } else {
        expect(global.open).not.toHaveBeenCalled()
      }
    })
  })
})
