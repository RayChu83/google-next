import React from 'react'

export default function Loading() {
  return (
    <>
        <div className='mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse'>
            <div className='h-2.5 w-48 bg-gray-200 rounded-full mb-2.5'></div>
            <div className='h-3.5 w-[360px] bg-gray-200 rounded-full mb-2.5'></div>
            <div className='h-2.5 w-[560px] bg-gray-200 rounded-full mb-2.5'></div>
            <div className='h-2.5 w-[530px] bg-gray-200 rounded-full mb-2.5'></div>
        </div>
        <div className='mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse'>
            <div className='h-2.5 w-56 bg-gray-200 rounded-full mb-2.5'></div>
            <div className='h-3.5 w-[320px] bg-gray-200 rounded-full mb-2.5'></div>
            <div className='h-2.5 w-[540px] bg-gray-200 rounded-full mb-2.5'></div>
            <div className='h-2.5 w-[500px] bg-gray-200 rounded-full mb-2.5'></div>
        </div>
        <div className='mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse'>
            <div className='h-2.5 w-32 bg-gray-200 rounded-full mb-2.5'></div>
            <div className='h-3.5 w-[420px] bg-gray-200 rounded-full mb-2.5'></div>
            <div className='h-2.5 w-[560px] bg-gray-200 rounded-full mb-2.5'></div>
            <div className='h-2.5 w-[475px] bg-gray-200 rounded-full mb-2.5'></div>
        </div>
    </>
  )
}
