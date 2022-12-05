import { Card } from 'antd'
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
    
      <div className="site-card-border-less-wrapper">
    <Card
      title="Post Card"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      
    <main className='posts'>
      {!posts
        ? <p>Loading...</p>
        : posts?.map((post) => (
          <>
           from: {post.author}--- to: {post.recipient}--- date: {post.date}--- message: {post.message}
      
            {/* {post.date} */}
            </>
        ))
      }
      
    </main>
    </Card>
    </div>
  )
}