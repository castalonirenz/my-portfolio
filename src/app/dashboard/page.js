'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
]

const socialLinks = [
  { short: 'Dr', label: 'Dribbble', href: 'https://dribbble.com' },
  { short: 'In', label: 'LinkedIn', href: 'https://linkedin.com' },
  { short: 'Tw', label: 'X', href: 'https://x.com' },
  { short: 'Gh', label: 'GitHub', href: 'https://github.com' },
]

const partnerBrands = [
  { name: 'Meta', href: 'https://www.meta.com' },
  { name: 'Google', href: 'https://about.google' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com' },
  { name: 'Slack', href: 'https://slack.com' },
]

const impactStats = [
  { value: '250+', label: 'Projects Completed' },
  { value: '100+', label: 'Satisfied Clients' },
  { value: '10+', label: 'Years Experience' },
]

const services = [
  {
    title: 'UI/UX Design',
    category: 'UI/UX',
    projects: '77 projects',
    detail: 'Flow mapping, visual systems, and clickable prototypes for product teams.',
  },
  {
    title: 'Front End Development',
    category: 'Frontend',
    projects: '48 projects',
    detail: 'Accessible, high-performance interfaces built with modern React ecosystems.',
  },
  {
    title: 'Mobile App Development',
    category: 'Mobile',
    projects: '32 projects',
    detail: 'Cross-platform mobile products with scalable architecture and clear UX.',
  },
]

const capabilityCards = [
  {
    title: 'Product Design',
    text: 'A design-first workflow that turns ideas into polished and testable product journeys.',
    href: '/portfolio#design',
  },
  {
    title: 'Web Development',
    text: 'Fast websites with component-driven architecture and thoughtful content strategy.',
    href: '/portfolio#web',
  },
  {
    title: 'Mobile Experiences',
    text: 'Native-feeling mobile interfaces designed for retention, speed, and clarity.',
    href: '/portfolio#mobile',
  },
]

const workingCategories = ['All', 'UI/UX', 'Frontend', 'Mobile']

export default function DashboardPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeServiceByCategory, setActiveServiceByCategory] = useState({ All: services[0].title })

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') {
      return services
    }

    return services.filter((service) => service.category === activeCategory)
  }, [activeCategory])
  const activeService = activeServiceByCategory[activeCategory] ?? filteredServices[0]?.title ?? ''

  return (
    <main className="min-h-screen bg-[#222238] text-slate-100">
      <div className="relative isolate overflow-hidden">
        <div
          className="pointer-events-none absolute -left-20 top-12 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(127,129,166,0.65) 0%, rgba(34,34,56,0) 70%)',
          }}
        />
        <div
          className="pointer-events-none absolute -right-20 top-28 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(92,97,138,0.7) 0%, rgba(34,34,56,0) 72%)',
          }}
        />

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
          <section className="animate-fade-in rounded-[2rem] border border-white/10 bg-[#2a2b42]/95 p-4 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)] sm:p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[2.2fr_1fr]">
              <div className="rounded-3xl border border-white/10 bg-[#2d2e45] p-4 sm:p-6">
                <header className="relative rounded-2xl border border-white/10 bg-[#222338] px-4 py-3">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <span className="text-sm font-semibold text-slate-100">Adams</span>
                    </div>

                    <ul className="hidden items-center gap-5 text-[11px] uppercase tracking-[0.18em] text-slate-400 md:flex">
                      {navigation.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="transition-colors hover:text-amber-200">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="hidden items-center gap-2 md:flex">
                      {socialLinks.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-300 transition-colors hover:border-amber-200/40 hover:text-amber-100"
                          aria-label={item.label}
                        >
                          {item.short}
                        </a>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsMenuOpen((value) => !value)}
                      className="rounded-lg border border-white/15 p-1.5 text-slate-300 md:hidden"
                      aria-label="Toggle menu"
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
                        {isMenuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                      </svg>
                    </button>
                  </div>

                  {isMenuOpen && (
                    <ul className="mt-3 space-y-2 rounded-xl border border-white/10 bg-[#2d2e45] p-3 text-sm md:hidden">
                      {navigation.map((item) => (
                        <li key={`mobile-${item.href}`}>
                          <Link
                            href={item.href}
                            className="block rounded-lg px-3 py-2 text-slate-300 transition-colors hover:bg-white/5 hover:text-amber-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </header>

                <div id="hero" className="mt-6 grid gap-6 border-b border-white/10 pb-6 lg:grid-cols-[1.25fr_0.9fr]">
                  <div className="animate-slide-up">
                    <p className="text-3xl leading-tight text-slate-300">I&apos;m</p>
                    <h1 className="mt-1 text-4xl font-bold leading-tight text-white sm:text-5xl">James Adams</h1>
                    <p className="mt-4 max-w-md text-sm leading-6 text-slate-300/90">
                      A freelancer who builds premium digital products for startups and modern teams.
                      Blending design, development, and strategy into measurable outcomes.
                    </p>

                    <div className="mt-6 rounded-2xl border border-amber-300/20 bg-[#232438] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-100/75">Services</p>
                      <p className="mt-2 text-base font-medium text-slate-100">
                        Let&apos;s build quality products in programming and design with my services.
                      </p>
                      <Link
                        href="/portfolio"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition-colors hover:text-amber-100"
                      >
                        show more
                        <span aria-hidden>-&gt;</span>
                      </Link>
                    </div>
                  </div>

                  <div className="animate-float-soft mx-auto flex w-full max-w-xs items-end justify-center">
                    <div className="relative h-72 w-full">
                      <div
                        className="absolute inset-0 rounded-[45%] border border-white/10"
                        style={{
                          background:
                            'radial-gradient(circle at 40% 20%, rgba(94,97,128,0.85) 0%, rgba(41,44,67,1) 70%)',
                        }}
                      />
                      <div
                        className="absolute inset-x-8 bottom-0 h-[86%] rounded-t-[45%]"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(106,137,176,1) 0%, rgba(52,72,102,1) 100%)',
                        }}
                      />
                      <div className="absolute inset-x-0 bottom-4 text-center">
                        <p className="text-lg font-semibold text-white">Portrait Preview</p>
                        <p className="text-xs text-slate-300/90">Replace with your own image in production</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {partnerBrands.map((brand, index) => (
                    <a
                      key={brand.name}
                      href={brand.href}
                      target="_blank"
                      rel="noreferrer"
                      className="animate-scale-in rounded-xl border border-white/10 bg-[#26273d] px-4 py-3 text-center text-sm font-semibold text-slate-300 transition-colors hover:border-amber-200/30 hover:text-amber-100"
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      {brand.name}
                    </a>
                  ))}
                </div>

                <div id="services" className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                  <div className="rounded-2xl border border-white/10 bg-[#232438] p-5">
                    <h2 className="text-2xl font-semibold text-white">What Can I Do For Your Needs</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300/85">
                      It is easier to trust the work when every milestone is visible. I help teams ship
                      high-quality products with practical design and focused engineering.
                    </p>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {impactStats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-2xl font-bold text-amber-200">{stat.value}</p>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-400">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#232438] p-5">
                    <div className="flex flex-wrap gap-2">
                      {workingCategories.map((category) => (
                        <button
                          key={category}
                          type="button"
                          onClick={() => setActiveCategory(category)}
                          className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.08em] transition-colors ${
                            activeCategory === category
                              ? 'bg-amber-200 text-slate-900'
                              : 'border border-white/15 text-slate-300 hover:border-amber-200/40 hover:text-amber-100'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 space-y-3">
                      {filteredServices.map((service) => {
                        const isOpen = activeService === service.title

                        return (
                          <article
                            key={service.title}
                            className="rounded-xl border border-white/10 bg-[#2b2c42] p-4 transition-transform duration-200 hover:-translate-y-0.5"
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setActiveServiceByCategory((current) => ({
                                  ...current,
                                  [activeCategory]: service.title,
                                }))
                              }
                              className="flex w-full items-start justify-between gap-3 text-left"
                              aria-expanded={isOpen}
                            >
                              <div>
                                <h3 className="text-base font-semibold text-white">{service.title}</h3>
                                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-amber-100/85">
                                  {service.projects}
                                </p>
                              </div>
                              <span className="text-amber-200" aria-hidden>
                                {isOpen ? '-' : '+'}
                              </span>
                            </button>

                            {isOpen && (
                              <p className="animate-fade-in mt-3 text-sm leading-6 text-slate-300/85">{service.detail}</p>
                            )}

                            <Link
                              href="/portfolio"
                              className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-amber-200 hover:text-amber-100"
                            >
                              open case study
                              <span aria-hidden>-&gt;</span>
                            </Link>
                          </article>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div id="capabilities" className="mt-6 grid gap-4 md:grid-cols-3">
                  {capabilityCards.map((card, index) => (
                    <article
                      key={card.title}
                      className="animate-slide-up rounded-2xl border border-white/10 bg-[#232438] p-5"
                      style={{ animationDelay: `${index * 120}ms` }}
                    >
                      <span className="inline-block rounded-md bg-amber-200/15 px-2 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-100">
                        Core skill
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-white">{card.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300/85">{card.text}</p>
                      <Link
                        href={card.href}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition-colors hover:text-amber-100"
                      >
                        show more
                        <span aria-hidden>-&gt;</span>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="rounded-3xl border border-white/10 bg-[#232438] p-5">
                <div className="rounded-2xl border border-white/10 bg-[#1f2033] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-100">Adams</span>
                    <Link href="/contact" className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-slate-300">
                      Contact
                    </Link>
                  </div>

                  <div className="mt-5">
                    <p className="text-2xl text-slate-300">I&apos;m</p>
                    <h2 className="text-4xl font-bold text-white">James Adams</h2>
                    <p className="mt-4 text-sm leading-6 text-slate-300/85">
                      Freelance product builder for brands that need clean interfaces and reliable systems.
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-amber-100/70">Services</p>
                    <p className="mt-2 text-sm leading-6 text-slate-100">
                      Let&apos;s build quality products in programming and design with my services.
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {socialLinks.map((item) => (
                      <a
                        key={`side-${item.href}`}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-300 transition-colors hover:text-amber-100"
                      >
                        {item.short}
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-[#26273d] p-4">
                    <div className="mx-auto h-44 w-full max-w-[220px]">
                      <div className="relative h-full">
                        <div
                          className="absolute inset-0 rounded-[45%]"
                          style={{
                            background:
                              'radial-gradient(circle at 40% 20%, rgba(94,97,128,0.85) 0%, rgba(41,44,67,1) 70%)',
                          }}
                        />
                        <div
                          className="absolute inset-x-6 bottom-0 h-[84%] rounded-t-[45%]"
                          style={{
                            background:
                              'linear-gradient(180deg, rgba(106,137,176,1) 0%, rgba(52,72,102,1) 100%)',
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {partnerBrands.map((brand) => (
                        <a
                          key={`mobile-${brand.name}`}
                          href={brand.href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg border border-white/10 bg-[#222338] px-2 py-2 text-center text-xs font-semibold text-slate-300 transition-colors hover:text-amber-100"
                        >
                          {brand.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-[#26273d] p-4">
                    <h3 className="text-xl font-semibold text-white">What Can I Do For Your Needs</h3>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {impactStats.map((stat) => (
                        <div key={`mobile-${stat.label}`}>
                          <p className="text-lg font-bold text-amber-200">{stat.value}</p>
                          <p className="text-[10px] uppercase tracking-[0.1em] text-slate-400">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-2xl border border-amber-200/20 bg-amber-200/10 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-amber-100">Need a custom version?</p>
                    <p className="text-xs text-amber-100/75">Swap content with your profile details.</p>
                  </div>
                  <Link
                    href="/"
                    className="rounded-lg bg-amber-200 px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:bg-amber-100"
                  >
                    Home
                  </Link>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
