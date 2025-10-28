import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, Phone, Linkedin, Send } from 'lucide-react';

const ProjectCard = ({ title, tech, description, achievements }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50"
  >
    <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-0 transition group-hover:opacity-100 dark:from-white/5" />
    <div className="relative">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
      {achievements?.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
          {achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-900/10 dark:bg-white/5 dark:text-slate-200 dark:ring-white/10"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900/90 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-900 dark:bg-white/10 dark:hover:bg-white/20"
        >
          <Github className="h-4 w-4" />
          View GitHub Repository
        </a>
        <a href="#" className="inline-flex items-center gap-2 text-sm text-sky-600 hover:underline dark:text-sky-400">
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

const ContactCard = () => (
  <div id="contact" className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50">
    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Get in touch</h3>
    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">I’m open to internships, freelance projects, and collaborations.</p>

    <div className="mt-4 space-y-2 text-sm">
      <a href="tel:+918951553665" className="flex items-center gap-2 text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400">
        <Phone className="h-4 w-4" /> +91-89515-53665
      </a>
      <a href="mailto:saifshaikh7806@gmail.com" className="flex items-center gap-2 text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400">
        <Mail className="h-4 w-4" /> saifshaikh7806@gmail.com
      </a>
      <a href="https://linkedin.com/in/saif-shaikh50788430a" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400">
        <Linkedin className="h-4 w-4" /> linkedin.com/in/saif-shaikh50788430a
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400">
        <Github className="h-4 w-4" /> github.com/yourhandle
      </a>
    </div>

    <form className="mt-6 space-y-3">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800/70 dark:text-white"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800/70 dark:text-white"
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800/70 dark:text-white"
        />
      </div>
      <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.01]">
        <Send className="h-4 w-4" /> Send Message
      </button>
    </form>
  </div>
);

const Showcase = () => {
  return (
    <section id="projects" className="w-full bg-white px-6 py-16 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Projects
          </motion.h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">A snapshot of hands-on builds and experiments.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Hospital Management System"
            description="End-to-end platform for managing patients, appointments, and records with role-based access."
            tech={["Django", "PostgreSQL", "Bootstrap", "Docker"]}
            achievements={["Implemented secure authentication and authorization", "Optimized queries for faster patient lookup"]}
          />
          <ProjectCard
            title="GitHub Profile Scraper"
            description="CLI and web tool to fetch and analyze GitHub user data for insights on repos, stars, and tech usage."
            tech={["Python", "Flask", "Requests", "BeautifulSoup"]}
            achievements={["Rate-limited scraping with caching", "Interactive charts for language distribution"]}
          />
          <ProjectCard
            title="Recommendation System Implementation"
            description="Explored collaborative filtering and content-based methods to generate personalized suggestions."
            tech={["Python", "Pandas", "Scikit-learn", "Matplotlib"]}
            achievements={["Evaluated algorithms with precision/recall", "Pluggable pipeline for experimentation"]}
          />

          <ContactCard />
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-center text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300 sm:flex-row">
          <p>© {new Date().getFullYear()} Saif Usman Shaikh. Designed & Developed by Saif Usman Shaikh.</p>
          <a href="#home" className="inline-flex items-center gap-2 text-sky-600 transition hover:translate-y-[-2px] dark:text-sky-400">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Showcase;
