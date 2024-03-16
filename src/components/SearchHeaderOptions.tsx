"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'

export default function SearchHeaderOptions() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const changeTab = (tab : "web" | "image") => {
    const searchTerm = searchParams.get("searchTerm")
    // early return statement
    if (pathname.includes(tab)) return
    router.push(`/search/${tab}?searchTerm=${searchTerm}`)
  }
  return (
    <div className='flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm'>
      <div onClick={() => changeTab("web")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === '/search/web' && '!text-blue-600 !border-blue-600'}`}>
        <AiOutlineSearch className='text-md' />
        <p>All</p>
      </div>
      <div onClick={() => changeTab("image")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === '/search/image' && '!text-blue-600 !border-blue-600'}`}>
        <AiOutlineCamera className='text-md' />
        <p>Images</p>
      </div>
    </div>
  )
}
