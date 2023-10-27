import React from 'react'

import HeroBanner from '../components/HeroBanner'
import MainHeader from '../components/MainHeader'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export default function Netflix() {
let navi = useNavigate()
useEffect(()=>{

  if(!localStorage.getItem('auth')){
  navi('/auth/sign-up')
  }
})
  return (
    <div>
      <MainHeader/>
     <HeroBanner/>
    </div>
  )
}
