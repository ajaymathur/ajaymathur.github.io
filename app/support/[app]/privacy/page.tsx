import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllApps, getApp, getAppPrivacy, hasPrivacyPolicy } from '@/lib/apps'
import { formatDate } from '@/lib/date'
import Prose from '@/components/Prose/Prose'
import styles from './page.module.scss'

type Props = { params: Promise<{ app: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllApps()
    .filter(a => hasPrivacyPolicy(a.slug))
    .map(a => ({ app: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { app } = await params
  const meta = getApp(app)
  const privacy = getAppPrivacy(app)
  return {
    title: `${privacy.title} — Ajay N Mathur`,
    description: `Privacy policy for the ${meta.name} app`,
  }
}

export default async function AppPrivacy({ params }: Props) {
  const { app } = await params
  const meta = getApp(app)
  const privacy = getAppPrivacy(app)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { default: Content } = await import(`@/apps/${app}/privacy.mdx`) as { default: React.ComponentType<any> }

  return (
    <article>
      <header className={styles.header}>
        <nav aria-label="Breadcrumb" className={styles.kicker}>
          <Link href="/support">App Support</Link>
          <span className={styles.sep} aria-hidden="true">/</span>
          <Link href={`/support/${app}`}>{meta.name}</Link>
        </nav>
        <h1 className={styles.title}>{privacy.title}</h1>
        <p className={styles.updated}>
          Last updated <time dateTime={privacy.updated}>{formatDate(privacy.updated, 'long')}</time>
        </p>
      </header>
      <Prose>
        <Content />
      </Prose>
    </article>
  )
}
