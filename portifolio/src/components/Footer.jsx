'use client';

import { useThemeStore } from '@/stores/themeStore';
import SocialIcons from './SocialIcons';

export default function Footer() {
  const { theme } = useThemeStore();

  return (
    <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Deivyson Silva. Todos os direitos reservados</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}