// import {useState} from 'react'
// import AddMedia from './components/AddMedia'
// import PostCard from './components/PostCard'
import Header from './components/Header'
// import Home from './components/pages/Home'
import Footer from './components/Footer'
import AddPosts from './components/AddPosts'
import EditPosts from './components/EditPosts'
import DeletePosts from './components/DeletePosts'
import PostsFromKids from './components/pages/PostsFromKids'
import AddPostsFromKids from './components/AddPostsFromKids'
import './App.css';
import Posts from './components/pages/Posts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Calendar } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs'


function App() {

  return (
 
    <Router>
      <Header />
      <Routes >
        {/* <Route path="/home" element={<Posts/>} /> */}
        <Route path="/calender" element={<Calendar />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/add-post" element={<AddPosts />} />
        <Route path="/add-post-from-kids" element={<AddPostsFromKids />} />
        <Route path="/posts-from-kids" element={<PostsFromKids />} />
        <Route path="/post/:id" element={<EditPosts />} />
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id/delete" element={<DeletePosts />} />
      </Routes>
      <Footer />
    </Router>
   
  );
}

export default App;
