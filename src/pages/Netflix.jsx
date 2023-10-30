import React from 'react'

import HeroBanner from '../components/HeroBanner'
import MainHeader from '../components/MainHeader'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import CardSlider from '../components/CardSlider'
export default function Netflix() {
  const [title] = React.useState([
    { title: 'Only On Netflix', slug: 'only-on-netflix' },
    { title: 'All-time Best', slug: 'all-time-best' },
  ]);
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
     <div className="w-full bg-5 h-[200px]">
            {title.map((t) => (
              <CardSlider title={t.title} key={t.title} category={t.slug} />
            ))}
          </div>
    </div>
  )
}
