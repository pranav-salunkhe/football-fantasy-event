'use client';
import React, { useState, useEffect } from 'react'
import Link from 'next/link';

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      setMenuOpen(false);  
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <header>
        <nav className='flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-r-0 border-l-0 border-b-gray-600'>
            <div className='flex lg:flex-1'>
                <a href="/">ISTE Football Fantasy</a>
            </div>
            <div className='hidden lg:flex lg:justify-end lg:flex-1'>
                <a href='/dashboard' className='m-2'>Dashboard</a>
                <Link href="/news">
                    <p className='m-2'>News</p>
                </Link>
            </div>
            <div className='lg:hidden'>
                <button onClick={toggleMenu} className="block px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden absolute right-0 top-0 w-2/3 h-full text-black z-50 bg-white shadow">
                    <div className="flex flex-col items-start p-4">
                        <a href="/dashboard" className="my-2">Dashboard</a>
                        <Link href="/news">
                            <p className="my-2">News</p>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    </header>
  )
}

export default Nav
