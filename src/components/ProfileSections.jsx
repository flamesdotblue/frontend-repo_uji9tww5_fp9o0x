import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{subtitle}</p>
    )}
  </div>
);

const ProfileSections = () => {
  return (
    <section id="about" className="relative w-full bg-white/60 px-6 py-16 backdrop-blur-sm dark:bg-slate-900/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50"
          >
            <SectionTitle title="About Me" subtitle="Summary" />
            <p className="text-slate-700 dark:text-slate-300">
              Entry-level Software Developer skilled in Full Stack Development and Data Analytics. Passionate about building practical, scalable solutions with modern web technologies and deriving insights from data. Interests include Open Source, Cloud, and Algorithms. Based in Belagavi, Karnataka.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50"
          >
            <SectionTitle title="Education" subtitle="Academic Journey" />
            <div className="relative">
              <div className="space-y-4 border-l-2 border-sky-200 pl-4 dark:border-sky-800">
                <div className="relative">
                  <span className="absolute -left-[9px] top-1 block h-4 w-4 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 ring-4 ring-white dark:ring-slate-900" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">BE Computer Science and Engineering</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Angadi Institute of Technology and Management • 2026</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">CGPA: 8.35</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50"
        >
          <SectionTitle title="Certifications" subtitle="Credly & Academy" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-900 dark:text-white">AWS Academy Cloud Foundations</h4>
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400 ring-1 ring-amber-500/20">Badge</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Fundamentals of cloud computing, core AWS services, security, pricing, and architecture best practices.</p>
            </div>
            <div className="group rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-900 dark:text-white">Advanced Excel & Power BI</h4>
                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400 ring-1 ring-sky-500/20">Certificate</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Data analysis, dashboards, and storytelling with interactive visualizations.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSections;
