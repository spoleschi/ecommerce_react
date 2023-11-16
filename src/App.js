// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from  './components/Navbar/NavScroll';
// import BotonStyle from './components/BotonStyle/BotonStyle';
// import NabvarMondony from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import NavbarBS from './components/Navbar/NavbarBS';
// import ItemCount from './components/ItemCount/ItemCount';
// import NavScrollExample from './components/Navbar/NavScrollExample';

// import NavbarBard from './components/Navbar/NavbarBard'

// import { React, useState } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import NavbarBard from './components/Navbar/NavbarBard'


function App() {
  
  // const [page, setPage] = useState('list');

  return (
    <div className="App">

      <BrowserRouter>
        <NavScroll/>
        {/* <NavbarBard /> */}
        
        <Routes>
          <Route path='/' element={<ItemListContainer greeting = {'Listado de Productos'} />} />
          <Route path='/:categoryId' element={<ItemListContainer greeting = {'Listado de Productos'} />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer id = {'1'} />}/>
          <Route path='*' element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>

      
      {/* <NabvarMondony/> */}
      {/* <NavbarBard/> */}
      {/* <NavbarBS/> */}
      {/* <NavScrollExample /> */}
      
      {/* <CarouselDark /> */}
      {/* <ItemCount stock={stock} onAdd={onAddhandler}/> */}
     
      {/* <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="btn btn-primary">
          Primary
        </button>

        <BotonStyle/>

        <button className="m-3 btn btn-danger">Danger</button>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
