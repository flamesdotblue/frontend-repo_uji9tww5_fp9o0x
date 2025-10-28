import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),rgba(17,24,39,0.6))]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur-md ring-1 ring-white/15"
        >
          Futuristic • Corporate Elegance • Animation-rich
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-gradient-to-r from-white via-sky-200 to-fuchsia-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
        >
          Saif Usman Shaikh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg"
        >
          Full Stack Developer | Data Analyst | Cloud Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#resume"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-900 shadow-lg shadow-sky-500/20 transition hover:scale-[1.02] hover:shadow-sky-400/30"
          >
            <span className="font-semibold">View Resume</span>
            <span className="text-slate-500 transition group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-fuchsia-600 px-5 py-3 font-semibold shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.02]"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 h-28 w-28 overflow-hidden rounded-full ring-4 ring-white/20"
        >
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-xs text-slate-300">
            Add Photo
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
