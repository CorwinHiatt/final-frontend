
import { Button } from "antd";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";

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
    if (!selectedFile) {
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

  return (
    <>
      <p className="flex-box-for-imgUpload">

        <form onSubmit={handleUpload}
        >
          <input type='file' name="upload"
            onChange={(e) => setSelectedFile(e.currentTarget.files[0])}
          >

          </input>
          <Button>+</Button>
        </form>
      </p>
    </>
  )
}
