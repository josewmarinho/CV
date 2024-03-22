import { SEOComponent } from '@/components/seo';

import '@/shared/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEOComponent />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
