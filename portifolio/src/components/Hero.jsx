'use client';

import { useThemeStore } from '@/stores/themeStore';
import SocialIcons from './SocialIcons';

export default function Hero() {
  const { theme } = useThemeStore();

  return (
    <section id="home" className={`min-h-screen flex items-center pt-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Olá, me chamo <span className="text-purple-500">Deivyson!</span>
          </h1>
          <h2 className={`text-2xl md:text-3xl mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            desenvolvedor fullstack e RPA.
          </h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            apaixonado por tecnologia e filosofia, sempre buscando aprender e inovar.
          </p>
          <SocialIcons className="mt-8" />
        </div>
        <div className="w-64 md:w-1/3 md:mt-0 flex justify-center items-start">
          <div className="relative mx-auto ">
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-purple-500 shadow-lg hover:scale-105 transition transform">
              <img
                src="/imgs/perfil.JPG"
                alt="Perfil"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}