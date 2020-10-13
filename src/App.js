import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import Shop from './Component/Shop/Shop';
import { createContext } from 'react';
import { useState } from 'react';

export const CatContext=createContext()

function App() {
const [category, setCategory]=useState("")

  return (
    <CatContext.Provider value={[category, setCategory]}>
      <Home></Home>
      <Shop></Shop>
    </CatContext.Provider>
   

  );
}

export default App;
