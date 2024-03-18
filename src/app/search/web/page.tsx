import WebSearchResult from '@/components/WebSearchResults'
import Link from 'next/link'
import React from 'react'

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

type Params = {
  searchParams : {
    searchTerm : string
  }
}

export default async function WebSearchPage(params : Params) {
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.CUSTOM_SEARCH_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${params.searchParams.searchTerm}`)
  if (!res.ok) throw new Error("Something went wrong")
  const data : Data = await res.json()
  const results : WebResult[] = data.items

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
      {results && <WebSearchResult data={data}/>}
    </div>
  )
}
