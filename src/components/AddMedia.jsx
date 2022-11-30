// import { useState } from "react";


// export default function AddMedia() {

// const [fileBase64, setFileBase64] = useState('')
  
// function convertFile(files) {
//     if (files) {
//         const fileRef = files[0] 
//         const fileType = fileRef.type 
//         console.log("This file upload is of type:",fileType)
//         const reader = new FileReader()
//         reader.readAsBinaryString(fileRef)
//         reader.onload=(ev) => {
//             // convert it to base64
//             setFileBase64(`data:${fileType}; base64 ${files.btoa(ev.target.result)}`)
//           }
//         }
//       }
      
//       return(
//         <input type="file" onChange={(e)=> convertFile(e.target.files)} />
//       )
//     }