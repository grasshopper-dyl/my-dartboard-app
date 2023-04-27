import React from 'react'
import Image from 'next/image'
import hero2 from '../images/hero2.png'

function Hero() {
  return (
<>
<div className='w-full h-screen bg-green-700 flex flex-col justify-center items-center'>
  <div className='w-2/3 text-center'>
<h1 className='text-2xl text-white mb-4'>Welcome, site under construction! Expected to be fully functional July 1, 2023</h1>
<h2 className='text-xl text-white'>Meanwhile feel free to use our FREE darts scoreboard that currently supports 3 classic game modes!</h2>
</div>
</div>
</>
  )
}

export default Hero
