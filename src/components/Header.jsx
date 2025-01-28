import React from 'react';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs'; // Corrected import path
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className="flex gap-4 ">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href={"/"} className="flex gap-3 items-center">
        <span className='text-2xl font-bold bg-green-500 text-white py-1 px-2 rounded-lg '>CinemaLk</span>
        <span className='text-xl hidden sm:inline'>MovieHub</span>
      </Link>
    </div>
  );
}
