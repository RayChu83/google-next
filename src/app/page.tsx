import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-24'>
        <Image src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" className='w-auto h-auto' width={300} height={100} alt="Google Logo" priority/>
        <HomeSearch />
      </div>
    </>
  )
}
