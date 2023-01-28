import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
interface TypingWordProps {
  title: string
}

const TypingWord: React.FC<TypingWordProps> = ({ title }) => {
  gsap.registerPlugin(TextPlugin)
  gsap.registerPlugin(ScrollTrigger)
  const typingRef = useRef<HTMLDivElement | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const { t } = useTranslation()
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(typingRef.current, {
        text: title,
        duration: 4,
        repeat: -1,
        scrollTrigger: {
          trigger: typingRef.current,
          toggleActions: 'play complete reverse reset',
        },
      })
      gsap.fromTo(
        cursorRef.current,
        {
          visibility: 'hidden',
        },
        {
          visibility: 'visible',
          repeat: -1,
          yoyo: true,
          repeatDelay: 0.3,
          duration: 0,
        }
      )
    })
    return () => ctx.revert()
  }, [t, title])
  return (
    <div className='flex'>
      <div ref={typingRef}></div>
      <div ref={cursorRef}>_</div>
    </div>
  )
}

export default TypingWord
