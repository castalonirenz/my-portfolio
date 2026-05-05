'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { mainNavigation, siteProfile } from '@/lib/site-data'

export default function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="animate-fade-in flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 backdrop-blur">
      <Link href="/" className="text-lg font-bold tracking-wide text-white">
        {siteProfile.name}
      </Link>

      <nav className="hidden flex-wrap items-center gap-3 text-sm text-slate-300 md:flex">
        {mainNavigation.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 transition-colors ${
                isActive ? 'bg-amber-200/20 text-amber-100' : 'hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <button
        type="button"
        onClick={() => setMenuOpen((value) => !value)}
        className="rounded-lg border border-white/20 p-1.5 text-slate-200 md:hidden"
        aria-label="Toggle navigation"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
          {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {menuOpen && (
        <nav className="w-full space-y-2 rounded-xl border border-white/10 bg-slate-900/90 p-3 text-sm md:hidden">
          {mainNavigation.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 transition-colors ${
                  isActive ? 'bg-amber-200/20 text-amber-100' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
