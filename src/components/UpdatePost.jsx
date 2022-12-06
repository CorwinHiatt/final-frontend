import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function UpdatePost(){
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    // fetch('https://first-hosting-fire.web.app/posts')
      fetch(`http://localhost:3000/posts/${data.uid}`, {
        method: 'PATCH',
        headers: {
        "Content-Type": "application/json",
        }, body: JSON.stringify(data)

      })

  }
  return(
    <>
    
    
    </>

  )

}