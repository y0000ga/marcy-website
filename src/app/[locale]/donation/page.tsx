import initTranslations from '@/i18n'
import { IPage } from '@/type/common.type'
import Image from 'next/image'
import donationIcon from '/public/assets/Figure/donationIcon.png'
import { Donation } from '@/components/Donation'
import { BsPersonPlus } from 'react-icons/bs'

import superThank from '/public/assets/Figure/superThank.png'
import { JumpMoney } from '@/components/JumpMoney'
import { donations } from '@/helper/constant'
import { TypingHeader } from '@/components/Typing'

const Page = async ({ params }: IPage) => {
  const { locale } = params
  const { t } = await initTranslations(locale)

  return (
    <>
      <Image
        src={donationIcon}
        width={200}
        height={200}
        alt='donation'
        className='m-auto'
      />
      <div className='leading-loose mt-4 text-justify'>
        {t('pageOpeningData.donation.0')}
      </div>
      <div className='grid grid-cols-2 my-4 gap-4 md:flex md:justify-between'>
        {Object.entries(donations).map(([key, { imgSrc, url }], index) => (
          <Donation
            key={key}
            title={t(`donationData.${index}.title`)}
            url={url}
          >
            {imgSrc ? (
              <Image
                width={200}
                height={200}
                src={imgSrc}
                alt={key}
                className='w-28'
              />
            ) : (
              <BsPersonPlus className='text-8xl w-28 h-28' />
            )}
          </Donation>
        ))}
      </div>
      <TypingHeader content={t('divider.otherDonation')} />
      <div className='md:flex'>
        <Image
          src={superThank}
          width={200}
          height={200}
          alt='超級感謝'
          className='w-96 m-auto'
        />
        <div className='text-justify flex justify-center items-center my-8 leading-loose md:ml-4'>
          {t('otherDonation')}
          <JumpMoney />
        </div>
      </div>
    </>
  )
}

export default Page
