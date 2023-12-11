import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Header() {
    
    const navigate = useNavigate();
  return (
    <>
    <div>
    <Link to={'/'}><button>Home</button></Link>
     <button onClick={() => navigate('/products')}>Products</button>
       
        <Link to={'/ProductDetail'}><button>ProductDetail</button></Link>
        
    </div>
    
    </>
    
  )
}
