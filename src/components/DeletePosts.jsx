import dayjs from 'dayjs'
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, Input,  DatePicker} from "antd"
import { useEffect, useState } from 'react'

  
    export default function DeletePosts() {
      // const [form] = Form.useForm()
      const [deleteValues, setDeleteValues] = useState()
      const {id} = useParams()
      const navigate = useNavigate()
      useEffect(() => {

        fetch(`https://corwins-final-api.firebaseapp.com/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setDeleteValues(data.message)
            // form.setFieldsValue(data.message)
        })
        .catch(err => console.error(err) )

      }, [id]) 



    const onFinish = (values) => {
      console.log('success', values)

     
      
      fetch(`https://corwins-final-api.firebaseapp.com/posts/${id}`, {
        method: 'DELETE',
        headers: {
           'Content-Type': 'application/json'
           },
        body: JSON.stringify(values)
      })
      .then(response => response.json())
      .then(data => { 
        console.log(data)
        navigate('/posts')
      })
      
       .catch(console.error)
     
    }



    const onFinishFailed = (errorInfo) => {
      console.log('failed', errorInfo)
    }
  

  if(!deleteValues) return <p>Loading...</p>

   //console.log(DeleteForm)

  return (
    
    <Form 
    className='delete-form'
    initialValues={deleteValues}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    >

        <Form.Item
        
          name='author'
          label="author"
          labelCol={{ span: 5, offset: 0 }}
      wrapperCol={{ span: 8, offset:3}}
          // rules={[{ required: true, message: "Please input your Name!" }]}
          >
          <Input />
        </Form.Item>
    
        <Form.Item 
        name='recipient'
        label="recipient"
        labelCol={{ span: 5, offset: 0 }}
      wrapperCol={{ span: 8, offset:3}}
        >
          <Input />
        </Form.Item>

        <Form.Item
        name='subject'
        label="subject"
        labelCol={{ span: 5, offset: 0 }}
      wrapperCol={{ span: 8, offset:3}}
        >
          
          <Input.TextArea 
          
          rows={1}
          wrapperCol={{ span: 16, offset: 8 }}
          />


        </Form.Item>


        <Form.Item 
        name='message'
        label="message">
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item
         labelCol={{ span: 5, offset: 0 }}
         wrapperCol={{ span: 8, offset:3}}
          >
        <Form.Item 
          name='date'
          label="date">
             <DatePicker defaultValue={dayjs('YYYY-MM-DD')} />
        </Form.Item>
        <Button danger
        type="primary" 
        htmlType="submit"
        >Danger Delete</Button>
            
          
          
        </Form.Item>

      </Form>
      
    );
  };




