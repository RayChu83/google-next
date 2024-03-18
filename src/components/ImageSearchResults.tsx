import { ImageResult } from '@/app/search/image/page'
import Link from 'next/link'
import React from 'react'

type Props = {
    results : ImageResult[]
  }

export default function ImageSearchResults(props : Props) {
  return (
    <div className='pb-24 mt-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4'>
        {props.results.map(result => (
            <div className='mb-8' key={result.link}>
                <div className='group'>
                    <Link href={result.image.contextLink} target='_blank'>
                        <img src={result.link} alt={result.title} className='h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300'/>
                    </Link>
                    <Link href={result.image.contextLink} target='_blank'>
                        <h2 className='group-hover:underline truncate text-xl'>{result.title}</h2>
                    </Link>
                    <Link href={result.image.contextLink} target='_blank'>
                        <p className='group-hover:underline truncate text-gray-600'>{result.displayLink}</p>
                    </Link>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}