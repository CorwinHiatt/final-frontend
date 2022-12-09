import ImgUpload from "../ImgUpload";
import dad from "../../dad.jpg"
import kids from '../../kids.JPG';
import { Card, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const {Meta} = Card
export default function Posts() {
  const navigate = useNavigate();
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
          
          <div className="single-post-card">
          <Card
          hoverable 
          style={{ width: 300 }}
          cover={(post.image) ? 
            <img
            alt="example"
            src={post.image}
            />
            : null
          }
          actions={[
            <SettingOutlined key="setting" onClick={() => navigate ("/post/" + post.photoId + "/delete")} />,
            <EditOutlined key="edit" onClick={() => navigate("/post/" + post.photoId)} />,
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
      </div>
        ))
      }
  
    </div>
  )
}