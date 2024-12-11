import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Protected from './Components/Protected';
import Main from './Components/Main';
import { useEffect,useState } from 'react';
import Men from './Components/Men';
import Women from './Components/Women';
import Cart from './Components/Cart';

function App() {
  const [loggedData,setLoggedData]=useState(false);
  
  useEffect(()=>{
   
    let mydata=localStorage.getItem('user');
    setLoggedData(mydata);

  });

  console.log(loggedData);
 
  return (
    <div className='App'>
    <BrowserRouter>
  {
    loggedData?<Navbar/>:''
  }
    <Routes>
     
      <Route path='/' element={<Protected Component={Main} />}></Route>
      <Route path='/newOffers' element={<Protected Component={Men}></Protected>}></Route>
     <Route path='/login' element={<Login />}></Route>
      <Route path='/cart' element={<Protected Component={Cart}></Protected>}></Route>
    </Routes>
 
    
    </BrowserRouter>
    </div>
  );
}

export default App;
