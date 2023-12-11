
import './App.css'
import HomePage from './Pages/HomePage'
import Products from './Pages/Products'
import Header from './Components/Header'
import ProductDetail from './Components/ProductDetail'
import NotFound from './Pages/NotFound'

import {Routes, Route} from "react-router-dom"


function App() {
 

  return (
   
    <>
    <Header />
    
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/productDetail" element={<ProductDetail />}/>
        <Route path="*" element={<NotFound />}/> 
     
      </Routes>
    </>
    
   
  )
}

export default App
