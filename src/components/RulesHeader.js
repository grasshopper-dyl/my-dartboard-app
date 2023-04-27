import React from 'react'
import Image from 'next/image'
import ruleHeaderImage from '../images/ruleHeaderImage.jpg'

function RulesHeader() {
  return (
    <div className='w-full h-96 relative'>
        <Image  className='w-full h-full'
        src={ruleHeaderImage}
        placeholder='blurred'
        loading='eager'
        />
    <h1 className='absolute bottom-1/2 left-1/2 -translate-x-1/2 text-5xl text-bold text-white '>Game Rules</h1>
      
    </div>
  )
}

export default RulesHeader
