import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from'./Components/News';
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize=6
  
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress,setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route path='/'  element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country='in' category='general'/>}/>
       <Route path='/business'  element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country='in' category='business'/>}/>
       <Route path='/entertainment'  element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country='in' category='entertainment'/>}/>
       <Route path='/health'  element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key="health" country='in' category='health'/>}/>
       <Route path='/science'  element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country='in' category='science'/>}/>
       <Route path='/sports'  element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country='in' category='sports'/>}/>
       <Route path='/technology'  element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country='in' category='technology'/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    ) 
  }

export default App;
