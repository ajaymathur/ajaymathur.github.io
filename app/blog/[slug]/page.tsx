import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import styles from './page.module.scss'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return { title: `${post.title} — Ajay N Mathur`, description: post.excerpt }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr)
    .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    .toUpperCase()
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { default: PostContent } = await import(`@/blogs/${slug}.mdx`) as { default: React.ComponentType<any> }

  return (
    <article>
      <header className={styles.header}>
        <time className={styles.date}>{formatDate(post.date)}</time>
        <h1 className={styles.title}>{post.title}</h1>
        {post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </header>
      <div className={styles.content}>
        <PostContent />
      </div>
    </article>
  )
}
