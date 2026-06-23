import { getAllPosts } from '@/lib/posts'
import PostList from '@/components/PostList/PostList'

export default function Home() {
  const posts = getAllPosts()
  return <PostList posts={posts} />
}
