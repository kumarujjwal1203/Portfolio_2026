'use client';

import { motion } from 'framer-motion';
import { projects } from '../lib/portfolioData';

const projectMeta = [
  {
    tag: 'Full-stack',
    accent: 'from-lime-300 via-emerald-300 to-cyan-300',
    glow: 'shadow-lime-500/10',
    button: 'Live Project'
  },
  {
    tag: 'AI Learning',
    accent: 'from-fuchsia-300 via-violet-300 to-sky-300',
    glow: 'shadow-fuchsia-500/10',
    button: 'View Code'
  },
  {
    tag: 'Android AI',
    accent: 'from-orange-300 via-pink-300 to-purple-300',
    glow: 'shadow-orange-500/10',
    button: 'View Code'
  },
  {
    tag: 'Backend API',
    accent: 'from-sky-300 via-teal-300 to-emerald-300',
    glow: 'shadow-sky-500/10',
    button: 'GitHub'
  }
];

const medCareScreens = [
  {
    src: '/projects/medcare-dashboard.png',
    label: 'Dashboard'
  },
  {
    src: '/projects/medcare-auth.png',
    label: 'Authentication'
  }
];

function MedCarePreview() {
  return (
    <div className="relative min-h-[20rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#05090b] p-3 shadow-2xl shadow-black/50 sm:min-h-[28rem] sm:rounded-[1.6rem] sm:p-4">
      <div className="absolute -right-8 -top-10 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl sm:-right-16 sm:-top-16 sm:h-64 sm:w-64" />
      <div className="absolute -bottom-14 left-4 h-48 w-48 rounded-full bg-lime-300/10 blur-3xl sm:-bottom-20 sm:left-6 sm:h-64 sm:w-64" />
      <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-300/80" />
        </div>
        <span className="text-[0.62rem] font-black uppercase tracking-[0.28em] text-white/35">MedCare UI</span>
      </div>

      <div className="relative mt-4 grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
        {medCareScreens.map((screen, screenIndex) => (
          <motion.figure
            key={screen.src}
            whileHover={{ y: -8, scale: 1.025 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className={`group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/45 ${screenIndex === 1 ? 'md:mt-12' : ''}`}
          >
            <img
              src={screen.src}
              alt={`MedCare Connect ${screen.label} screen`}
              className="h-full min-h-[12rem] w-full object-cover object-left-top transition duration-500 group-hover:scale-[1.04] sm:min-h-[20rem] md:min-h-[18rem]"
            />
            <figcaption className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[0.62rem] font-black uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
              {screen.label}
            </figcaption>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />
          </motion.figure>
        ))}
      </div>
    </div>
  );
}

function MindForgePreview() {
  return (
    <div className="relative min-h-[20rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#080712] p-3 shadow-2xl shadow-black/50 sm:min-h-[28rem] sm:rounded-[1.6rem] sm:p-4">
      <div className="absolute -left-8 -top-10 h-44 w-44 rounded-full bg-violet-500/25 blur-3xl sm:-left-16 sm:-top-16 sm:h-64 sm:w-64" />
      <div className="absolute -bottom-14 right-4 h-52 w-52 rounded-full bg-fuchsia-400/15 blur-3xl sm:-bottom-20 sm:right-6 sm:h-72 sm:w-72" />
      <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-300/80" />
        </div>
        <span className="text-[0.62rem] font-black uppercase tracking-[0.28em] text-white/35">MindForge AI</span>
      </div>

      <motion.figure
        whileHover={{ y: -8, scale: 1.018 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        className="group relative mt-4 overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/45"
      >
        <img
          src="/projects/mindforge-dashboard.png"
          alt="MindForge AI dashboard screen"
          className="h-full min-h-[15rem] w-full object-cover object-left-top transition duration-500 group-hover:scale-[1.035] sm:min-h-[24rem]"
        />
        <figcaption className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[0.62rem] font-black uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
          Learning Dashboard
        </figcaption>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
      </motion.figure>
    </div>
  );
}

function CareerBotPreview() {
  return (
    <div className="relative min-h-[20rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0c0714] p-3 shadow-2xl shadow-black/50 sm:min-h-[28rem] sm:rounded-[1.6rem] sm:p-4">
      <div className="absolute -right-8 -top-10 h-44 w-44 rounded-full bg-purple-400/25 blur-3xl sm:-right-16 sm:-top-16 sm:h-64 sm:w-64" />
      <div className="absolute -bottom-14 left-4 h-52 w-52 rounded-full bg-orange-300/15 blur-3xl sm:-bottom-20 sm:left-8 sm:h-72 sm:w-72" />
      <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-300/80" />
        </div>
        <span className="text-[0.62rem] font-black uppercase tracking-[0.28em] text-white/35">CareerBot App</span>
      </div>

      <div className="relative mt-4 grid place-items-center rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-5">
        <motion.figure
          whileHover={{ y: -8, scale: 1.025 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          className="group relative w-full max-w-[18rem] overflow-hidden rounded-[2rem] border border-white/15 bg-black shadow-2xl shadow-purple-950/40 sm:max-w-[20rem]"
        >
          <img
            src="/projects/careerbot-signup.jpeg"
            alt="CareerBot create account mobile screen"
            className="h-[23rem] w-full object-cover object-top transition duration-500 group-hover:scale-[1.035] sm:h-[34rem]"
          />
          <figcaption className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[0.62rem] font-black uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
            Mobile Signup
          </figcaption>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />
        </motion.figure>
      </div>
    </div>
  );
}

function InventForgePreview() {
  return (
    <div className="relative min-h-[20rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#060b10] p-3 shadow-2xl shadow-black/50 sm:min-h-[28rem] sm:rounded-[1.6rem] sm:p-4">
      <div className="absolute -left-8 -top-10 h-44 w-44 rounded-full bg-sky-400/20 blur-3xl sm:-left-16 sm:-top-16 sm:h-64 sm:w-64" />
      <div className="absolute -bottom-14 right-4 h-52 w-52 rounded-full bg-emerald-300/12 blur-3xl sm:-bottom-20 sm:right-8 sm:h-72 sm:w-72" />
      <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-300/80" />
        </div>
        <span className="text-[0.62rem] font-black uppercase tracking-[0.28em] text-white/35">FastAPI Backend</span>
      </div>

      <motion.figure
        whileHover={{ y: -8, scale: 1.018 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        className="group relative mt-4 overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/45"
      >
        <img
          src="/projects/invent-forge-code.png"
          alt="Invent Forge FastAPI backend code screen"
          className="h-full min-h-[15rem] w-full object-cover object-left-top transition duration-500 group-hover:scale-[1.035] sm:min-h-[24rem]"
        />
        <figcaption className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[0.62rem] font-black uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
          Code Architecture
        </figcaption>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
      </motion.figure>
    </div>
  );
}

function ProjectMockup({ project, accent }) {
  return (
    <div className="relative min-h-[22rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#090b0d] p-4 shadow-2xl shadow-black/50 sm:min-h-[26rem]">
      <div className={`absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${accent} opacity-25 blur-3xl`} />
      <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-300/80" />
        </div>
        <span className="text-[0.62rem] font-black uppercase tracking-[0.28em] text-white/35">Preview</span>
      </div>

      <div className="relative mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className={`mb-3 bg-gradient-to-r ${accent} bg-clip-text text-[0.65rem] font-black uppercase tracking-[0.24em] text-transparent`}>
            {project.name}
          </p>
          <h4 className="max-w-[17rem] text-3xl font-black leading-none tracking-normal text-white sm:text-4xl">
            {project.impact}
          </h4>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {project.tech.slice(0, 4).map((item) => (
              <span key={item} className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-4 text-xs font-bold text-white/70">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-white/35">System</span>
              <span className={`h-2.5 w-20 rounded-full bg-gradient-to-r ${accent}`} />
            </div>
            <div className="space-y-3">
              <span className="block h-3 w-full rounded-full bg-white/15" />
              <span className="block h-3 w-10/12 rounded-full bg-white/10" />
              <span className="block h-3 w-8/12 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <span className="text-3xl font-black text-white">6+</span>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/35">Modules</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <span className={`bg-gradient-to-r ${accent} bg-clip-text text-3xl font-black text-transparent`}>
                AI
              </span>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/35">Integrated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectStackCard({ project, index }) {
  const meta = projectMeta[index % projectMeta.length];

  return (
    <motion.article
      style={{ zIndex: 20 + index, top: `${1.5 + index * 0.75}rem` }}
      initial={{ opacity: 0, y: 72, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[1.6rem] border-2 border-slate-200/70 bg-[#080808] p-4 shadow-2xl ${meta.glow} transition-colors duration-300 hover:border-white/95 sm:rounded-[2rem] sm:p-7 md:sticky lg:rounded-[2.8rem] lg:p-10`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <div className="pointer-events-none absolute inset-0 bg-[#080808]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.1),transparent_28rem)] opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>

      <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <span className="text-6xl font-black leading-none tracking-normal text-slate-200 sm:text-8xl">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <p className={`mb-3 bg-gradient-to-r ${meta.accent} bg-clip-text text-xs font-black uppercase tracking-[0.3em] text-transparent`}>
              {meta.tag}
            </p>
            <h3 className="text-[2.35rem] font-black uppercase leading-none tracking-normal text-white sm:text-5xl lg:text-6xl">
              {project.name}
            </h3>
          </div>
        </div>

        <div className="flex w-full flex-wrap gap-3 sm:w-auto md:justify-end">
          {project.links?.map((link) => (
            <motion.a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full border border-white/20 bg-white/[0.04] px-4 text-[0.68rem] font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-black/30 transition hover:border-white/60 hover:bg-white/10 sm:min-h-14 sm:w-fit sm:px-5 sm:text-xs sm:tracking-[0.18em]"
              key={link.label}
            >
              {link.label}
              <span className={`grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br ${meta.accent} text-black transition-transform group-hover:rotate-45`}>
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="relative mt-8 grid gap-7 sm:mt-10 sm:gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-xl font-extrabold leading-tight text-white sm:text-2xl">
            {project.impact}
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/58">
            {project.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-xs font-bold text-white/65 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.11] hover:text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20 }}
          className="transform-gpu"
        >
          {index === 0 ? <MedCarePreview /> : index === 1 ? <MindForgePreview /> : index === 2 ? <CareerBotPreview /> : <InventForgePreview />}
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-[12] overflow-hidden bg-[#0a0a0a] px-4 py-20 text-white sm:px-8 sm:py-24 md:overflow-visible lg:px-16 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(163,230,53,0.08),transparent_30rem),radial-gradient(circle_at_78%_20%,rgba(217,70,239,0.08),transparent_28rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-white/40">Featured Work</p>
          <h2 className="max-w-5xl text-[3.45rem] font-black uppercase leading-[0.84] tracking-normal text-white sm:text-8xl lg:text-[9.5rem]">
            Projects
          </h2>
        </motion.div>

        <div className="grid gap-12 pb-20 lg:gap-16 lg:pb-[35vh]">
          {projects.map((project, index) => (
            <ProjectStackCard project={project} index={index} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
