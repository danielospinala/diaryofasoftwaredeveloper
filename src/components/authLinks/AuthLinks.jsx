'use client'
import Link from 'next/link';
import React, {useContext} from 'react'
import styles from './authLinks.module.css'
import {ThemeContext} from '@/ThemeContext/ThemeContext'

function AuthLinks() {

  const {userData, setUserData} = useContext(ThemeContext)
  
  const status = false;
  return (
    <>
      {status ? 
      <Link href="/login">Login </Link>
        :
        <>
        <Link href="/write">+Post</Link>
        <span>Logout</span>
        
        </>
    }
      
      </>
  )
}

export default AuthLinks