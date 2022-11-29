import { useState } from "react"
import { Button, Form, Input, InputNumber, Upload, DatePicker } from "antd"





export default function AddPosts({ setPosts }) {

  const [message, setMessage] = useState('')
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()

    // if (!message || !author || !date) {
      //   alert('Please fill in all fields')
      //   return
      // }
      
      
      const newPost = { message, author, date }
      fetch('https://corwins-final-api.firebaseapp.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      })
      .then(response => response.json())
      .then(data => { 
        setPosts(data)
        setMessage('')
        setAuthor('')
        setDate(2022)
      })
      
       .catch(alert)
      
    }
    
    const onFinish = (values) => {
      console.log('success', values)
    }
    const onFinishFailed = (errorInfo) => {
      console.log('failed', errorInfo)
    }
  return (
    <Form name="author" onFinish={onFinish} onFinishFailed={onFinishFailed} >
        <Form.Item
          name={['user', 'name']}
          label="author"
          rules={[{ required: true,}, ]}
          >
          <Input />
        </Form.Item>
        <Form.Item>         
            <Upload />
             <DatePicker/>
        </Form.Item>
        <Form.Item name={['recipient', 'website']} label="recipient">
          <Input />
        </Form.Item>
        <Form.Item name={['message', 'introduction']} label="message">
          <Input.TextArea  />
        </Form.Item>
        <Form.Item
        >
          <Button type="primary" htmlType="submit"  >
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

    
    //   <section className="add-posts">
    //   <h3>Add new Post</h3>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="message"> Post:
    //       <input type="text" name="message" required
    //         onChange={e => setMessage(e.target.value)}
    //         value={message} />
    //     </label><br />
    //     <label htmlFor="author">Author:
    //       <input type="text" name="author" required
    //         onChange={e => setAuthor(e.target.value)}
    //         value={author} />
    //         <DatePicker/>
    //     </label><br />
    //     <Form.Item label="Upload" valuePropName="fileList">
    //       <Upload action="/upload.do" listType="picture-card">
    //         <div>
             
    //           <div
    //             style={{
    //               marginTop: 8,
    //             }}
    //           >
    //             Upload
    //           </div>
    //         </div>
    //       </Upload>
    //       </Form.Item>
    //     <label htmlFor="date">Date:
    //       <input type="number" name="date" required
    //         onChange={e => setDate(e.target.value)}
    //         value={date} />
    //     </label><br />
    //     <input type='submit' value='Add Post' />
    //   </form>
    // </section>