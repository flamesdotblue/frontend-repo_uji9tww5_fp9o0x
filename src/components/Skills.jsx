import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database } from 'lucide-react';

const SkillBadge = ({ label }) => (
  <span className="inline-flex items-center justify-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-900/10 dark:bg-white/5 dark:text-slate-200 dark:ring-white/10">
    {label}
  </span>
);

const Card = ({ title, icon: Icon, items, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50"
  >
    <div className={`pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full opacity-20 blur-3xl ${accent}`} />
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 ring-1 ring-white/60 dark:from-slate-800 dark:to-slate-900 dark:ring-slate-700">
        <Icon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((label) => (
        <SkillBadge key={label} label={label} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-slate-50 px-6 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Technical Skills
          </motion.h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Hands-on with modern stacks across frontend, backend, data, and cloud.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Languages & Core"
            icon={Code2}
            items={['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3']}
            accent="bg-sky-400"
          />
          <Card
            title="Frameworks & Libraries"
            icon={Code2}
            items={['React', 'Node.js', 'Django', 'Flask', 'Tailwind CSS']}
            accent="bg-fuchsia-400"
          />
          <Card
            title="Databases & Tools"
            icon={Database}
            items={['MongoDB', 'PostgreSQL', 'AWS', 'Power BI', 'Git', 'Linux']}
            accent="bg-emerald-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
