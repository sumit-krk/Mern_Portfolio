import { ReactNode } from 'react';
import { Provider } from './provider';
import './globals.css';

export const metadata = {
  title: 'Sumit Kumar — Developer Portfolio',
  description: 'Full-stack developer portfolio showcasing projects, skills, and experience. Built with Next.js and Chakra UI.',
  keywords: ['developer', 'portfolio', 'full-stack', 'react', 'nextjs'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}