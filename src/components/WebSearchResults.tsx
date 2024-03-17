import React from 'react'
import Link from 'next/link'
import Parser from "html-react-parser"
import { Data, SearchResult} from '@/app/search/web/page'

type Props = {
  data : Data
}

export default function WebSearchResult(props : Props) {
  return (
    <div className='w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-600 text-sm mb-5 mt-3'>
        About {props.data.searchInformation?.formattedTotalResults} results ({props.data.searchInformation?.formattedSearchTime} seconds)
      </p>
      {props.data.items.map((result : SearchResult) => (
        <div key={result.link} className='mb-8 max-w-xl'>
          <div className='group flex flex-col'>
            <Link href={result.link}>{result.formattedUrl}</Link>
            <Link href={result.link} className='group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800'>{result.title}</Link>
          </div>
          <p className='text-gray-600'>{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  )
}
