'use client'

import { Home, TrendingUp, Compass, Film, Heart } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const menuItems = [
  {
    icon: Home,
    label: 'Home',
    href: '/'
  },
  {
    icon: TrendingUp,
    label: 'Trending',
    href: '/trending'
  },
  {
    icon: Compass,
    label: 'Explore',
    href: '/explore'
  },
  {
    icon: Film,
    label: 'Movies',
    href: '/movies'
  },
  {
    icon: Heart,
    label: 'Favorite',
    href: '/favorite'
  }
]

export function Sidebar() {
  const location = useLocation()

  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-[72px] bg-[#1E1E2A] z-40">
      <div className="flex flex-col items-center gap-7 py-8">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.href

          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex flex-col items-center gap-1 group w-full px-2',
                isActive && 'text-[#FFB43A]'
              )}
            >
              <Icon
                className={cn(
                  'w-5 h-5 transition-colors',
                  isActive ? 'text-[#FFB43A]' : 'text-[#FCFEFF]',
                  'group-hover:text-[#FFB43A]'
                )}
              />
              <span
                className={cn(
                  'text-[10px] font-medium transition-colors',
                  isActive ? 'text-[#FFB43A]' : 'text-[#FCFEFF]',
                  'group-hover:text-[#FFB43A]'
                )}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}

