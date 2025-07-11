'use client';

import { mainSocialLinks } from '@/constants/sociallinks';
import { useThemeStore } from '@/stores/themeStore';

export default function SocialIcons({ className = '' }) {
  const { theme } = useThemeStore();

  return (
    <div className={`flex space-x-4 ${className}`}>
      {mainSocialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl transition hover:scale-105 transform ${theme === 'dark' ? 'text-white hover:text-white hover:scale-125' : 'text-black hover:text-black hover:scale-125'}`}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}