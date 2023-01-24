import SayingIcon_1 from '../assets/SayingIcon/SayingIcon (1).png'
import SayingIcon_2 from '../assets/SayingIcon/SayingIcon (2).png'
import SayingIcon_3 from '../assets/SayingIcon/SayingIcon (3).png'
import SayingIcon_4 from '../assets/SayingIcon/SayingIcon (4).png'
import { useState } from 'react'
import { dotSayingData } from '../wordingData'
import Swal from 'sweetalert2'

const sayingIcons = [SayingIcon_1, SayingIcon_2, SayingIcon_3, SayingIcon_4]

const SayingGet: React.FC = () => {
  const [sayingIndex, setSayingIndex] = useState<number[]>([
    Math.floor(Math.random() * sayingIcons.length),
    Math.floor(Math.random() * dotSayingData.length),
  ])

  const chooseSayingHandler = () => {
    setSayingIndex([
      Math.floor(Math.random() * sayingIcons.length),
      Math.floor(Math.random() * dotSayingData.length),
    ])
    Swal.fire({
      title: dotSayingData[sayingIndex[1]].title,
      text: dotSayingData[sayingIndex[1]].description,
      imageUrl: sayingIcons[sayingIndex[0]],
      imageAlt: 'saying icon',
    })
  }

  return (
    <div className='leading-loose my-4 text-justify'>
      或許你心裡有一些事情目前還處於無解的狀態，就讓教主教主給你一句話。偶然出現的言語或許能給你力量，一邊在內心想著問題並按下按鈕。
      <div
        onClick={chooseSayingHandler}
        className='border border-sky-500 text-sky-500 w-fit mx-auto mt-4 px-4 py-2 rounded-lg hover:text-white hover:bg-sky-500 cursor-pointer tracking-widest'
      >
        獲得一句話
      </div>
      <div className='mt-4'>以下是馬克信箱的名言大集合，也可以參考看看喔!</div>
      {dotSayingData.map((data) => (
        <div className='leading-loose mt-4 text-justify' key={data.title}>
          <span className='font-bold '>🔈 {data.title}</span>
          <br />
          {data.description}
        </div>
      ))}
    </div>
  )
}

export default SayingGet
