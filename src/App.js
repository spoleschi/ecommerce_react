import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from './components/Navbar/NavScroll';
import BotonStyle from './components/BotonStyle/BotonStyle';
import NabvarMondony from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

// import NavbarBard from './components/Navbar/NavbarBard'


function App() {
  return (
    <div className="App">
      <NavScroll/>
      {/* <NabvarMondony/> */}
     {/* <NavbarBard/> */}
      <ItemListContainer greeting = {'Hola'} />
     

     
     
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
