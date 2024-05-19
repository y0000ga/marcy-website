import SayingIcon_1 from '/public/assets/SayingIcon/SayingIcon (1).png'
import SayingIcon_2 from '/public/assets/SayingIcon/SayingIcon (2).png'
import SayingIcon_3 from '/public/assets/SayingIcon/SayingIcon (3).png'
import SayingIcon_4 from '/public/assets/SayingIcon/SayingIcon (4).png'
import PsychTestIcon_1 from '/public/assets/PsychTestIcon/PsychTestIcon(1).png'
import PsychTestIcon_2 from '/public/assets/PsychTestIcon/PsychTestIcon(2).png'
import PsychTestIcon_3 from '/public/assets/PsychTestIcon/PsychTestIcon(3).png'
import PsychTestIcon_4 from '/public/assets/PsychTestIcon/PsychTestIcon(4).png'
import PsychTestIcon_5 from '/public/assets/PsychTestIcon/PsychTestIcon(5).png'
import PsychTestIcon_6 from '/public/assets/PsychTestIcon/PsychTestIcon(6).png'
import allPayLogo from '/public/assets/Logo/allPayLogo.png'
import payPalLogo from '/public/assets/Logo/payPalLogo.png'
import streetLogo from '/public/assets/Logo/streetLogo.png'
import { Locale } from '@/type/common.type'

export const MARCY_PLAYLIST_ID = 'PLuGVMNMvIB_GW6pwd0Tj6rjoEvZxn6UuE'

export const YOUTUBE_PLAYLIST_URL = 'https://www.youtube.com/playlist'

export const SPOTIFY_API_URL = 'https://api.spotify.com/v1'

export const GOOGLE_MAP_SEARCH_URL =
  'https://www.google.com/maps/search/?api=1&query='

export const YOUTUBE_DATA_API_URL = 'https://www.googleapis.com/youtube/v3'

export const YOUTUBE_CONTENT_API_URL =
  'https://content-youtube.googleapis.com/youtube/v3'
export const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed'

export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/channel'

export const OPEN_DATA_API_URL =
  'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-089'

export const SPOTIFY_SCRIPT_SRC = 'https://open.spotify.com/embed/iframe-api/v1'

export const YOUTUBE_IMG_URL = 'https://i.ytimg.com/vi'

export const Language = {
  [Locale.en]: '英文',
  [Locale.es]: '西班牙文',
  [Locale.zh]: '中文',
}

export const ytVideoUrl = (id: string) =>
  `https://www.youtube.com/watch?v=${id}`

export const recommendVideoIds = [
  '501872k71bc',
  '-AERKQc6n-U',
  '3UKShkBr8zg',
  '4I55Dx8rsTw',
  'PpXp_1YCNoU',
]

export const httpRegex = new RegExp(/http/i)
export const tagRegex = new RegExp(/#/)

export const memoryIds = [
  'wtwXp8UzN3c',
  'v_TrL0tQ0jg',
  'pBGETSZhl7E',
  'vIACeOCcy3w',
  'MN4bC-zHwVQ',
  'V8lA8RHacI4',
]

export const books = [
  {
    date: '2015/08/10',
    imgSrc: 'https://cf.shopee.tw/file/f43d8018674932c86378140f04932014',
    buyUrl: 'https://www.books.com.tw/products/0010685025',
  },
  {
    date: '2022/09/30',
    imgSrc: 'https://cf.shopee.tw/file/3fdffaafe2fc7218900d92b20697234b',
    buyUrl: 'https://www.books.com.tw/products/0010935968',
  },
]

export const creations = [
  {
    buyUrl: 'https://www.zeczec.com/projects/mark-marry-ma-li',
    imgSrc: 'https://assets.zeczec.com/asset_395115_image_big.jpg?1635998912',
  },
  {
    buyUrl: 'https://www.zeczec.com/projects/MarknMary2023',
    imgSrc: 'https://assets.zeczec.com/asset_530355_image_big.jpg?1663689517',
  },
  {
    buyUrl: 'https://store.line.me/stickershop/product/12515651/zh-Hant',
    imgSrc:
      'https://stickershop.line-scdn.net/stickershop/v1/product/12515651/LINEStorePC/main.png?v=1',
  },
]

export const sayingIcons = [
  SayingIcon_1,
  SayingIcon_2,
  SayingIcon_3,
  SayingIcon_4,
]

export const donations = {
  member: { imgSrc: undefined, url: 'http://bit.ly/supportmarcy' },
  allPay: { imgSrc: allPayLogo, url: 'https://p.allpay.com.tw/kp4Ja' },
  paypal: { imgSrc: payPalLogo, url: 'https://paypal.me/ormarc' },
  street: { imgSrc: streetLogo, url: undefined },
}

export const channelIds = [
  'UCnj1nn8e_vcR3TiuQKqTGvg',
  'UC2EwpAwcsIAohhPgIKtrPsg',
]

export const psychTestIcons = [
  PsychTestIcon_1,
  PsychTestIcon_2,
  PsychTestIcon_3,
  PsychTestIcon_4,
  PsychTestIcon_5,
  PsychTestIcon_6,
]

export const discountList = {
  online: [
    {
      url: 'https://www.facebook.com/SyuanDrew',
    },
    {
      url: '',
    },
    {
      url: 'https://www.michi.com.tw/',
    },
    {
      url: 'https://www.instagram.com/dong_ba_3/',
    },
    {
      url: 'https://www.gainteng.com.tw/gainteng/index.php',
    },
    {
      url: 'https://shopee.tw/product/24789910/4012300724?smtt=0.24791246-1625977633.9',
    },
    {
      url: 'http://www.jxleather.com.tw/index.aspx',
    },
    {
      url: 'https://www.dearface.tw/',
    },
    {
      url: 'https://shopee.tw/woosox',
    },
    {
      url: 'https://www.instagram.com/accessoriesbyleaf/',
    },
    {
      url: 'https://www.pinkoi.com/store/trianglewoods',
    },
    {
      url: 'https://www.pinkoi.com/store/fernonly',
    },
    {
      url: 'https://www.facebook.com/theAxiomStore/',
    },
    {
      url: 'https://www.instagram.com/oh_tsubaki/',
    },
    {
      url: 'https://www.instagram.com/oohyesthanku/',
    },
    {
      url: 'https://www.instagram.com/kojima_masato/',
    },
    {
      url: 'https://instagram.com/niconico_design/',
    },
    {
      url: 'https://www.instagram.com/j_h_painting',
    },
    {
      url: 'https://instagram.com/g.diandian',
    },
    {
      url: 'https://www.pinkoi.com/store/adorerdesign',
    },
    {
      url: 'https://www.joywhenflowers.com/',
    },
  ],
  onSite: [
    {
      url: 'https://www.facebook.com/choice.gelato',
      location: { lat: 25.061287417944545, lng: 121.53479515972094 },
    },
    {
      url: 'https://www.facebook.com/gelatobarzeit',
      location: { lat: 25.042572836020106, lng: 121.54705677052584 },
    },
    {
      url: 'https://www.facebook.com/2730.cafe',
      location: { lat: 25.03358104211938, lng: 121.55703061199766 },
    },
    {
      url: 'https://www.instagram.com/goody_patisserie',
      location: { lat: 25.02343186975955, lng: 121.55432562209035 },
    },
    {
      url: 'https://www.facebook.com/thatsokseven',
      location: { lat: 25.088283184028953, lng: 121.46081289850642 },
    },
    {
      url: 'https://www.facebook.com/lacopaoscura',
      location: { lat: 25.115521841885204, lng: 121.50959156967059 },
    },
    {
      url: 'https://www.instagram.com/welcome.inhousenail',
      location: { lat: 25.049948940164604, lng: 121.56571999325419 },
    },
    {
      url: 'https://www.facebook.com/profile.php?id=100048712966277',
      location: { lat: 24.443294618781724, lng: 118.33712609850096 },
    },
  ],
}

export const histories = [
  { time: 20131214 },
  { time: 20140802 },
  { time: 20150810 },
  { time: 20160123 },
  { time: 20161120 },
  { time: 20170307 },
  { time: 20171229 },
  { time: 20180318 },
  { time: 20180519 },
  { time: 20181125 },
  { time: 20181106 },
  { time: 20190331 },
  { time: 20190720 },
  { time: 20190909 },
  { time: 20200427 },
  { time: 20201122 },
  { time: 20201018 },
  { time: 20201202 },
  { time: 20210307 },
  { time: 20210718 },
  { time: 20210705 },
  { time: 20211015 },
  { time: 20211110 },
  { time: 20220105 },
  { time: 20220122 },
  { time: 20220201 },
  { time: 20220320 },
  { time: 20220702 },
  { time: 20220917 },
  { time: 20220930 },
  { time: 20221001 },
  { time: 20221201 },
  { time: 20230119 },
]

export const guideUrls = [
  ytVideoUrl('cGXcxClM1FE&t=888s'),
  ytVideoUrl('-qnwkwVZOQ8'),
  ytVideoUrl('h_ED1q-q33U'),
  ytVideoUrl('KGXbpBEnR_k&t=457s'),
]

export const ytImgUrl = (id: string) =>
  `${YOUTUBE_IMG_URL}/${id}/maxresdefault.jpg`

export const SPOTIFY_URIS = [
  '0p80dAHB0d1yMUOr81htv8',
  '3qmQ7MdoFfHtiolWQ8lxhe',
  '7Css4s3mQEoknooU45gmQX',
].map((uri) => `spotify:episode:${uri}`)
