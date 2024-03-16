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
  const data = await res.json()
  const results : SearchResultType[] = data.items
  return (
    <div>
      {results && results.map(result => (
        <Link href={result.link} key={result.title}>{result.title}</Link>
      ))}
    </div>
  )
}
