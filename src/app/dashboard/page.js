'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

import SiteHeader from '@/components/site-header'
import { cvData, portfolioCategories, portfolioProjects, siteProfile, socialLinks } from '@/lib/site-data'

const categoryDetails = {
  Frontend: 'User-focused interfaces with modern component architecture and responsive behavior.',
  Backend: 'API design, service logic, and persistence layers that power production workflows.',
  Mobile: 'Cross-platform mobile experiences optimized for usability and performance.',
  'UI/UX': 'Interface planning and experience structure for product usability and consistency.',
}

function formatProjectCount(count) {
  return `${count} project${count === 1 ? '' : 's'}`
}

function buildCvText() {
  const projectHighlights = portfolioProjects.slice(0, 5)

  return [
    `${siteProfile.name}`,
    `${cvData.role}`,
    `${siteProfile.location}`,
    `${siteProfile.email}`,
    `${siteProfile.phone}`,
    '',
    'PROFILE',
    cvData.profile,
    '',
    'SKILLS',
    ...cvData.skills.map((skill) => `- ${skill}`),
    '',
    'EXPERIENCE',
    ...cvData.experience.flatMap((item) => [`- ${item.period} | ${item.title}`, `  ${item.detail}`]),
    '',
    'EDUCATION',
    ...cvData.education.flatMap((item) => [`- ${item.period} | ${item.title}`, `  ${item.detail}`]),
    '',
    'PROJECT HIGHLIGHTS',
    ...projectHighlights.map((project) => `- ${project.title} (${project.category}): ${project.summary}`),
  ].join('\n')
}

export default function DashboardPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedService, setExpandedService] = useState('Frontend')
  const [showCvPreview, setShowCvPreview] = useState(false)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return portfolioProjects
    }

    return portfolioProjects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  const services = useMemo(
    () =>
      Object.entries(categoryDetails).map(([category, detail]) => {
        const count = portfolioProjects.filter((project) => project.category === category).length

        return {
          title: category,
          category,
          projects: formatProjectCount(count),
          detail,
        }
      }),
    []
  )

  const visibleServices = activeCategory === 'All' ? services : services.filter((service) => service.category === activeCategory)
  const activeService = visibleServices.find((service) => service.category === expandedService)
    ? expandedService
    : visibleServices[0]?.category

  const impactStats = [
    { value: `${portfolioProjects.length}`, label: 'Total Projects' },
    { value: `${portfolioProjects.filter((project) => project.url).length}`, label: 'Live Deployments' },
    { value: `${portfolioProjects.filter((project) => project.category === 'Backend').length}`, label: 'Backend Systems' },
  ]

  const featuredCards = portfolioProjects.slice(0, 4)
  const cvText = buildCvText()

  const handleDownloadCv = () => {
    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'Renz-Castaloni-CV.txt'
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    URL.revokeObjectURL(url)
  }

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
          <SiteHeader />

          <section className="animate-fade-in mt-6 rounded-[2rem] border border-white/10 bg-[#2a2b42]/95 p-4 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)] sm:p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[2.2fr_1fr]">
              <div className="rounded-3xl border border-white/10 bg-[#2d2e45] p-4 sm:p-6">
                <div className="mt-2 grid gap-6 border-b border-white/10 pb-6 lg:grid-cols-[1.25fr_0.9fr]">
                  <div className="animate-slide-up">
                    <p className="text-3xl leading-tight text-slate-300">I&apos;m</p>
                    <h1 className="mt-1 text-4xl font-bold leading-tight text-white sm:text-5xl">{siteProfile.name}</h1>
                    <p className="mt-3 text-base font-medium text-amber-200">{cvData.role}</p>
                    <p className="mt-4 max-w-md text-sm leading-6 text-slate-300/90">{siteProfile.summary}</p>

                    <div className="mt-6 rounded-2xl border border-amber-300/20 bg-[#232438] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-100/75">Profile Hub</p>
                      <p className="mt-2 text-base font-medium text-slate-100">
                        This dashboard now acts as your profile page with live project metrics and downloadable CV output.
                      </p>
                      <Link
                        href="/portfolio"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition-colors hover:text-amber-100"
                      >
                        view all projects
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
                        <p className="text-lg font-semibold text-white">Project Snapshot</p>
                        <p className="text-xs text-slate-300/90">Frontend, Backend, and Mobile</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {featuredCards.map((project, index) => (
                    <article
                      key={project.id}
                      className="animate-scale-in rounded-xl border border-white/10 bg-[#26273d] px-4 py-3"
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      <p className="text-xs uppercase tracking-[0.11em] text-amber-200">{project.category}</p>
                      <h3 className="mt-1 text-sm font-semibold text-slate-100">{project.title}</h3>
                    </article>
                  ))}
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                  <div className="rounded-2xl border border-white/10 bg-[#232438] p-5">
                    <h2 className="text-2xl font-semibold text-white">Current Project Mix</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300/85">
                      The dashboard metrics reflect your portfolio entries so project categories stay consistent across pages.
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
                      {portfolioCategories
                        .filter((category) => category !== 'UI/UX')
                        .map((category) => (
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
                      {visibleServices.map((service) => {
                        const isOpen = activeService === service.category

                        return (
                          <article
                            key={service.category}
                            className="rounded-xl border border-white/10 bg-[#2b2c42] p-4 transition-transform duration-200 hover:-translate-y-0.5"
                          >
                            <button
                              type="button"
                              onClick={() => setExpandedService(service.category)}
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

                            {isOpen && <p className="animate-fade-in mt-3 text-sm leading-6 text-slate-300/85">{service.detail}</p>}

                            <Link
                              href="/portfolio"
                              className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-amber-200 hover:text-amber-100"
                            >
                              open projects
                              <span aria-hidden>-&gt;</span>
                            </Link>
                          </article>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <aside className="rounded-3xl border border-white/10 bg-[#232438] p-5">
                <div className="rounded-2xl border border-white/10 bg-[#1f2033] p-4">
                  <h2 className="text-lg font-semibold text-white">Profile and CV</h2>
                  <p className="mt-2 text-sm text-slate-300">Generate and download your CV directly from this dashboard.</p>

                  <div className="mt-4 space-y-2 text-sm text-slate-300">
                    <p>
                      <span className="font-semibold text-slate-100">Name:</span> {siteProfile.name}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-100">Role:</span> {cvData.role}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-100">Location:</span> {siteProfile.location}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-100">Email:</span> {siteProfile.email}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button type="button" onClick={() => setShowCvPreview((value) => !value)} className="btn-soft text-xs">
                      {showCvPreview ? 'Hide CV Preview' : 'Generate CV Preview'}
                    </button>
                    <button type="button" onClick={handleDownloadCv} className="btn-primary text-xs">
                      Download CV
                    </button>
                  </div>

                  {showCvPreview && (
                    <pre className="animate-fade-in mt-4 max-h-72 overflow-auto rounded-xl border border-white/10 bg-[#26273d] p-3 text-xs leading-5 text-slate-200">
                      {cvText}
                    </pre>
                  )}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-[#1f2033] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-amber-100">Social Links</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {socialLinks.map((item) =>
                      item.href.startsWith('http') ? (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-300 transition-colors hover:border-amber-200/40 hover:text-amber-100"
                          aria-label={item.label}
                        >
                          {item.short}
                        </a>
                      ) : (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-300 transition-colors hover:border-amber-200/40 hover:text-amber-100"
                          aria-label={item.label}
                        >
                          {item.short}
                        </Link>
                      )
                    )}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-amber-200/20 bg-amber-200/10 px-4 py-4">
                  <p className="text-sm font-semibold text-amber-100">Need project details?</p>
                  <p className="mt-1 text-xs text-amber-100/75">Use portfolio filters to browse by Frontend, Backend, and Mobile.</p>
                  <div className="mt-3 flex gap-2">
                    <Link href="/portfolio" className="btn-primary text-xs">
                      Open Portfolio
                    </Link>
                    <Link href="/contact" className="btn-outline text-xs">
                      Contact
                    </Link>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-[#1f2033] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-amber-100">Latest Portfolio Entries</h3>

                  <div className="mt-3 space-y-3">
                    {filteredProjects.slice(0, 4).map((project) => (
                      <article key={`side-${project.id}`} className="rounded-lg border border-white/10 bg-[#26273d] p-3">
                        <p className="text-xs uppercase tracking-[0.1em] text-amber-200">{project.category}</p>
                        <h4 className="mt-1 text-sm font-semibold text-white">{project.title}</h4>
                        <p className="mt-2 text-xs text-slate-300">{project.summary}</p>
                        <div className="mt-3 flex gap-2 text-xs font-semibold text-amber-200">
                          {project.repo && (
                            <a href={project.repo} target="_blank" rel="noreferrer" className="hover:text-amber-100">
                              Repo
                            </a>
                          )}
                          {project.url && (
                            <a href={project.url} target="_blank" rel="noreferrer" className="hover:text-amber-100">
                              Live
                            </a>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
