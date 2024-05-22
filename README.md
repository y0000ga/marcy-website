# 上班可以聽 LWW 宣傳網站

<div id='top'></div>
<img src='https://github.com/y0000ga/marcy-website/assets/111579529/d381f5c2-ab7c-473a-88bb-e83a7f87e1bc' width='100%' />
https://github.com/y0000ga/marcy-website/blob/main/README.md#top
## 目錄

- [專案目的](#專案目的)
- [Demo](#demo)
- [專案功能]
- [專案內容]
- [系統說明]

[Demo](https://marcy-website.vercel.app/)


## 專案目的

針對 [上班可以聽 LWW](<https://www.youtube.com/@dearmarcy>) 所開發的形象網站，全站採取 Server Side Rendering 開發，以提升 SEO 與爬蟲效率。

<p align='right'>(<a href='#top'>回到頁首</a>)</p>

## Demo



## 專案畫面

## 專案功能

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

## 資料夾說明

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
