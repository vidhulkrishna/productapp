import logo from './logo.svg';
import './App.css';
import View from './Components/View';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Add from './Components/Add';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
     <Route path='/'element={<View/>}/>
     <Route path='/Add'
     element={<Add
     data={{Name:'',name:'',brand:''}}
     method="post"/>}/>
    </Routes>
  
   </div>
 );
} 

export default App;
