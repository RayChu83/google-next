"use client"
import React from 'react'

import { usePathname, useSearchParams} from 'next/navigation'
import Link from 'next/link'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export default function PaginationButtons() {
  const pathname = usePathname()
  console.log(pathname)
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get("searchTerm")
  const startIndex = searchParams.get("start") || "1"
  return (
    <div className='text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0'>
      {Number(startIndex) > 10 && (
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${Number(startIndex) - 10}`}>
          <div className='flex flex-col items-center hover:underline'>
            <BsChevronLeft/>
            Previous
          </div>
        </Link>
      )}
      {Number(startIndex) < 91 && (
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${Number(startIndex) + 10}`}>
          <div className='flex flex-col items-center hover:underline'>
            <BsChevronRight/>
            Next
          </div>
        </Link>
      )}
    </div>
  )
}
