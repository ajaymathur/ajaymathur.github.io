import type { Metadata } from 'next'
import '@/styles/globals.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Ajay N Mathur',
  description: 'Notes on software engineering, life and work',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',s||d);})();`,
          }}
        />
      </head>
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
