import SearchHeader from '@/components/SearchHeader';
import React, { Suspense } from 'react'
import "../globals.css"

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
      <Suspense>
        <SearchHeader />
      </Suspense>
        {children}
    </>
  )
}
