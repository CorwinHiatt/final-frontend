// import kids from '../../kids.JPG';
import dad from "../../dad.jpg"
import { Card, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


const { Meta } = Card
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

          <div >
            <Card className="single-post-card"
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
                <SettingOutlined className="single-post-card" key="setting" onClick={() => navigate("/post/" + post.photoId + "/delete")} />,
                <EditOutlined key="edit" onClick={() => navigate("/post/" + post.photoId)} />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src={dad} />}
                title={post.author}
                description={post.subject}
              />
              <p ><span className="post-from">
                From:    </span>  {post.author} </p>
              <p><span className="post-to">To:  </span> {post.recipient} </p>
              <p><span className="post-message">Message:</span> {post.message} </p>
              <p><span className="post-date">Date:</span> {post.date} </p>



            </Card>
          </div>
        ))
      }
    </div>
  )
}