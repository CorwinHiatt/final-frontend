import { useState } from "react"


export default function AddPosts({ setPosts }) {
  const [message, setMessage] = useState('')
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!message || !author || !date) {
      alert('Please fill in all fields')
      return
    }
    const newPost = { message, author, date }
    fetch(`https://corwins-final-api.firebaseapp.com/posts`, {
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
    return (
      <section className="add-posts">
      <h3>Add new Post</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="posts">Posts:
          <input type="text" name="message" required
            onChange={e => setMessage(e.target.value)}
            value={message} />
        </label><br />
        <label htmlFor="author">Author:
          <input type="text" name="author" required
            onChange={e => setAuthor(e.target.value)}
            value={author} />
        </label><br />
        <label htmlFor="date">Date:
          <input type="number" name="date" required
            onChange={e => setDate(e.target.value)}
            value={date} />
        </label><br />
        <input type='submit' value='Add Date' />
      </form>
    </section>
    )
  }
}