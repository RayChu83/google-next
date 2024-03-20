"use client"
import React, { useEffect } from 'react'

type Props = {
    error: Error & { digest?: string };
    reset: VoidFunction;
};

export default function Error({error, reset} : Props) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>Something Went Wrong!</h1>
        <button className='text-blue-500' onClick={reset}>Try again</button>
    </div>
  )
}
