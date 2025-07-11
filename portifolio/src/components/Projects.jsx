'use client';

import { projects } from '@/constants/projects';
import { useThemeStore } from '@/stores/themeStore';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const { theme } = useThemeStore();

  return (
    <section id="projects" className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} py-20`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Meus <span className="text-purple-500">projetos</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:scale-105 transform ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="h-48 bg-gray-500 relative overflow-hidden">
                <img className='h-full hover:scale-105 transition transform' src={`/projects${project.imgUrl}`} alt={project.title} />
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-semibold text-blck ${theme === 'dark' ? 'text-white' : '' }`}>{project.title}</h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className={`text-xs px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                  >
                    <FiGithub className="mr-1" /> Código fonte
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                    >
                      <FiExternalLink className="mr-1" /> demonstração
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}