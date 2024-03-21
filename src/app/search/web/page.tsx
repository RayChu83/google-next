import WebSearchResult from '@/components/WebSearchResults'
import Link from 'next/link'
import React, { Suspense } from 'react'

export type Data = {
  kind : string,
  url : {
    type : string,
    template : string
  },
  searchInformation : {
    searchTime : number,
    formattedSearchTime : string,
    totalResults : string,
    formattedTotalResults : string
  },
  items : WebResult[]
}

export type WebResult = {
  title : string,
  link : string
  htmlSnippet : string,
  formattedUrl : string
}

type Props = {
  searchParams : {
    searchTerm : string,
    start? : string
  }
}

export default async function WebSearchPage(props : Props) {
  const startIndex = props.searchParams.start || "1"
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.CUSTOM_SEARCH_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${props.searchParams.searchTerm}&start=${startIndex}`)
  if (!res.ok) throw new Error("Something went wrong")
  const data : Data = await res.json()
  const results : WebResult[] = data.items

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
      {results && <Suspense><WebSearchResult data={data}/></Suspense>}
    </div>
  )
}
