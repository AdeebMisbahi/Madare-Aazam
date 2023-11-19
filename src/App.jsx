import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import { Navigate, Route, Routes } from 'react-router-dom';
import Introduction from './pages/ZindaShahMadar/Introduction'
import Shajra from './pages/ZindaShahMadar/Shajra'
import Alqabat from './pages/ZindaShahMadar/Alqabat'
import Miracles from './pages/ZindaShahMadar/Miracles'
import Books from './pages/ZindaShahMadar/Books'
import Home from './pages/Home'

const App =()=> {
    return(
     <>
    <Header />

     <Routes>
        <Route path="/" element = {< Home /> } />
        <Route path="/introduction" element = {<Introduction /> } />
        <Route path="/shajra" element = {<Shajra /> } />
        <Route path="/alqabat" element = {<Alqabat /> } />
        <Route path="/books" element = {<Books /> } />
        <Route path="/miracles" element = {<Miracles /> } />
        <Route path="*" element = {<Navigate to="/" /> } />
     </Routes>
     </>
    )
  
  
}

export default App;
