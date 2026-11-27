import { getAllPosts } from '@/lib/posts'
import PostList from '@/components/PostList/PostList'

export default function Home() {
  const posts = getAllPosts()
  return (
    <>
      <h1 className="visually-hidden">Posts</h1>
      <PostList posts={posts} />
    </>
  )
}
