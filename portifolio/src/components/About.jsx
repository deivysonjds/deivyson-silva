'use client';

import { useThemeStore } from '@/stores/themeStore';

export default function About() {
  const { theme } = useThemeStore();

  return (
    <section id="about" className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} py-20`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Sobre <span className="text-purple-500">mim</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center hover:scale-105 transition transform">
            <div className={`rounded-lg p-2 ${theme === 'dark' ? 'bg-purple-500' : 'bg-gray-100'} shadow-lg`}>
              <div className="w-64 h-64 bg-purple-500 rounded-lg">
                <img src="./imgs/perfil_about.jpeg" alt="perfil" />
              </div>
            </div>
          </div>
          
          <div className={`md:w-2/3 md:pl-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <h3 className="text-2xl font-semibold mb-4">Quem sou eu?</h3>
            <p className="mb-4 text-lg">
              atualmente cursando Sistemas para Internet pela UNICAP.

              Desenvolvo projetos de automações web utilizando Selenium, 
              além de automações com planilhas empregando VBA (Visual Basic for Applications) 
              e Python.
            </p>
            <p className="mb-6 text-lg">
              Como desenvolvedor Full stack, tenho experiência com Node.js, java spring, PostgreSQL, Fastify, prismaORM, React, angular.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><span className="font-medium">Nome:</span> Deivyson Silva</p>
                <p><span className="font-medium">Email:</span> dev.deivyson@gmail.com</p>
              </div>
              <div>
                <p><span className="font-medium">País:</span> Brasil</p>
                <p><span className="font-medium">Freelance:</span> Disponível</p>
              </div>
            </div>
            
            <a href="/documents/cv.pdf" target="_blank" rel="noopener noreferrer" download={true}>
              <button className="hover:scale-105 transition transform mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition">
                Currículo
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}