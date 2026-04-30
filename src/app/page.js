import Link from 'next/link'

export default function Home() {
  const features = [
    {
      icon: '🚀',
      title: 'Modern Stack',
      description: 'Built with Next.js 16, React 19, and Tailwind CSS for optimal performance',
    },
    {
      icon: '✨',
      title: 'Responsive Design',
      description: 'Beautiful on all devices with mobile-first approach and dark mode support',
    },
    {
      icon: '⚡',
      title: 'Fast & Optimized',
      description: 'Lightning-fast load times with optimized images and code splitting',
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: 'Fully customizable Tailwind theme with ready-to-use components',
    },
  ]

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 px-md sm:px-lg overflow-hidden">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            
            {/* Left Content */}
            <div className="animate-slideUp">
              <div className="inline-flex items-center gap-sm mb-md px-md py-sm bg-primary-100 dark:bg-primary-900 rounded-full">
                <span className="text-xs font-bold text-primary-700 dark:text-primary-300">
                  Welcome to My Portfolio
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-neutral-900 dark:text-white mb-md leading-tight">
                Full Stack <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Developer</span>
              </h1>

              <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-xl leading-relaxed">
                Crafting beautiful and functional digital experiences. Specialized in React, Next.js, and full-stack development.
              </p>

              <div className="flex flex-col sm:flex-row gap-md">
                <Link href="/dashboard" className="btn-primary text-center justify-center">
                  View Dashboard
                </Link>
                <a href="#projects" className="btn-outline text-center justify-center">
                  Explore Work
                </a>
              </div>

              <div className="grid grid-cols-3 gap-lg mt-2xl pt-xl border-t border-neutral-200 dark:border-neutral-700">
                <div>
                  <p className="text-3xl font-bold text-neutral-900 dark:text-white">12+</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-neutral-900 dark:text-white">5+</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Years Exp</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-neutral-900 dark:text-white">50+</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Tasks Done</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl opacity-20 blur-3xl animate-pulse"></div>

                <div className="relative h-full bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl p-lg flex flex-col items-center justify-center">
                  <div className="text-6xl mb-md">💻</div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white text-center mb-md">
                    Full Stack Dev
                  </h3>
                  <div className="flex flex-wrap gap-sm justify-center">
                    {['React', 'Next.js', 'Node.js', 'Tailwind'].map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-md py-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-bold rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-2xl px-md sm:px-lg bg-white dark:bg-neutral-900">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-2xl">
            <h2 className="section-title">Why Choose This Portfolio</h2>
            <p className="section-subtitle">Modern tools and best practices</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
            {features.map((feature, idx) => (
              <div key={idx} className="card group">
                <div className="text-4xl mb-md transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-sm">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-2xl px-md sm:px-lg bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-900 dark:to-secondary-900">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-md">Ready to Collaborate?</h2>
          <p className="text-lg text-primary-100 mb-xl max-w-2xl mx-auto">
            Let's build something amazing together. Check out my latest projects and reach out for opportunities.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-lg py-sm bg-white text-primary-600 font-bold rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Visit Dashboard
          </Link>
        </div>
      </section>
    </main>
  )
}