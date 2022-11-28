import { useEffect } from 'react'
import PostCard from './PostCard'

export default function AlbumList({ posts, setPosts }) {
  
  useEffect(() => {
    fetch('https://corwins-final-api.firebaseapp.com/posts')
      .then(response => response.json())
      .then(setPosts)
      .catch(alert)
  }, [setPosts])

  return (
    <main className='posts'>
      {!albums
        ? <p>Loading...</p>
        : posts.map(thisPost => <PostCard key={thisPost.postId} 
          thisPost={thisPost} />)
      }
    </main>
  )
}