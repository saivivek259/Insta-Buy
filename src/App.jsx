import { useEffect, useState } from 'react'
import { Badge, Button }  from 'react-bootstrap';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Navbar from  'react-bootstrap/Navbar';
import './App.css'
import Home from './Components/home';
import Login from './Components/login';
import Logo from './assets/7.png'
import Signup from './Components/Signup';
import ProductGallery from './Components/ProductGallery';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
   const userEmail = localStorage.getItem('userEmail');
   if(userEmail) {
    setUser(userEmail)
   }
  },[]);

  const handleAddToCart = (item) => {
    setCartItems({...cartItems,...item})
  }

  return(
    <div>
      <Navbar className='instabuy-navbar'>
          <Navbar.Brand onClick={() => navigate('/')}>
            <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{''}
            InstaBuy!</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            {user && <Button onClick={() => navigate('/cart')}>Cart &nbsp; { Object.keys(cartItems).length > 0 && (<Badge bg='success'>{Object.keys(cartItems).length}</Badge>)}</Button>}
            &nbsp;&nbsp;&nbsp;
            <Button onClick={() => navigate('/login')}>{user ? 'Logout' : 'Login'} </Button>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
           <Route path='/' element={<Home user={user} />} />
           <Route path='/login' element={<Login setUser={setUser} />} />
           <Route path='/signup' element={<Signup setUser={setUser} />} />
           <Route path='/products' element={ <ProductGallery />}/>
           <Route path='/product/:id' element={ <ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems} />}/>
           <Route path='/cart' element={ <Cart cartItems={cartItems} />}/>
           <Route path="/checkout" element={<Checkout/>} />
        </Routes>
    </div>
  )
}
export default App
 