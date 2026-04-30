'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const categories = ['All', 'UI/UX', 'Frontend', 'Mobile']

const projects = [
  {
    id: 'design',
    title: 'Creator Studio Redesign',
    category: 'UI/UX',
    summary: 'Rebuilt onboarding and navigation for a creator platform.',
    result: '21% more completed onboarding flows',
    stack: ['Figma', 'Research', 'Design System'],
  },
  {
    id: 'web',
    title: 'Analytics Dashboard',
    category: 'Frontend',
    summary: 'Interactive dashboard with role-based widgets and data drill-down.',
    result: '32% faster decision cycles for operations team',
    stack: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    id: 'mobile',
    title: 'Booking Mobile Experience',
    category: 'Mobile',
    summary: 'Built a mobile-first booking funnel focused on fewer steps.',
    result: '18% increase in booking completion',
    stack: ['React Native', 'UX Writing', 'A/B Testing'],
  },
  {
    id: 'scale',
    title: 'SaaS Marketing Platform',
    category: 'Frontend',
    summary: 'Migrated legacy pages to a component-driven architecture.',
    result: '40% faster page publishing for internal teams',
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
            James Adams
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
              key={project.title}
              id={project.id}
              className="animate-slide-up card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.13em] text-amber-200">{project.category}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
              <p className="mt-3 rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-200">
                Result: {project.result}
              </p>

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
