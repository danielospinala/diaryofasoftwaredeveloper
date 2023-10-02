import React from 'react'
import styles from './navBar.module.css'
import Image from 'next/image'
import linkedin from '../../../public/icons/linkedin.png'
import github from '../../../public/icons/GitHub.png'
import Link from 'next/link'

function NavBar() {
  return (
    <div className={`${styles.container} rounded-b-lg flex justify-between `} >
      <div className='flex flex-row space-x-2'>
        <Link href='/'>
          <Image src={linkedin} className='rounded-full' alt='linkedin' height={25} width={25} />
        </Link>
        <Link href='/'>
          <Image src={github} className='rounded-full' alt='linkedin' height={25} width={25} />
        </Link>
      </div>
      <div>
        <h1>Dairy of a Developer</h1>
      </div>
      <div className=' space-x-3 flex justify-between'>
      <Link href='/'>
        Link 1
      </Link>
      <Link href='/'>
        Link 2
      </Link>
      <Link href='/'>
        Link 3
      </Link>
      </div>
    </div>
  )
}

export default NavBar