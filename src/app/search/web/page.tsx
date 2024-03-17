import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

type SearchResultType = {
  title : string,
  link : string
  snippet : string,
}

type Params = {
  searchParams : {
    searchTerm : string
  }
}

export default async function WebSearchPage(params : Params) {
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.CUSTOM_SEARCH_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${params.searchParams.searchTerm}`)
  if (!res.ok) throw new Error("Something went wrong")
  const data = await res.json()
  const results : SearchResultType[] = data.items

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for "{params.searchParams.searchTerm}"
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
      {results && results.map(result => (
        <Link href={result.link} key={result.title}>{result.title}</Link>
      ))}
    </div>
  )
}
