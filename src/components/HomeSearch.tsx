"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'

export default function HomeSearch() {
  const router = useRouter()
  const [input, setInput] = useState("")
  const [isRandomWordLoading, setIsRandomWordLoading] = useState(false)

  const handleSearch = (e : React.FormEvent) => {
    e.preventDefault()
    if (!input) return
    router.push(`/search/web?searchTerm=${input}`)
  } 
  
  const randomSearch = async (e: React.FormEvent) => {
    setIsRandomWordLoading(true)
    e.preventDefault();
    
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then(res => res.json());
  
    if (!response) {
      return; // If response is falsy, exit the function
    }
  
    const searchTerm = response[0]; // Assuming response is an array, take the first word
    setIsRandomWordLoading(false)
    router.push(`/search/web?searchTerm=${searchTerm}`);
  };
  return (
    <>
        <form className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl items-center' onSubmit={handleSearch}>
            <AiOutlineSearch className='text-xl text-gray-500 mr-3 cursor-pointer' onClick={handleSearch}/>
            <input type="text" className='flex-grow focus:outline-none' value={input} onChange={e => setInput(e.target.value)}/>
            <BsFillMicFill className='text-lg cursor-pointer'/>
        </form>
        <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4'>
            <button className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow" onClick={handleSearch}>Google Search</button>
            <button className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm" onClick={randomSearch} disabled={isRandomWordLoading}>{isRandomWordLoading ? "Loading..." : "I am feeling lucky"}</button>
        </div>
    </>
  )
}
