// import {useState} from 'react'
// import AddMedia from './components/AddMedia'
// import PostCard from './components/PostCard'
import Header from './components/Header'
import Footer from './components/Footer'
import AddPosts from './components/AddPosts'
import './App.css';
import Posts from './components/Posts'



function App() {

  return (
    <div className="">
      <Posts  className= "postcard"/>
        <Header className= "header"/>
        <AddPosts  className= "addposts" />
        <Footer className="footer "/> 
    </div>
  );
}

export default App;
