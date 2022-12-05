// import {useState} from 'react'
// import AddMedia from './components/AddMedia'
// import PostCard from './components/PostCard'
import Header from './components/Header'
import Home from './components/pages/Home'
import Footer from './components/Footer'
import AddPosts from './components/AddPosts'
import './App.css';
import Posts from './components/Posts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (

    <Router>
      <Header />
      <Routes >
        <Route path="/posts" element={<Posts />} />
        <Route path="/add-post" element={<AddPosts />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
