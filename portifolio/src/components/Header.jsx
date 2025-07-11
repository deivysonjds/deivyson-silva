'use client';

import Link from 'next/link';
import { useThemeStore } from '@/stores/themeStore';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const { theme } = useThemeStore();

  return (
    <header className={`fixed w-full z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-6 py-4 flex justify-end items-center">
        
        <nav className="hidden md:flex space-x-8 mr-14">
          <Link href="#home" className={`${"hover:text-purple-500 transition"} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Início</Link>
          <Link href="#about" className={`${"hover:text-purple-500 transition"} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Sobre mim</Link>
          <Link href="#skills" className={`${"hover:text-purple-500 transition"} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Habilidades</Link>
          <Link href="#projects" className={`${"hover:text-purple-500 transition"} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Projetos</Link>
          <Link href="#contact" className={`${"hover:text-purple-500 transition"} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Contato</Link>
        </nav>
        
        <ThemeToggle />
      </div>
    </header>
  );
}