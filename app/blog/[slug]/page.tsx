import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/date'
import Prose from '@/components/Prose/Prose'
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

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { default: PostContent } = await import(`@/blogs/${slug}.mdx`) as { default: React.ComponentType<any> }

  return (
    <article>
      <header className={styles.header}>
        <time dateTime={post.date} className={styles.date}>{formatDate(post.date)}</time>
        <h1 className={styles.title}>{post.title}</h1>
        {post.tags.length > 0 && (
          <ul className={styles.tags} aria-label="Tags">
            {post.tags.map(tag => (
              <li key={tag} className={styles.tag}>{tag}</li>
            ))}
          </ul>
        )}
      </header>
      <Prose>
        <PostContent />
      </Prose>
    </article>
  )
}
