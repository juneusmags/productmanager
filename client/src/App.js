import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import Add from './views/Add';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Update from './views/Update';
import OneProduct from './views/OneProduct';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Home path = "/"/>
        <Add path = "/add"/>
        <OneProduct path ="/products/:_id"/>
        <Update path ="/products/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;
