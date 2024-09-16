import React, { useState } from 'react'
import "./orderTable.css"
import Modal from './Modal'
const OrderTable = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)


    const formatDate = (dateString) =>{
        const date = new Date(dateString)
        return date.toLocaleString()
    }

    const openModal = (content) =>{
        setModalContent(content)
        setIsModalOpen(true)
    }

    const closeModal = () =>{
        setIsModalOpen(false)
        setModalContent(null)
    }


  return (
    <div className='table-container' >
        <table className='orders-table' >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Total Amount</th>
                    <th>Order Date</th>
                    <th>User Name</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((el)=>{
                        return <tr key={el._id} >
                                <td>{el._id}</td>
                                <td>{el.totalAmount}</td>
                                <td>{formatDate(el.orderDate)}</td>
                                <td>{el.user.name}</td>
                                <td><button className='details-btn'
                                onClick={()=>openModal(
                                    <div>
                                        <h2>User details</h2>
                                        <p><strong>Name:</strong>{el.user.name} </p>
                                        <p><strong>Gender:</strong>{el.user.gender} </p>
                                        <p><strong>Mobile:</strong>{el.user.mobile} </p>
                                        <p><strong>Address:</strong>{el.user.address} </p>

                                    </div>
                                )

                                }
                                
                                >User Details</button></td>

                               <td><button className='details-btn'
                               onClick={()=> openModal (
                                <div>
                                    <h2>Product Details</h2>
                                    {
                                        el.products.map((product)=>{
                                          return  <div key={product._id} >
                                            <img height={"100px"} width={"100px"} src={product.imageUrl} />
                                            <p><strong>Name: </strong> {product.name} </p>
                                            <p><strong>Price: </strong> {product.price} </p>
                                            <p><strong>Quantity: </strong> {product.quantity} </p>
                                            <p><strong>Total Orders: </strong> {product.totalOrder} </p>
                                            </div>
                                        })
                                    }
                                </div>
                               )}
                               
                               >Product Details</button></td>
                                
                        </tr>
                    })
                }
            </tbody>
        </table>

        <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  )
}

export default OrderTable