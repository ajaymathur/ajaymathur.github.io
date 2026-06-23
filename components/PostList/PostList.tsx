import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'
import styles from './PostList.module.scss'

function formatDate(dateStr: string): string {
  return new Date(dateStr)
    .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    .toUpperCase()
}

export default function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className={styles.empty}>No posts yet.</p>
  }

  return (
    <ul className={styles.list}>
      {posts.map(post => (
        <li key={post.slug} className={styles.item}>
          <time className={styles.date}>{formatDate(post.date)}</time>
          <h2 className={styles.title}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className={styles.readMore}>
            Read more →
          </Link>
        </li>
      ))}
    </ul>
  )
}
