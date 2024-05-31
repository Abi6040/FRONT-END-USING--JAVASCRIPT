import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './home' ;
import Nav from "./nav";
import Buy from './buy';
import TermsAndConditions from './TermsAndConditions';
import About from './about';
import Cart from './cart';
import ViewProduct from './zz';
import Pencil from './pencil';
import Note from './note';
import Geo from './geo';
import Ink from './ink';
import Paper from './paper';
import Eraser from './eraser';
import Box from './box';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App(){
  return(
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home  />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/buy' element={<Buy />}></Route>
        <Route path="/terms-and-conditions" element={<TermsAndConditions />}></Route> 
        <Route path="/about" element={<About />} ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/zz" element={<ViewProduct />}/>
        <Route path="/pencil" element={<Pencil />}/>
        <Route path="/note" element={<Note />} />
        <Route path="/box" element={<Box />} />
        <Route path='/eraser' element={<Eraser/>} />
        <Route path="/geo" element={<Geo />} />
        <Route path="/ink" element={<Ink />} />
      </Routes>
    </Router>
  );
}
export default App;