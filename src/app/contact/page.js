'use client'

import Link from 'next/link'
import { useState } from 'react'

import SiteHeader from '@/components/site-header'

const initialForm = {
  name: '',
  email: '',
  company: '',
  budget: '',
  message: '',
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        <SiteHeader />

        <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="animate-slide-up">
            <p className="inline-flex rounded-full border border-amber-200/25 bg-amber-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Let us build your next product together.</h1>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Share your goals, expected timeline, and budget range. I will reply with a recommended plan and next
              steps.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <h2 className="text-xl font-semibold text-white">Response details</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Typical reply window: within 24 hours.</li>
                <li>Discovery call: 30 minutes.</li>
                <li>Available for product design, frontend, and full builds.</li>
              </ul>
            </div>
          </div>

          <div className="animate-scale-in card">
            <h2 className="text-2xl font-semibold text-white">Project inquiry form</h2>
            <p className="mt-2 text-sm text-slate-300">All fields marked required need to be filled before submit.</p>

            {isSubmitted && (
              <div className="animate-fade-in mt-4 rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-200">
                Your inquiry was submitted successfully. You can send another one any time.
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-5 space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Name *</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-white/20 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-amber-300"
                  placeholder="Your full name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Email *</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-white/20 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-amber-300"
                  placeholder="you@company.com"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">Company</span>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={onChange}
                    className="w-full rounded-lg border border-white/20 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-amber-300"
                    placeholder="Company name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">Budget range</span>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={onChange}
                    className="w-full rounded-lg border border-white/20 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-amber-300"
                  >
                    <option value="">Select budget</option>
                    <option value="5k-10k">5k-10k</option>
                    <option value="10k-25k">10k-25k</option>
                    <option value="25k+">25k+</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Project details *</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-white/20 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-amber-300"
                  placeholder="Tell me about your goals, audience, and timeline."
                />
              </label>

              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" className="btn-primary">
                  Send inquiry
                </button>
                <Link href="/portfolio" className="btn-outline">
                  View portfolio first
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}
