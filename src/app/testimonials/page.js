'use client'

import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const testimonials = [
  {
    name: 'Ariana Clark',
    role: 'Founder, Bright Labs',
    quote:
      'The process was organized and calm from day one. We launched on time and user activation improved in the first week.',
  },
  {
    name: 'Miguel Santos',
    role: 'Product Manager, Orbit AI',
    quote:
      'Design decisions were always backed by data. We now have a clean product experience and a faster front-end release cycle.',
  },
  {
    name: 'Ivy Robinson',
    role: 'COO, Nova Commerce',
    quote:
      'The portfolio quality is exactly what we saw in delivery. Communication was clear, and the final build exceeded expectations.',
  },
]

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  const previous = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const active = testimonials[activeIndex]

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
            Client feedback
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Testimonials from teams I have partnered with.</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            Use the controls to browse feedback and review what collaboration looks like end-to-end.
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.8fr]">
          <article className="animate-scale-in card">
            <p className="text-sm uppercase tracking-[0.14em] text-amber-200">Highlighted testimonial</p>
            <blockquote className="mt-4 text-xl leading-8 text-white">&quot;{active.quote}&quot;</blockquote>
            <p className="mt-6 text-lg font-semibold text-white">{active.name}</p>
            <p className="text-sm text-slate-300">{active.role}</p>

            <div className="mt-6 flex gap-3">
              <button type="button" onClick={previous} className="btn-soft" aria-label="Previous testimonial">
                Previous
              </button>
              <button type="button" onClick={next} className="btn-primary" aria-label="Next testimonial">
                Next
              </button>
            </div>
          </article>

          <aside className="card">
            <h2 className="text-xl font-semibold text-white">All testimonials</h2>
            <div className="mt-4 space-y-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                    index === activeIndex
                      ? 'border-amber-300/50 bg-amber-200/10 text-amber-100'
                      : 'border-white/10 bg-slate-800/60 text-slate-300 hover:border-white/30'
                  }`}
                >
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.1em]">{item.role}</p>
                </button>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-8 text-center">
          <h2 className="text-3xl font-bold text-white">Want this level of collaboration for your project?</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Start a conversation
            </Link>
            <Link href="/portfolio" className="btn-outline">
              View portfolio work
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
