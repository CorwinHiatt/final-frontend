
import { Button } from "antd";
import {initializeApp} from "firebase/app";
import {getStorage, ref,  uploadBytes} from "firebase/storage";
import React, {useState} from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBXUA20Gyt9hISvjNqoJ6fBSWrhmZNtqVI",
  authDomain: "corwins-final-api.firebaseapp.com",
  projectId: "corwins-final-api",
  storageBucket: "corwins-final-api.appspot.com",
  messagingSenderId: "1019761420299",
  appId: "1:1019761420299:web:c8333bea13e8a831ed7f0e"
}

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState()
  const handleUpload = (e) => {
    e.preventDefault();
    if(!selectedFile) {
      alert("Please select a file");
      return;
    }


    //connects to Fireproject
    const app = initializeApp(firebaseConfig);
    //connect to bucket
    const storage = getStorage(app);
    //connect to a reference to our file in the bucket
    const filename = selectedFile?.name;
    const imgRef = ref(storage, "posts/" + filename)
    // create the url from reference
    const url = `https://firebasestorage.googleapis.com/v0/b/corwins-final-api/o/photos%2F${filename}?alt=media&token=bf0842ac-f071-4d91-beeb-c231815870c7`
   
   
    //create a file upload file to bucket
     uploadBytes(imgRef, selectedFile, url);
     //add an await or .then and then update our database with url 

  }

return(
  <>
  <p className="flex-box-for-imgUpload">

  <form onSubmit={handleUpload}
  >
    <input type='file'name="upload"
  onChange={(e) => setSelectedFile(e.currentTarget.files[0])}
>

</input>
<Button>+</Button>
  </form>
  </p>
  </>
)
}
//-------------------------------------------------------//
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AddVehicleForm() {
//   const [value, setValue] = useState();
//   const [filebase64, setFileBase64] = useState("");
//   const navigate = useNavigate();

//   function formSubmit(e) {
//     e.preventDefault();
//     // Submit your form with the filebase64 as one of your fields
//     value.filebase64 = filebase64
//     value.logs = []
//     console.log(value)
//     let newVehicleObj = value
//     fetch(process.env.REACT_APP_ENDPOINT, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(setValue)
//     })
//       .then(() => navigate("/"))
//       .catch(alert)
//   }

//   function convertFile(files) {
//     if (files) {
//       const fileRef = files[0] || ""
//       const fileType = fileRef.type || ""
//       if (fileType) {

//         console.log("This file upload is of type:", fileType)
//         const reader = new FileReader()
//         reader.readAsBinaryString(fileRef)
//         reader.onload = (ev) => {
//           // convert it to base64
//           setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
//         }
//       }
//       else {
//         setFileBase64("")
//       }
//     }
//   }
//   return(
//     <>
    
//     </>
//   )
// }

//------------------------------------------------------//
// import {useNavigate} from 'react-router-dom'

// import {useState} from 'react'
// import { PlusOutlined } from '@ant-design/icons';
// import { Modal, Upload } from 'antd';

// // const getBase64 = (file) =>
// //   new Promise((resolve, reject) => {
// //     const reader = new FileReader();
// //     reader.readAsDataURL(file);
// //     reader.onload = () => resolve(reader.result);
// //     reader.onerror = (error) => reject(error);
// //   });
// export default function ImgUpload() {
// //   const [previewOpen, setPreviewOpen] = useState(false);
// //   const [previewImage, setPreviewImage] = useState('');
// //   const [previewTitle, setPreviewTitle] = useState('');
// //   const [fileList, setFileList] = useState([
// //     {
// //       uid: '-1',
// //       name: 'image.png',
// //       status: 'done',
// //       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
// // },])
// //     const handleCancel = () => setPreviewOpen(false);
// //     const handlePreview = async (file) => {
// //       if (!file.url && !file.preview) {
// //         file.preview = await getBase64(file.originFileObj);
// //       }
// //       setPreviewImage(file.url || file.preview);
// //       setPreviewOpen(true);
// //       setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
// //     };
// //     const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
// //     const uploadButton = (
// //       <div>
// //         <PlusOutlined />
// //         <div
// //           style={{
// //             marginTop: 8,
// //           }}
// //         >
// //           Upload
// //         </div>
// //       </div>
// //     );
// //     return (
// //       <>
// //         <Upload
// //           action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
// //           listType="picture-card"
// //           fileList={fileList}
// //           onPreview={handlePreview}
// //           onChange={handleChange}
// //         >
// //           {fileList.length >= 8 ? null : uploadButton}
// //         </Upload>
// //         <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
// //           <img
// //             alt="example"
// //             style={{
// //               width: '100%',
// //             }}
// //             src={previewImage}
// //           />
// //         </Modal>
// //       </>
// //     );
// //   };
// const [value, setValue] = useState()
// const [filebase64, setFileBase64] = useState("")
//   function formSubmit(e) {
//     e.preventDefault();
//     // Submit your form with the filebase64 as one of your fields
//     value.filebase64 = filebase64
//     value.logs = []
//     console.log(value)
//     let newVehicleObj = value
//     fetch(process.env.REACT_APP_ENDPOINT, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newVehicleObj)
//     })
//     .then(response => response.json())
//     // .then(() => navigate("/"))
//     .catch(alert)
//   }
  
//   function convertFile(files) {
//     if (files) {
//       const fileRef = files[0] || ""
//       const fileType = fileRef.type || ""
//       if (fileType) {
        
//         console.log("This file upload is of type:", fileType)
//         const reader = new FileReader()
//         reader.readAsBinaryString(fileRef)
//         reader.onload = (ev) => {
//           // convert it to base64
//           setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
//         }
//       }
//       else {
//         setFileBase64("")
//       }
//     }}
//   }