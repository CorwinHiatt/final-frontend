import {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PostCard from './components/PostCard'
import AddPosts from './components/AddPosts'
import './App.css';


function App() {
 const [posts, setPosts] = useState([])
  return (
    <div className="App">
        <Header className= "header"/>
        <PostCard setPosts={setPosts} posts={posts} className= "postcard"/>
        <AddPosts 
        setPosts={setPosts} posts={posts} className= "addposts"
        />
        <Footer className="footer "/> 
    </div>
  );
}

export default App;
