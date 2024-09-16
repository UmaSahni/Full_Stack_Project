import React, { useEffect, useState } from 'react'
import "./ProductGrid.css"
const ProductGrid = () => {
    const [data, setData] = useState([])
    const [added, setAdded] = useState({})
    useEffect(()=>{
        fetch("http://localhost:8080/products")
        .then((res)=>res.json())
        .then((data)=>{
            setData(data.data)
            console.log(data.data)
        })
        .catch((err)=>console.log(err))
    },[])

  const handleClick = (product) =>{
    let prevProducts = JSON.parse( sessionStorage.getItem("productsData")) || []
    prevProducts.push(product)
   
    setAdded((prev)=>({
    ...prev,
    [product._id] : true
   }))

    sessionStorage.setItem("productsData",  JSON.stringify(prevProducts) )
  }
  return (
    <div className='product-grid' >
        {
            data?.map((product)=>(
                <div key={product._id} className='product-card' > 
                    <img  src={product.imageUrl} alt={product.name}  className='product-image'/>
                    <h3 className='product-name' >{product.name}</h3>
                    <div className="product-price">₹{product.price}</div>
                    <button 
                    style={{cursor: added[product._id] ? "not-allowed" : "pointer"}} 
                    disabled={added[product._id]} 
                    onClick={()=>handleClick(product)} 
                    className="product-button">
                        {added[product._id] ? "Added" : "Add to cart"}
                        </button>
                </div>
            ))
        }

    </div>
  )
}

export default ProductGrid