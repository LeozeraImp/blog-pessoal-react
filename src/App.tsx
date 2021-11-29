import React from 'react';
import NavBar from './components/estaticos/navbar/NavBar';
import Footer from './components/estaticos/footer/Footer';
import { Grid } from '@material-ui/core';
import Home from './paginas/home/Home';
import './App.css';


function App() {
  return (
    <>
      <NavBar />
        <Home />
        <Footer />
    </>

    
  );
}

export default App;
