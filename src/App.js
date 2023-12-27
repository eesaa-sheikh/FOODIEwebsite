import Home from './Components/Home';
import './App.css'
import About from './Components/About';
import Contact from './Components/Contact';
import Testimonial from './Components/Testimonial';
import Work from './Components/Work';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dishes from './Components/Dishes';
import Cart from './Components/Cart';

// Will need to add a browseRouter - Done

// A recipes page
    // Will need to add a const [{keyvalue 1},{keyvalue 2},{keyvalue 3}] - Done 


    //Add to card function needs to be added - ???

// Sign in page
    // Login as a user



function App() {
  console.log(window.location.pathname);

  return (
    <div className="App">

     <BrowserRouter>   
     <Navbar/> 
      <div className="home-container">
    
    <div className='d'>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/Dishes" element ={<Dishes/>}/>
        <Route path="/About" element ={<About/>}/>
        <Route path="/Testimonial" element ={<Testimonial/>}/>
        <Route path="/Contact" element ={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </div>
    </div>
   
      </BrowserRouter>

      <Footer className ='a'/>
    </div>

  );
}

export default App;
