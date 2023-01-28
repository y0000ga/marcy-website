import { useTranslation } from 'react-i18next'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  const loopRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    gsap.to(loopRef.current, {
      xPercent: -100,
      ease: 'none',
      duration: 15,
      repeat: -1,
    })
  }, [])
  return (
    <div className='border-t border-gray-200 h-40 leading-loose shadow-2xl w-full -z-10 overflow-hidden'>
      <div className='absolute z-10 text-xl leading-loose tracking-widest w-full h-full flex justify-center items-center text-center'>
        {t('footer.0')}
        <br />
        {t('footer.1')}
      </div>
      <div
        className='text-4xl whitespace-nowrap italic font-black text-sky-50 tracking-widest'
        ref={loopRef}
      >
        Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh!
        Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy!
        Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy!
        <br />
        Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh!
        Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy!
        Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy!
        <br />
        Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh!
        Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy!
        Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy!
        <br />
        Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh!
        Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy!
        Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy! Oh! Marcy!
      </div>
    </div>
  )
}

export default Footer
