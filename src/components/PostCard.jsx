export default function PostCard({ thisPost }) {
  
    return (
      <div className='post'>
        <h3>{thisPost.message}</h3>
        <p>{thisPost.recipient}, {thisPost.author}</p>
      </div>
    )
  }