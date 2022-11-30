import { useEffect, useState } from 'react'


export default function Posts() {
  const [posts, setPosts] = useState()
  useEffect(() => {
    fetch('https://corwins-final-api.firebaseapp.com/posts')
      .then(response => response.json())
      .then(setPosts)
      .catch(console.error())
    }, [setPosts])
    
  return (
    <main className='posts'>
      {!posts
        ? <p>Loading...</p>
        : posts?.map((post) => (
          <>
            {post.author}
            </>
        ))
      }
    </main>
  )
}