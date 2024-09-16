import React, { useState } from 'react'
import "./ProductGrid.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UserDetails = () => {
const [user, setUser] = useState({
    name:"",
    gender:"male",
    mobile:"",
    address:""
})

const handleChange = (e) =>{
    setUser({
        ...user,
        [e.target.name] : e.target.value
    })
}

const handleSubmit = (e) =>{
e.preventDefault()
let products = JSON.parse(sessionStorage.getItem("productsData")) 

console.log(user, products) // Add this line

let totalAmount = products.reduce((acc, curr_obj) => acc+curr_obj.price , 0)
console.log(totalAmount)


fetch("http://localhost:8080/user", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({user, products, totalAmount}) 
})
.then((res)=>{
    toast("Purchase successful!")
    console.log("Done")
})
.catch((err)=>{
    toast("Something went wrong")
    console.log(err)
})

}

  return (
    <div className='user-details'>
         <ToastContainer />
       <h2>Enter user Details</h2>
       <form onSubmit={handleSubmit} className='user-form' >
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                type='text'
                id='name'
                name='name'
                value={user.name}
                onChange={handleChange}
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="name">Gender:</label>
                <select value={user.gender} required onChange={handleChange} id='gender' name='gender' >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="mobile">Mobile:</label>
                <input
                type='number'
                id='mobile'
                name='mobile'
                value={user.mobile}onChange={handleChange}
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                type='text'
                id='address'
                name='address'
                value={user.address}onChange={handleChange}
                required
                />
            </div>
            <button type='submit' className='submit-button' >submit</button>
       </form>
    </div>
  )
}

export default UserDetails