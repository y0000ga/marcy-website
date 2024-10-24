import React from 'react'
import { render, screen } from '@testing-library/react'
import { SocialState } from '@/components/SocialState'
import { mockSocialStates } from '@/__mock__/index.mock'
import { SocialType } from '@/components/SocialState/index.type'

// describe('SocialState Component', () => {
//   it('render channel stats with correct icons and content', () => {
//     render(
//       <SocialState
//         type={SocialType.channel}
//         viewCount={mockSocialState[SocialType.channel].viewCount}
//         subscriberCount={mockSocialState[SocialType.channel].subscriberCount}
//         videoCount={mockSocialState[SocialType.channel].videoCount}
//       />
//     )

//     expect(
//       screen.getByText(mockSocialState[SocialType.channel].viewCount)
//     ).toBeInTheDocument()
//     expect(
//       screen.getByText(mockSocialState[SocialType.channel].subscriberCount)
//     ).toBeInTheDocument()
//     expect(
//       screen.getByText(mockSocialState[SocialType.channel].videoCount)
//     ).toBeInTheDocument()
//     expect(screen.getByTestId(iconTestid.AiOutlineEye)).toBeInTheDocument() // 查看圖標 => 去 SocialState 新增 data-testid 作為辨識的方法
//     expect(screen.getByTestId(iconTestid.BsPerson)).toBeInTheDocument() // 人圖標
//     expect(screen.getByTestId(iconTestid.BsCameraVideo)).toBeInTheDocument() // 錄影圖標
//   })

//   it('render video stats with correct icons and content', () => {
//     render(
//       <SocialState
//         type={SocialType.video}
//         viewCount={mockSocialState[SocialType.video].viewCount}
//         likeCount={mockSocialState[SocialType.video].likeCount}
//         commentCount={mockSocialState[SocialType.video].commentCount}
//       />
//     )

//     expect(
//       screen.getByText(mockSocialState[SocialType.video].viewCount)
//     ).toBeInTheDocument()
//     expect(
//       screen.getByText(mockSocialState[SocialType.video].likeCount)
//     ).toBeInTheDocument()
//     expect(
//       screen.getByText(mockSocialState[SocialType.video].commentCount)
//     ).toBeInTheDocument()
//     expect(screen.getByTestId(iconTestid.AiOutlineEye)).toBeInTheDocument()
//     expect(screen.getByTestId(iconTestid.AiOutlineLike)).toBeInTheDocument()
//     expect(screen.getByTestId(iconTestid.AiOutlineComment)).toBeInTheDocument()
//   })
// })

describe.each(mockSocialStates)(
  'SocialState Component renders $type stats with correct icons and content',
  ({ type, expectedData, expectedIcons }) => {
    it(`render ${type} stats with correct icons and content`, () => {
      render(<SocialState type={type} {...expectedData} />)
      expect(screen.getByText(expectedData.viewCount)).toBeInTheDocument()

      if (expectedData.likeCount) {
        expect(screen.getByText(expectedData.likeCount)).toBeInTheDocument()
      }

      if (expectedData.commentCount) {
        expect(screen.getByText(expectedData.commentCount)).toBeInTheDocument()
      }

      if (expectedData.subscriberCount) {
        expect(
          screen.getByText(expectedData.subscriberCount)
        ).toBeInTheDocument()
      }

      if (expectedData.videoCount) {
        expect(screen.getByText(expectedData.videoCount)).toBeInTheDocument()
      }

      expectedIcons.forEach((icon) => {
        expect(screen.getByTestId(icon)).toBeInTheDocument()
      })
    })
  }
)

describe('SocialState Component with undefined', () => {
  it('render video stats with correct icons and content', () => {
    render(<SocialState type={SocialType.video} />)

    // dash 在整份文件中很多，所以要用 getAllByText 全部抓出來
    const elementsWithDash = screen.getAllByText('-')
    expect(elementsWithDash).toHaveLength(3) // 先測長度

    // 再確定他們是存在的
    elementsWithDash.forEach((element) => {
      expect(element).toBeInTheDocument()
    })
  })
})

// 為甚麼是 data-testid 而非 data-testId

// 1. data- 開頭代表是自定義屬性 by HTML5 的規範，供 browser 正確解析，並且與標準既定的 HTML 屬性作區分
// 2. data-testid 是一個常見的命名慣例 by react testing library，用於輔助測試選擇元素，統一微小寫並由聯字符做分隔，case sensitive 會違反 HTML 標準