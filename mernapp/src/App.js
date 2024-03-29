
import './App.css';
import Home from './screens/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { CartProvider } from './components/ContexReducer';
import Cart from './screens/Cart';
import MyOrder from './screens/MyOrder';

function App() {
  return (
    <CartProvider>
    <Router>
      <div>
       <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/createuser' element={<SignUp/>} />
        <Route exact path='/myOrder' element={<MyOrder/>} />
        {/* <Route exact path='/cart' element={<Cart/>} /> */}
       </Routes>
       </div>
    </Router>
    </CartProvider>

  );
}

export default App;
