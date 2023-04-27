import React from 'react'
import Image from 'next/image'
import hero2 from '../images/hero2.png'

function Hero() {
  return (
<>
<div className=' relative h-screen'>
<Image
src={hero2}
className='w-full lg:h-[90] relative   sm:h-full'
/>
<h1 className='text-roboto text-7xl text-warm-gold text-left absolute top-1/2 px-12 flex  '>The <br></br>Dart<br></br>Scoreboard</h1>

</div>
</>
  )
}

export default Hero
