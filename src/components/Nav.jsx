'use client';
import React from 'react'
import Link from 'next/link';

function Nav() {
  return (
    <header>
        <nav className='flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-r-0 border-l-0 border-b-gray-600'>
            <div className='flex lg:flex-1'>
                <a  href="/">Credit Football Fantasy</a>
            </div>
            <div>
                <Link className='m-2' href="/news">News</Link>
            </div>
        </nav>
    </header>
  )
}

export default Nav