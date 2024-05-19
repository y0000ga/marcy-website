import { ILayout } from '@/type/common.type'
import initTranslations from '@/i18n'
import { ytImgUrl } from '@/helper/constant'
import { TypingHeaderImage } from '@/components/Typing'

const Layout = async ({ children, params }: Readonly<ILayout>) => {
  const { t } = await initTranslations(params.locale)
  return (
    <>
      <TypingHeaderImage
        title={t('navItemInfo.2.title')}
        imgSrc={ytImgUrl('XVRtFV9wpDk')}
      />
      <section className='main-content'>{children}</section>
    </>
  )
}

export default Layout
