'use client'
import React, {useState} from 'react'
import AuthLinks from '../authLinks/AuthLinks';
import Link from 'next/link'
import Image from 'next/image'
import hamburguerIcon from '../../../public/icons/icons8-hamburger-menu-24.png'

function MobileMenu() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="md:hidden flex justify-between bg-gray-200 relative w-11/12 rounded-b-lg p-3">
    <div className='ml-3'>
      <h1>Logo</h1>
    </div>
    <button className='mr-3' onClick={toggleMobileMenu}>
      {/* You can use a hamburger icon here */}
      <Image src={hamburguerIcon} />
      
    </button>
    
    {mobileMenuOpen && (
      <div className="flex flex-col rounded-lg w-1/2 pl-2 pb-2 pt-2 fixed top-12 right-0  z-50 bg-gray-400 opacity-90 text-gray-50 font-medium">
        <Link href='/'>Home</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
        <AuthLinks/>
      </div>
    )}
  </div>
  )
}

export default MobileMenu