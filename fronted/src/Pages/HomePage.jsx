import React from 'react'
import ProductGrid from '../components/ProductGrid'
import UserDetails from '../components/UserDetails'

const HomePage = () => {
  return (
    <div className='flex-product-user' >

    <div className='products' >
    <ProductGrid/>
    </div>
    
    <UserDetails/>
 
  </div>
  )
}

export default HomePage