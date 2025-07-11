'use client';

import { skills } from '@/constants/skills';
import { useThemeStore } from '@/stores/themeStore';

export default function Skills() {
  const { theme } = useThemeStore();

  return (
    <section id="skills" className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} py-20`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Minhas <span className="text-purple-500">habilidades</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className={`p-6 rounded-xl flex flex-col items-center transition-all hover:scale-105 transform ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} shadow-md`}
            >
              <div className="text-4xl mb-3" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                <div 
                  className="bg-purple-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}