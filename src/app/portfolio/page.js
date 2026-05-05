'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

import SiteHeader from '@/components/site-header'
import { portfolioCategories, portfolioProjects } from '@/lib/site-data'

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return portfolioProjects
    }

    return portfolioProjects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        <SiteHeader />

        <section className="mt-10">
          <p className="inline-flex rounded-full border border-amber-200/25 bg-amber-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Work that balances design and delivery.</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            Filter projects by service type to review relevant case studies and outcomes.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? 'bg-amber-200 text-slate-900'
                    : 'border border-white/20 text-slate-300 hover:border-amber-300/40 hover:text-amber-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              id={project.id}
              className="animate-slide-up card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.13em] text-amber-200">{project.category}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>

              <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold text-amber-200">
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer" className="hover:underline">
                    View Repository
                  </a>
                )}
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer" className="hover:underline">
                    Visit Project
                  </a>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={`${project.id}-${item}`} className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-8 text-center">
          <h2 className="text-3xl font-bold text-white">Need a custom build for your product?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Share your goals and timeline. I can recommend the right design and development path.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Contact now
            </Link>
            <Link href="/dashboard" className="btn-outline">
              Back to dashboard
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
