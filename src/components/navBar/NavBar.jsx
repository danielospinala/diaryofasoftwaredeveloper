import React from 'react'
import styles from './navBar.module.css'
import Image from 'next/image'
import linkedin from '../../../public/icons/linkedin.png'
import github from '../../../public/icons/GitHub.png'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
import MobileMenu from '../MobileMenu/MobileMenu'

function NavBar() {

  
  return (
    <>
      <div className={`hidden md:flex items-center justify-between fixed top-0 bg-gray-200 text-gray-700 p-4 w-11/12  rounded-b-lg `} >
        <div className={`${styles.icons} `}>
          <Link href='https://www.linkedin.com/in/daniel-ospina-la/?locale=en_US' target="_blank">

            <Image src={linkedin} className='rounded-full' alt='linkedin' height={25} width={25} />
          </Link>
          <Link href='https://github.com/danielospinala' target="_blank">
            <Image src={github} className='rounded-full' alt='linkedin' height={25} width={25} />
          </Link>
        </div>
        <div className={`${styles.logo}`}>
          <h1>Logo</h1>
        </div>
        <div className={`${styles.links} `}>

          <Link href='/'>
            Home
          </Link>
          <Link href='/'>
            About
          </Link>
          <Link href='/'>
            Contact
          </Link>

          <AuthLinks />
        </div>

      </div>
      {/* Mobile */}
      <MobileMenu/>
    </>

  )
}

export default NavBar