import kids from '../../kids.JPG';
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

          <Card className="single-post-card"
            hoverable
            style={{ width: 275 }}
            cover={(post.image) ?
              <>

                {(post.image.toLowerCase().includes('mp4') ||
                  post.image.toLowerCase().includes('.mov')) ?

                  <video controls>
                    <source src={post.image}
                      type="video/mp4" />
                  </video>
                  :
                  <img
                    alt="single post img card"
                    src={post.image}
                  />
                }
              </>
              : null
            }
            actions={[
              <SettingOutlined className="single-post-card" key="setting" onClick={() => navigate("/post/" + post.photoId + "/delete")} />,
              <EditOutlined key="edit" onClick={() => navigate("/post/" + post.photoId)} />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            {post.author?.toLowerCase() === "dad" ?
              <Meta
                avatar={<Avatar src={dad} />}
                title={post.author}
                description={post.subject}
              />
              :
              <Meta
                avatar={<Avatar src={kids} />}
                title={post.author}
                description={post.subject}
              />

            }
            <p ><span className="post-from">
              From:    </span>  {post.author} </p>
            <p><span className="post-to">To:  </span> {post.recipient} </p>
            <p><span className="post-message">Message:</span> {post.message} </p>
            <p><span className="post-date">Date:</span> {post.date} </p>




          </Card>
        ))
      }
    </div>

  )
}