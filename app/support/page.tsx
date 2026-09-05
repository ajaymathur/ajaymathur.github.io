import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllApps, hasPrivacyPolicy } from '@/lib/apps'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'App Support — Ajay N Mathur',
  description: 'Support and privacy information for apps by Ajay N Mathur',
}

export default function SupportIndex() {
  const apps = getAllApps()

  return (
    <section>
      <header className={styles.header}>
        <h1 className={styles.title}>App Support</h1>
        <p className={styles.intro}>
          Help, frequently asked questions, and privacy policies for the apps I publish on the
          App Store and Google Play.
        </p>
      </header>

      {apps.length === 0 ? (
        <p className={styles.empty}>No apps yet.</p>
      ) : (
        <ul className={styles.list}>
          {apps.map(app => (
            <li key={app.slug} className={styles.item}>
              <h2 className={styles.appName}>
                <Link href={`/support/${app.slug}`}>{app.name}</Link>
              </h2>
              <p className={styles.tagline}>{app.tagline}</p>
              <p className={styles.platforms}>{app.platforms.map(p => p.name).join(' · ')}</p>
              <div className={styles.links}>
                <Link href={`/support/${app.slug}`}>Support</Link>
                {hasPrivacyPolicy(app.slug) && (
                  <Link href={`/support/${app.slug}/privacy`}>Privacy policy</Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
