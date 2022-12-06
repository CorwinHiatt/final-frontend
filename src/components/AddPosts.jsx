import dayjs from 'dayjs'
import { useNavigate } from "react-router-dom"
import { Button, Form, Input,  DatePicker, Te} from "antd"
  
    export default function AddPosts() {
      const navigate = useNavigate()

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
        console.log(data)
        navigate('/posts')
      })
      
       .catch(console.error)
     
    }



    const onFinishFailed = (errorInfo) => {
      console.log('failed', errorInfo)
    }
  
   

  return (
    
    <Form 

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
        name={['subject']}
        label="subject"
        >
          <Input.TextArea 
          
          rows={1}
          wrapperCol={{ span: 16, offset: 8 }}
          />


        </Form.Item>


        <Form.Item 
        name={['message']} 
        label="message">
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 16, offset: 8 }}
          >
        <Form.Item 
          name={['date']}
          label="date">
             <DatePicker defaultValue={dayjs('2015-01-01', 'YYYY-MM-DD')} />
        </Form.Item>
          <Button 
           name="submit-post-button"
           type="primary" 
           htmlType="submit" >
            
            Submit
          </Button>
        </Form.Item>

      </Form>
      
    );
  };




