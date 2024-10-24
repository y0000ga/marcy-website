import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { Channel } from '@/components/Channel'
import { customTestId } from '@/__mock__/testid'
import { mockChannel } from '@/__mock__/index.mock'
import axios from 'axios'

jest.mock('axios') // 模擬 axios 的行為
const mockedAxios = axios as jest.Mocked<typeof axios>

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

describe('Channel Component', () => {
  it('display loading initially', async () => {
    render(await (<Channel id={mockChannel.id} />))
    expect(screen.getByTestId(customTestId.loadingSvg)).toBeInTheDocument()
  })

  it('render channel data after successful fetch', async () => {
    const {
      request: { mockResolvedValueOnce },
    } = mockedAxios

    // 用於 return Promise.resolve 所包裝的值
    mockResolvedValueOnce({ data: { data: mockChannel } })
    render(await Channel({ id: mockChannel.id }))

    await waitFor(() => {
      expect(screen.getByAltText('icon')).toHaveAttribute(
        'src',
        mockChannel.imgSrc
      )
      expect(screen.getByText(mockChannel.title)).toBeInTheDocument()
      expect(
        screen.getByText(mockChannel.statistics.viewCount)
      ).toBeInTheDocument()
      expect(
        screen.getByText(mockChannel.statistics.subscriberCount)
      ).toBeInTheDocument()
      expect(
        screen.getByText(mockChannel.statistics.videoCount)
      ).toBeInTheDocument()
    })
  })

  // TODO: Error
  // it('render error when fetch failed', async () => {
  //   const {
  //     request: { mockRejectedValueOnce },
  //   } = mockedAxios
  //   // 用於 return Promise.reject 所包裝的值
  //   mockRejectedValueOnce(new Error('fetch failed'))

  //   const component = await (<Channel id={mockChannel.id} />)

  //   render(component)

  //   await waitFor(() => {
  //     expect(screen.getByTestId(customTestId.loadingSvg)).toBeInTheDocument()
  //   })
  // })
})
