'use client'
import { createContext, useState } from 'react';

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

const [userData, setUserData] = useState()
  return (
  <ThemeContext.Provider  value={{userData, setUserData}} >
    {children}
  </ThemeContext.Provider>
)}

