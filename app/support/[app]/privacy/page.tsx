import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllApps, getApp, getAppPrivacy, hasPrivacyPolicy } from '@/lib/apps'
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

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
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
        <p className={styles.kicker}>
          <Link href="/support">App Support</Link>
          <span className={styles.sep}>/</span>
          <Link href={`/support/${app}`}>{meta.name}</Link>
        </p>
        <h1 className={styles.title}>{privacy.title}</h1>
        <p className={styles.updated}>Last updated {formatDate(privacy.updated)}</p>
      </header>
      <Prose>
        <Content />
      </Prose>
    </article>
  )
}
