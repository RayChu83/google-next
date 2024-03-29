import React, { Suspense } from 'react'
import Link from 'next/link'
import ImageSearchResults from '@/components/ImageSearchResults'

export type ImageResult = {
  title : string,
  link : string,
  displayLink : string,
  htmlSnippet : string,
  image : {
    contextLink : string
  }
}

type Props = {
  searchParams : {
    searchTerm : string,
    start? : string
  }
}

export default async function ImageSearchPage(props : Props) {
  const startIndex = props.searchParams.start || "1"
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.CUSTOM_SEARCH_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${props.searchParams.searchTerm}&searchType=image&start=${startIndex}`)
  if (!res.ok) throw new Error("Something went wrong")
  const data = await res.json()
  const results : ImageResult[] = data.items

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          No results found for "{props.searchParams.searchTerm}"
        </h1>
        <p className='text-lg'>
          Try searching the web or images for something else
        </p>
        <Link href="/" className='text-blue-500'>Go home</Link>
      </div>
    )
  }

  return (
    <div>
      {results && <Suspense><ImageSearchResults results={results}/></Suspense>}
    </div>
  )
}
