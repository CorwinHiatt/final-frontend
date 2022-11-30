

// import PostCard from "../PostCard"
// import { useState, useEffect } from "react"

// export default function Feed() {
//   const [message, setMessage] = useState()
//   const [showUpload, setShowUpLoad] = useState(false)

//   useEffect(() => {
//     fetch('https://corwins-final-api.firebaseapp.com/posts')
//     .then(results => results.json())
//     .then(data => setMessage(data))
//     .catch(alert)
//   },[setMessage])
//   return(
//     <section className="feed">
//     {!message
//     ?<p>loading....</p>
//   : message.map(post => (
//     <Posts posts={post} setMessage={setMessage} key={post.photoId} />
//    ))

