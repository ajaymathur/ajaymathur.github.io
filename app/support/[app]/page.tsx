import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllApps, getApp, hasPrivacyPolicy } from '@/lib/apps'
import Prose from '@/components/Prose/Prose'
import styles from './page.module.scss'

type Props = { params: Promise<{ app: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllApps().map(a => ({ app: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { app } = await params
  const meta = getApp(app)
  return { title: `${meta.name} Support — Ajay N Mathur`, description: meta.tagline }
}

export default async function AppSupport({ params }: Props) {
  const { app } = await params
  const meta = getApp(app)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { default: Content } = await import(`@/apps/${app}/index.mdx`) as { default: React.ComponentType<any> }

  return (
    <article>
      <header className={styles.header}>
        <p className={styles.kicker}>
          <Link href="/support">App Support</Link>
        </p>
        <h1 className={styles.title}>{meta.name}</h1>
        <p className={styles.tagline}>{meta.tagline}</p>
        {meta.platforms.length > 0 && (
          <ul className={styles.platforms}>
            {meta.platforms.map(p => (
              <li key={p.name}>
                <span className={styles.platformName}>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
                  ) : (
                    p.name
                  )}
                </span>
                <span className={styles.platformReq}>{p.requirement}</span>
              </li>
            ))}
          </ul>
        )}
        <div className={styles.actions}>
          <a href={`mailto:${meta.contact}`}>Email support</a>
          {hasPrivacyPolicy(app) && (
            <Link href={`/support/${app}/privacy`}>Privacy policy</Link>
          )}
        </div>
      </header>
      <Prose>
        <Content />
      </Prose>
    </article>
  )
}
