
import './App.css';
import Home from './component/Pages/Home'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Cart from './component/Pages/Cart';


function App() {
  return (
    <div className="App_main">
      <BrowserRouter>
        <Routes>
         
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart/>} />
           
        
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
