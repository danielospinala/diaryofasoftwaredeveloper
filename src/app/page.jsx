
import './globals.css'
import Image from 'next/image'
import Experiences from '@/components/Experience/Experiences'

export default function Home() {
  return (
    <div className='flex flex-col justify-center  md:mt-20 mt-10 w-11/12 '>
      <div>
      <p className='flex text-4xl font-normal justify-center '>some <span className='font-extrabold '>expiriences</span> </p>

      </div>
      
      <Experiences />
    

      
    </div>
  )
}
