'use client'

import React, { useState } from 'react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'Total Projects', value: '12', icon: '📁', color: 'primary' },
    { label: 'Completed Tasks', value: '48', icon: '✓', color: 'success' },
    { label: 'Active Skills', value: '15', icon: '⚡', color: 'accent' },
    { label: 'Years Experience', value: '5+', icon: '🎯', color: 'secondary' },
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack React & Node.js application with payment integration',
      status: 'Completed',
      tags: ['React', 'Node.js', 'MongoDB'],
      progress: 100,
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat with AI-powered responses using WebSocket',
      status: 'In Progress',
      tags: ['React', 'FastAPI', 'PostgreSQL'],
      progress: 75,
    },
    {
      id: 3,
      title: 'Mobile Weather App',
      description: 'Cross-platform mobile app with real-time weather data',
      status: 'Completed',
      tags: ['React Native', 'Redux', 'API'],
      progress: 100,
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business intelligence and analytics',
      status: 'Completed',
      tags: ['Next.js', 'Chart.js', 'PostgreSQL'],
      progress: 100,
    },
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
    { category: 'Other', items: ['UI/UX Design', 'Agile', 'REST APIs', 'GraphQL'] },
  ]

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 p-md sm:p-lg">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-2xl">
          <div className="flex items-center justify-between mb-md">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-sm">
                Portfolio Dashboard
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-300">
                Welcome back! Here's your development summary.
              </p>
            </div>
            <div className="hidden sm:block text-5xl">📊</div>
          </div>

          {/* Stats Grid */}
          <div className="grid dark grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg mt-xl">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`card bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 dark:from-${stat.color}-900 dark:to-${stat.color}-800 border-l-4 border-${stat.color}-600`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-sm">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-neutral-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                  <span className="text-4xl opacity-80">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-md mb-xl border-b border-neutral-200 dark:border-neutral-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-md px-md font-medium transition-all duration-200 border-b-2 -mb-px ${
                activeTab === tab.id
                  ? 'border-primary-600 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fadeIn">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="dark space-y-xl">
              <div className="card">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-md">
                  Recent Activity
                </h2>
                <div className="space-y-md">
                  {[
                    { title: 'Completed Project: E-Commerce Platform', time: '2 days ago' },
                    { title: 'Started AI Chat Application', time: '1 week ago' },
                    { title: 'Updated Portfolio Website', time: '2 weeks ago' },
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-md pb-md border-b border-neutral-200 dark:border-neutral-700 last:border-b-0 last:pb-0">
                      <div className="w-2 h-2 rounded-full bg-primary-600 mt-1.5 flex-shrink-0"></div>
                      <div className="flex-grow">
                        <p className="font-medium text-neutral-900 dark:text-white">{activity.title}</p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className=" dark grid grid-cols-1 lg:grid-cols-2 gap-lg">
              {projects.map((project) => (
                <div key={project.id} className="card">
                  <div className="flex items-start justify-between mb-md">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-sm">
                        {project.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-bold px-md py-xs rounded-full ${
                        project.status === 'Completed'
                          ? 'bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-300'
                          : 'bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-300'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-md">
                    <div className="flex items-center justify-between mb-xs">
                      <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                        Progress
                      </span>
                      <span className="text-xs font-bold text-primary-600 dark:text-primary-400">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-sm">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-sm py-xs rounded-md bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="dark grid grid-cols-1 md:grid-cols-2 gap-lg">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="card">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-md">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-sm">
                    {skillGroup.items.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="px-md py-sm bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-lg text-sm hover:shadow-lg transition-shadow duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}