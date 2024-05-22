# 上班可以聽 LWW 宣傳網站
<div id='top' />
<img src='https://github.com/y0000ga/marcy-website/assets/111579529/d381f5c2-ab7c-473a-88bb-e83a7f87e1bc' width='100%' />

## 目錄

- [專案目的](#專案目的)
- [Demo](#demo)
- [專案功能](#專案功能)
- [專案內容](#專案內容)
- [系統說明](#系統說明)
- [專案結構](#專案結構)
- [使用技術](#使用技術)
- [資料來源](#資料來源)

## 專案目的

針對 [上班可以聽 LWW](<https://www.youtube.com/@dearmarcy>) 所開發的形象網站，全站採取 Server Side Rendering 開發，以提升 SEO 與爬蟲效率。

<p align='right'>(<a href='#top'>回到頁首</a>)</p>

## Demo

🖱️[專案 Demo 連結](https://marcy-website.vercel.app/)

<p align='right'>(<a href='#top'>回到頁首</a>)</p>

## 專案功能

* 檢視馬克信箱精選 Youtube 影片與當年度節目播放清單
* 檢視馬克信箱發展歷史與主持人資訊
* 檢視捐款資訊
* 檢視頻道合作商家

<p align='right'>(<a href='#top'>回到頁首</a>)</p>

## 專案內容

### 首頁

#### 📜 串接 Youtube Data API，取得　2024 播放清單
<img src='https://github.com/y0000ga/marcy-website/assets/111579529/9f93086d-b025-422b-ba28-b4d99a14792b' width='50%' />

### 青點遊戲室

#### 📜 透過操作 canvas 進行繪畫，取得心理測驗結果
<img src='https://github.com/y0000ga/marcy-website/assets/111579529/27f7a19a-a279-4d93-8d84-4ccd0e5f29b1' width='50%' />

### 青點優惠庫

#### 📜 串接 Map Javascript API，在 GoogleMap 上取得特定商店資訊

<img src='https://github.com/y0000ga/marcy-website/assets/111579529/1deb32bb-4d20-44be-8736-22f56f75f968' width='50%' />

### 傳教行動中

#### 📜 串接 Youtube Data API，取得特定推薦影片的統計資訊

<img src='https://github.com/y0000ga/marcy-website/assets/111579529/e1e5ab14-d9a6-4db5-a241-ed19871cd523' width='50%' />

### 教主教母說

#### 📜 串接 Youtube Data API，取得特定頻道的統計資訊

<img src='https://github.com/y0000ga/marcy-website/assets/111579529/6c99471d-81ce-4cbd-8e0e-87a02511a965' width='50%' />

<p align='right'>(<a href='#top'>回到頁首</a>)</p>

## 系統說明

### 版本

該專案於 Node.js v18.182 環境下進行開發

### 專案運行

運行專案步驟如下：

```
npm install
npm run dev
```

透過以上 command 將安裝所有 dependencies 並啟動 development server，隨後即可開始開發和預覽專案，進一步詳細資訊則參考專案的 package.json。

<p align='right'>(<a href='#top'>回到頁首</a>)</p>

## 專案結構

```
├── global.d.ts          # Typescript 全域型別聲明
├── locales              # 用於多語系支援的 i18n 檔案
│   ├── en               # 英文本地化檔案
│   └── zh               # 中文本地化檔案
├── next.config.js       # Next.js configuration 檔案
├── package-lock.json    # 用於鎖定專案中 dependency version
├── package.json         # 專案的 Meta data 檔案
├── postcss.config.mjs   # PostCSS 的 configuration 檔案，用於設定 PostCSS Plugin
├── public               # 存放專案靜態資源
├── src                  # 存放主專案程式碼
│   ├── app              # 應用程式主邏輯
│   │   ├── [locale]     # 用於動態路由的多語系資料夾
│   │   └── api          # Api Mid-Server，處理 API 請求的地方
│   ├── components       # 存放具備重用性的元件
│   ├── helper           # 存放與業務邏輯相關的輔助函式
│   ├── i18n             # 多語系支援國際化相關設定
│   ├── middleware.ts    # 處理 request 和 response 之間的邏輯
│   ├── style            # 存放樣式檔案
│   ├── type             # 存放 Typescript 型別定義
│   └── util             # 存放與業務邏輯無關的輔助函示
├── tailwind.config.ts   # TailwindCSS 的 configuration 檔案，用於設定主題與 Plugin
└── tsconfig.json        # Typescript 的 configuation 檔案，用於設定 Typescript complier
```

<p align='right'>(<a href='#top'>回到頁首</a>)</p>

## 使用技術

1. Next.js
2. React
3. Typescript
4. Tailwind CSS
5. GSAP
6. i18next
7. @react-google-maps/api
8. axios
9. Swiper

<p align='right'>(<a href='#top'>回到頁首</a>)</p>

## 資料來源
1. [青春點點點](<https://www.facebook.com/YoungDotx3>)
2. 天氣資料來自 [Opendata API](<https://opendata.cwa.gov.tw/dist/opendata-swagger.html?urls.primaryName=openAPI#/%E9%A0%90%E5%A0%B1/get_v1_rest_datastore_F_D0047_089>)
