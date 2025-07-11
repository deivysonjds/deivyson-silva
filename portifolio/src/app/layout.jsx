// src/app/layout.jsx
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import ThemeProvider from './theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Deivyson J.',
  description: 'Portfolio de Deivyson J.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}