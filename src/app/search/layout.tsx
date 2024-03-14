import SearchHeader from '@/components/SearchHeader';
import React from 'react'
import "../globals.css"

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
        <SearchHeader />
        {children}
    </>
  )
}
