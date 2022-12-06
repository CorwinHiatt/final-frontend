import dad from "../../dad.jpg"
import kids from '../../kids.JPG';
import { Card, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react'

const {Meta} = Card
export default function Posts() {
  const [posts, setPosts] = useState()
  useEffect(() => {
    fetch('https://corwins-final-api.firebaseapp.com/posts')
      .then(response => response.json())
      .then(setPosts)
      .catch(console.error())
    }, [])
    
  return (
    
      <div className="site-card-border-less-wrapper">
   
    
      {!posts
        ? <p>Loading...</p>
        : posts?.map((post) => (
          
          <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={kids}
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
           <Meta
      avatar={<Avatar src={dad} />}
      title={post.author}
      description={post.subject}
    />

          <p >
           from: {post.author}
           </p>
           <p>| to: {post.recipient} </p>
           <p>| date: {post.date} | </p>
           <p>message: {post.message}
            </p>


    </Card>
        ))
      }
  
    </div>
  )
}