import React from 'react'
import Home from './Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Shoppingcart from './Shoppingcart'
import { CartProvider } from './Contextprovider'


const App = () => {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shopping' element={<Shoppingcart/>}></Route>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    
    </>
  )
}

export default App