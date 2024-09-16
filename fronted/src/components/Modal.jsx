import React from 'react'
import "./modal.css"
const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null
    return (
        <div className='modal-overlay' onClick={onClose} >
            <div className="modal-content" onClick={(e)=>e.stopPropagation()} >
                <button className='close-btn' onClick={onClose} >
                    &times;
                </button>
                {content}
            </div>
        </div>
    )
}

export default Modal