import React from 'react'
import NavbarItems from './NavbarItems'

export default function Navbar() {
  return (
    <div className='flex bg-green-400 dark:bg-gray-800 p-4 lg:text-lg justify-center gap-10'>
      <NavbarItems title="Trending" param="fetchTrending" />
      <NavbarItems title="Top Rated" param="fetchtTopRated"/>
    </div>
  )
}
