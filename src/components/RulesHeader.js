import React from 'react'
import Image from 'next/image'
import ruleHeaderImage from '../images/ruleHeaderImage.png'
import ruleHeaderMobile from '../images/ruleHeaderMobile.png'


function RulesHeader() {
  return (
    <div className='w-full h-fit relative'>
        <Image  className='w-full h-96 hidden md:flex'
        src={ruleHeaderImage}
        placeholder='blurred'
        loading='eager'
        />
                <Image  className='w-full h-fit md:hidden'
        src={ruleHeaderMobile}
        placeholder='blurred'
        loading='eager'
        />
    <h1 className='hidden'>Game Rules</h1>
      
    </div>
  )
}

export default RulesHeader
