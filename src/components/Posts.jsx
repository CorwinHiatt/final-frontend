import { useEffect } from 'react'
import PostCard from './PostCard'

export default function Posts({ posts, setPosts }) {
  
  useEffect(() => {
    fetch('https://corwins-final-api.firebaseapp.com/posts')
      .then(response => response.json())
      .then(setPosts)
      .catch(alert)
  }, [setPosts])

  return (
    <main className='posts'>
      {!posts
        ? <p>Loading...</p>
        : posts.map(thisPost => <PostCard key={thisPost.photoId} 
          thisPost={thisPost} />)
      }
    </main>
  )
}