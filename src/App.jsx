import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import ProfileSections from './components/ProfileSections';
import Skills from './components/Skills';
import Showcase from './components/Showcase';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-md dark:bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500" />
            Saif Usman Shaikh
          </a>
          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-6 text-sm text-slate-700 dark:text-slate-300 sm:flex">
              <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400">About</a>
              <a href="#skills" className="hover:text-sky-600 dark:hover:text-sky-400">Skills</a>
              <a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400">Projects</a>
              <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400">Contact</a>
            </nav>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-slate-900/10 transition hover:bg-slate-900/5 dark:ring-white/10 dark:hover:bg-white/5"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <ProfileSections />
        <Skills />
        <Showcase />
      </main>
    </div>
  );
}

export default App;
