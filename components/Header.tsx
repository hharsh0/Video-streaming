import { useState, useEffect, useRef } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import BasicMenu from './BasicMenu'
function Header() {
    const [isScrolled, setIsScrolled ] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true)        
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        {/* left header section */}
        <div className="flex items-center space-x-2 md:space-x-10 ">
            <img
                src="https://rb.gy/ulxxee"
                width={100}
                height={100}
                className="object-contain cursor-pointer"
                alt="Netflix"
              />
              
              <BasicMenu />
              
              <ul className="hidden space-x-4 md:flex">
                <li className="headerLink">Home</li>
                <li className="headerLink">TV Shows</li>
                <li className="headerLink">Movies</li>
                <li className="headerLink">New & Popular</li>
                <li className="headerLink">My List</li>
              </ul>
        </div>

        {/* right header section */}
        <div className="flex items-center space-x-4 text-sm font-light">
            <SearchIcon className='hidden w-6 h-6 sm:inline'/>
            <p  className='hidden lg:inline'>Kids</p>
            <BellIcon className='w-6 h-6' />
              <img
                  src="https://rb.gy/g1pwyx"
                  alt=""
                  className="rounded cursor-pointer"
              />
        </div>
    </header>
  )
}

export default Header