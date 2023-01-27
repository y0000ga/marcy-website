import Divider from '../Layout/Divider'
import HostIntroItem from './HostIntroItem'
import { ReactComponent as MarkFace } from '../assets/Figure/MarkFace.svg'
import { ReactComponent as MaryInThree } from '../assets/Figure/MaryInThree.svg'

import { useTranslation } from 'react-i18next'
import { createRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const HostIntro: React.FC = () => {
  const { t } = useTranslation()
  const marcRef = createRef<HTMLDivElement>()
  const maryRef = createRef<HTMLDivElement>()
  const hankRef = createRef<HTMLDivElement>()
  const triggerRef = createRef<HTMLDivElement>()
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const srollTL = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
      },
    })
    srollTL
      .fromTo(
        marcRef.current,
        { transform: 'translateX(-100%)' },
        { transform: 'translateX(0%)', duration: 1 }
      )
      .fromTo(
        maryRef.current,
        { transform: 'translateX(-100%)' },
        { transform: 'translateX(0%)', duration: 1 }
      )
      .fromTo(
        hankRef.current,
        { transform: 'translateX(-100%)' },
        { transform: 'translateX(0%)', duration: 1 }
      )
  }, [hankRef, marcRef, maryRef, triggerRef])

  const markIntro = [
    t('hostIntroData.0.intro.0'),
    t('hostIntroData.0.intro.1'),
    t('hostIntroData.0.intro.2'),
    t('hostIntroData.0.intro.3'),
    t('hostIntroData.0.intro.4'),
    t('hostIntroData.0.intro.5'),
    t('hostIntroData.0.intro.6'),
    t('hostIntroData.0.intro.7'),
  ]
  const maryIntro = [
    t('hostIntroData.1.intro.0'),
    t('hostIntroData.1.intro.1'),
    t('hostIntroData.1.intro.2'),
    t('hostIntroData.1.intro.3'),
    t('hostIntroData.1.intro.4'),
  ]

  return (
    <div className='section3' ref={triggerRef}>
      <Divider content={t('divider.host') as string} />
      <HostIntroItem title={t('hostIntroData.0.name')} ref={marcRef}>
        <div className='flex flex-col items-center'>
          <MarkFace className='w-full border h-full p-2 my-2 md:w-96' />
          <div className='text-center text-neutral-400 mb-4'>
            {t('figureDescription.1')}
          </div>
        </div>
        <div className='lg:ml-4'>
          {markIntro.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </div>
      </HostIntroItem>
      <HostIntroItem title={t('hostIntroData.1.name')} ref={maryRef}>
        <div className='flex flex-col items-center'>
          <MaryInThree className='w-full border h-full p-2 my-2 lg:w-96' />
          <div className='text-center text-neutral-400 mb-4'>
            {t('figureDescription.2')}
          </div>
        </div>
        <div className='lg:ml-4'>
          {maryIntro.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </div>
      </HostIntroItem>
    </div>
  )
}

export default HostIntro
