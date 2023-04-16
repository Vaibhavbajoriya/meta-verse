import { useState } from 'react'
import { Route, Routes } from 'react-router';
import {Login} from "./app/login.jsx";
import Page from './app/page.jsx';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Page/>}></Route>
      </Routes>
         </div>
  )
}

export default App
