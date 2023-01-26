import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import tw from './assets/i18n/zh-TW.json'
import cn from './assets/i18n/zh-CN.json'

const resources = {
  tw: {
    translation: tw,
  },
  cn: {
    translation: cn,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'tw', //預設語言
  fallbackLng: 'tw', //如果當前切換的語言沒有對應的翻譯則使用這個語言，
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
