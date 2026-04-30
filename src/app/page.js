import Link from 'next/link'

const navigation = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const highlights = [
  {
    title: 'Modern Stack',
    description: 'Built with Next.js 16, React 19, and Tailwind CSS for speed and scale.',
  },
  {
    title: 'Responsive Design',
    description: 'Layouts are tuned for desktop, tablet, and mobile from the first draft.',
  },
  {
    title: 'Performance Focus',
    description: 'Every section is optimized for readable content and fast page transitions.',
  },
  {
    title: 'Reusable Components',
    description: 'Cards, buttons, and layout shells are reusable so growth stays maintainable.',
  },
]

const projects = [
  { name: 'Rnz App', type: 'Frontend + Backend', description: 'Financial tracker/monitoring.' },
  { name: 'Official Ride Share', type: 'Frontend + Backend', description: 'Ride sharing' },
  { name: 'Internal projects', type: 'Frontend', description: 'Cannot disclose firm policy.' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-36 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
          <header className="animate-fade-in flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 backdrop-blur">
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

          <section className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
            <div className="animate-slide-up">
              <p className="inline-flex rounded-full border border-amber-200/30 bg-amber-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
                Freelancer Portfolio
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                I am a Frontend Developer 
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
               "dedicated to building high-quality digital products using React and Next.js. I bring an intermediate understanding of backend systems, including Node.js, Laravel, and FastAPI, which allows me to develop seamless, data-driven interfaces. My experience extends to managing MySQL and MongoDB databases, ensuring that every design I ship is supported by efficient, well-integrated server logic."
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/dashboard" className="btn-primary">
                  Open Dashboard
                </Link>
                <Link href="/portfolio" className="btn-outline">
                  View Portfolio
                </Link>
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <div>
                  
                  <p className="text-2xl font-bold text-white">9</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-slate-400">Projects</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-slate-400">Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">7+</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-slate-400">Years</p>
                </div>
              </div>
            </div>

            <div className="animate-scale-in card">
              <h2 className="text-xl font-semibold text-white">Quick Access</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Every page is connected so users can move across portfolio, testimonials, and contact details quickly.
              </p>

              <div className="mt-5 space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={`panel-${item.href}`}
                    href={item.href}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/70 px-4 py-3 text-sm transition-colors hover:border-amber-300/40 hover:text-amber-100"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden>-&gt;</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="mt-16">
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">Selected projects that combine product strategy, UX, and implementation.</p>

            <div className="grid gap-4 md:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className="animate-slide-up card"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-amber-200">{project.type}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
                  <Link href="/portfolio" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-200">
                    View details
                    <span aria-hidden>-&gt;</span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="section-title">Why This Build Works</h2>
            <p className="section-subtitle">The portfolio is now component-driven, linked, and ready for content updates.</p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, index) => (
                <article
                  key={item.title}
                  className="animate-slide-up card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-2xl border border-amber-200/25 bg-amber-200/10 px-6 py-8 text-center">
            <h2 className="text-3xl font-bold text-white">Ready to collaborate?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-200">
              Visit the contact page to send project details, timeline, and goals.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Start a project
              </Link>
              <Link href="/testimonials" className="btn-soft">
                Read testimonials
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
