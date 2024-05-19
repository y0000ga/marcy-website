import axios from 'axios'
import { Playlist } from '../Playlist/index.client'
import { IPlaylistItemReq } from '@/type/api/youtube.type'
import { MARCY_API_URL, MARCY_PLAYLIST_ID } from '@/helper/constant'
import { Loading } from '@/components/Loading'

// TODO: 可以改造成 Wrapper

const InfiniteScroll = async () => {
  const { data: playlistItemData } = await axios.request({
    method: 'GET',
    url: `${MARCY_API_URL}/playlistItem`,
    params: { playlistId: MARCY_PLAYLIST_ID },
  })

  const initialPlaylistItemData = playlistItemData.data as IPlaylistItemReq

  if (!initialPlaylistItemData) {
    return <Loading />
  }

  return <Playlist initialPlaylistItemData={initialPlaylistItemData} />
}

export default InfiniteScroll
