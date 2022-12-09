import {initializeApp} from "firebase/app";
import {getStorage, ref,  uploadBytes} from "firebase/storage"
import dayjs from 'dayjs'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Button, Form, Input, DatePicker, Modal, Upload } from "antd"
import { PlusOutlined } from '@ant-design/icons'

const firebaseConfig = {
  apiKey: "AIzaSyBXUA20Gyt9hISvjNqoJ6fBSWrhmZNtqVI",
  authDomain: "corwins-final-api.firebaseapp.com",
  projectId: "corwins-final-api",
  storageBucket: "corwins-final-api.appspot.com",
  messagingSenderId: "1019761420299",
  appId: "1:1019761420299:web:c8333bea13e8a831ed7f0e"
}

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  })

export default function AddPosts() {
  const navigate = useNavigate()
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileObj, setFileObj] = useState();

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setFileObj(file.originFileObj)
    setPreviewImage(file.url || file.preview);
    setPreviewTitle(file.name);
    setPreviewOpen(true);
  };
  const handleChange = async (obj) => {
    console.log(obj.file.name, obj.file.originFileObj)
      setFileObj(obj.file.originFileObj)
      setPreviewTitle(obj.file.name);
  };
  // const handlePreview = async (file) => {
  // };

  const onFinish = async (values) => {
    console.log({ previewTitle, fileObj})

    // get photo from values.image.???
    // first, upload photo to storage (ImgUpload:26-40)

    //connects to Fireproject
    const app = initializeApp(firebaseConfig);
    //connect to bucket
    const storage = getStorage(app);
    //connect to a reference to our file in the bucket
    const imgRef = ref(storage, "posts/" + previewTitle)
    //Todd's quick cheat - create the url from reference
    const url = `https://firebasestorage.googleapis.com/v0/b/corwins-final-api.appspot.com/o/posts%2F${previewTitle}?alt=media`
    
   
    //create a file upload file to bucket
     await uploadBytes(imgRef, fileObj);
     //add an await or .then and then update our database with url 
    console.log(url)
    // then (notice on line 40 it says to add await or .then...)
    // we need to replace values.image with the url we created on line 35
    let newPost = values
    newPost.image = url
 /// THIS ALL GOES IN .then OR after the AWAIT
   fetch('https://corwins-final-api.firebaseapp.com/posts', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(newPost)
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
        <Upload
         name='image'
          action=""
          listType="picture-card"
          onPreview={handlePreview}
          onChange={handleChange}
        >
          <div>
            <PlusOutlined />
            <div>
              Upload
            </div>
          </div>
        </Upload>
        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
          <img
            alt="example"
            style={{
              width: '100%',
            }}
            src={previewImage}
          />
        </Modal>
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
        wrapperCol={{ span: 16, offset: 8 }}
      >
        <Input.TextArea

          rows={1}
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
          <DatePicker defaultValue={dayjs('YYYY-MM-DD')} />
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




