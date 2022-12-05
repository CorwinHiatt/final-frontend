// import { useState, useEffect } from "react"
import { Button, Form, Input,  DatePicker } from "antd"
  
    export default function AddPosts() {
  
    const onFinish = (values) => {
      console.log('success', values)

      fetch('https://corwins-final-api.firebaseapp.com/posts', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json'
           },
        body: JSON.stringify(values)
      })
      .then(response => response.json())
      .then(data => { 
        
        // setMessage('')
        // setAuthor('')
        // setDate(2022)
        console.log(data)
      })
      
       .catch(console.error)
     
    }
    const onFinishFailed = (errorInfo) => {
      console.log('failed', errorInfo)
    }
  
   

  return (
    <Form 
    name=""
    // onFinish={handleSubmit} 
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    >

        <Form.Item
          name={'author'}
          label="author"
          rules={[{ required: true, message: "Please input your Name!" }]}
          >
          <Input />
        </Form.Item>
    
        <Form.Item 
        name={['recipient']} 
        label="recipient"
        >
          <Input />
        </Form.Item>

        <Form.Item 
          name={['date']}
          label="date">
             <DatePicker />
        </Form.Item>

        <Form.Item 
        name={['message']} 
        label="message">
          <Input.TextArea  />
        </Form.Item>
        <Form.Item
        >
          <Form.Item>
          
          </Form.Item>
          <Button 
           name="submit-post-button"
           type="primary" 
           htmlType="submit"
           >
            Submit
          </Button>
        </Form.Item>

      </Form>
      
    );
  };




// const [message, setMessage] = useState('')
// const [author, setAuthor] = useState('')
// const [date, setDate] = useState('')
// const handleSubmit = (e) => {
  //   e.preventDefault()
  //------------------------------------------------------//
  
  
  //---------------------------------------------------//
  // if (!message || !author || !date) {
    //   alert('Please fill in all fields')
    //   return
    // }
      