import Link from 'next/link'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

const timeline = [
  {
    year: '2016',
    title: 'Started freelance design work',
    text: 'Helped local businesses build their first online presence and product visuals.',
  },
  {
    year: '2019',
    title: 'Expanded into front-end development',
    text: 'Began shipping full interfaces with reusable systems and accessibility standards.',
  },
  {
    year: '2022',
    title: 'Focused on product outcomes',
    text: 'Aligned every project with measurable targets such as retention and conversion.',
  },
  {
    year: '2026',
    title: 'Scaling multi-page product experiences',
    text: 'Delivering complete design-to-development workflows for startups and teams.',
  },
]

const skills = [
  'Product strategy',
  'Information architecture',
  'Design systems',
  'Next.js and React',
  'Tailwind CSS',
  'Conversion-focused UX writing',
]

export default function AboutPage() {
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

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.9fr]">
          <div className="animate-slide-up">
            <p className="inline-flex rounded-full border border-amber-200/25 bg-amber-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
              About me
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Product-minded designer and front-end developer.</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              I combine UX strategy, visual design, and implementation to deliver polished digital products.
              My workflow keeps research, design, and development tightly aligned so teams can move faster.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <h2 className="text-xl font-semibold text-white">Core strengths</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/20 px-3 py-1 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="card">
            <h2 className="text-xl font-semibold text-white">How I work</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Every engagement starts with clear goals, then moves through planning, prototyping, implementation,
              and measurable validation.
            </p>
            <Link href="/contact" className="mt-5 inline-flex text-sm font-semibold text-amber-200">
              Discuss a project -&gt;
            </Link>
          </aside>
        </section>

        <section className="mt-12">
          <h2 className="section-title">Timeline</h2>
          <p className="section-subtitle">A quick look at how the practice evolved over time.</p>

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <article
                key={item.year}
                className="animate-slide-up card"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm uppercase tracking-[0.13em] text-amber-200">{item.year}</p>
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
