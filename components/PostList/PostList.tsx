import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'
import { formatDate } from '@/lib/date'
import styles from './PostList.module.scss'

export default function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className={styles.empty}>No posts yet.</p>
  }

  return (
    <ul className={styles.list}>
      {posts.map(post => (
        <li key={post.slug} className={styles.item}>
          <time dateTime={post.date} className={styles.date}>{formatDate(post.date)}</time>
          <h2 className={styles.title}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className={styles.readMore}>
            Read more<span className="visually-hidden"> about {post.title}</span>{' '}
            <span aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
