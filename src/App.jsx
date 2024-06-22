import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Home from './Body/Home/Home';
import Shop from './Body/Shop/Shop';
import About from './Body/About/About';
import Contact from './Body/Contact/Contact';
import Footer from './Footer/Footer';
import Login from './Navbar/Login';
import { Dummyitems } from './Body/Items/Dummy items';
import { createContext, useState } from 'react';
import Single from './Body/Cart/Single';
import Cart from './Body/Cart/Cart';
import Signup from './Navbar/Signup';
import Navbr from './Navbar/Navbr';
import Navbrr from './Navbar/Navbrr';
import Admin from './Admin/Admin';
import ProductsView from './Admin/ProductsView';
import Users from './Admin/Users';


export const Addcontext = createContext()

function App() {
  
  const nav = useNavigate()
  const [login1,setLogin] = useState()
  const [dummyitem,setItem] = useState(Dummyitems)
  const [data,setData] = useState([])
  const [user,setUser] = useState(null)
  const [iword,setIword] = useState(null)
  return (
    <div className="App">
      
<Addcontext.Provider value={{dummyitem,setItem,data,setData,nav,user,setUser,iword,setIword,login1,setLogin}}>
 
 <Navbr/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search' element={<Shop/>}/>
    <Route path='/:type' element={<Shop/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/:type/:id' element={<Single/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/admin' element={<Admin/>} />
    <Route path='/productsview' element={<ProductsView/>} />
    <Route path='/users' element={<Users/>} />
    <Route path='/admin' element={<Admin/>} />
   </Routes>
   <Footer/>
   </Addcontext.Provider>
   
   

   
  
    </div>
  );
}

export default App;
