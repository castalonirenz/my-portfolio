'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const categories = ['All', 'UI/UX', 'Frontend', 'Mobile', "Backend"]

const projects = [

  {
    id: 'web',
    title: 'Rnz App',
    category: 'Frontend',
    summary: 'Financial tracker/monitoring.',
    url: 'https://rnz-app-sepia.vercel.app/',
    repo: "https://github.com/castalonirenz/RnzApp",
    stack: ['Next.js', 'React', 'Bootstrap', 'Node js', 'Express', 'MongoDB'],
  },
  {
    id: 'web',
    title: 'Official Ride Share',
    category: 'Frontend',
    summary: 'Ride sharing offer or book a ride.',
    url: 'https://office-ride-share.vercel.app/',
    repo: 'https://github.com/castalonirenz/OfficeRideShare',

    stack: ['Next.js', 'React', 'Bootstrap', 'Node js', 'Express', 'MongoDB'],
  },
  {
    id: 'web',
    title: 'Official Ride Share API',
    category: 'Backend',
    summary: 'API for ride sharing offer or book a ride.',
    url: null,
    repo: 'https://github.com/castalonirenz/OfficeRideShareApi',
    stack: ['Next.js', 'CMS', 'Component Library'],
  },

  {
    id: 'web',
    title: 'RNZ App API',
    category: 'Backend',
    summary: 'API for financial tracker/monitoring.',
    url: null,
    repo: 'https://github.com/castalonirenz/RnzAppApi',
    stack: ['Next.js', 'CMS', 'Component Library'],
  },


  {
    id: 'mobile',
    title: 'Enterprise Philippine Tax Calendar',
    category: 'Mobile',
    summary: 'Tracking of government tax deadlines and requirements.',
    url: null,
    repo: null,
     stack: ['React-Native', 'Styled Components'],
  },
  {
    id: 'mobile',
    title: 'Enterprise Philippine Tax Code',
    category: 'Mobile',
    summary: 'Tracking of government tax laws and regulations.',
    url: null,
    repo: null,
    stack: ['React-Native', 'Styled Components'],
  },


  

      {
    id: 'mobile',
    title: 'Some internal projects',
    category: 'Frontend',
    summary: 'Internal project that cannot be disclose due to firm policy.',
    url: null,
    repo: null,
    stack: ['Next.js', 'CMS', 'Component Library'],
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects
    }

    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        <header className="animate-fade-in flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4">
          <Link href="/" className="text-lg font-bold tracking-wide text-white">
            Renz Castaloni
          </Link>

          <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 transition-colors hover:bg-white/10 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <section className="mt-10">
          <p className="inline-flex rounded-full border border-amber-200/25 bg-amber-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Work that balances design and delivery.</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            Filter projects by service type to review relevant case studies and outcomes.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${activeCategory === category
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
              key={project.title}
              id={project.id}
              className="animate-slide-up card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.13em] text-amber-200">{project.category}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
              <div>
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:underline">
                    View Repository
                  </a>
                )}
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-200">
                Visit Project
              </a>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={`${project.title}-${item}`} className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">
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
