'use client'

import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import userAvatar from '@/assets/user.png'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#1E1E2A] z-50">
      <div className="h-full max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-[#FCFEFF]">MOVIE</span>
            <span className="text-[#FFB43A]">VENNIE</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Movie"
              className="w-[300px] h-10 pl-4 pr-10 rounded-full bg-[#2D2E37] text-[#FCFEFF] placeholder:text-[#FCFEFF]/50 focus:outline-none focus:ring-2 focus:ring-[#FFB43A]"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FCFEFF]/50" />
          </div>

          <div className="w-10 h-10 rounded-full bg-[#FFB43A] flex items-center justify-center">
            <img
              src={userAvatar}
              alt="User avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

