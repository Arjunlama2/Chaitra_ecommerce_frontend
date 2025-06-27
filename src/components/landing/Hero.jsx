import React from 'react'
import { GoDiamond } from 'react-icons/go'

const Hero = () => {
  return (
    <div className='w-full bg-[#F2F0FF] px-[54px] flex items-center justify-end py-[35px] relative'>
        <div className='absolute w-[387px] aspect-square top-2 left-[50px]'>
            <img src="/images/light.png" alt="lamp pic" className='w-full h-full'  />
        </div>

        <div className='w-[550px] flex flex-col gap-3 '>
            <p className='text-[#FB2E86] text-base leading-[28px] font-[700]'>Best Furniture For Your Castle....</p>
            <p className='text-[54px] font-[700] leading-[132%] tracking-[2%]'>New Furniture Collection Trends in 2020</p>
            <p className='text-base font-[700] leading-[28px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            <button className='primary-btn mt-[15px]'>Shop Now</button>

        </div>
        

        <div className='w-1/3 h-[566px] relative flex justify-end'>
            <img src="/images/sofa.png" alt="sofa pic"  className='object-contain w-[550px] h-full self-end'/>

          <div className='absolute bottom-0 left-[-48px] flex gap-1 '>{[1,4,5].map((_,index)=>(
                 <div key={index} className=''><GoDiamond className={`${index === 0 ? ' fill-[#550f2e] ' : '' } text-[10px] text-[#FB2E86] `}/></div>
            ))}</div>

        </div>
          

    </div>
  )
}

export default Hero