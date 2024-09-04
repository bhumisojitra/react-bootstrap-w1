import React, { useState } from 'react'
import './Email.css'

const Email = () => {

    const [email, setEmail] = useState('');

    const handelEmail = (e) => {
        setEmail(e.target.value);
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        
        console.log(email);
        setEmail('');
    }

  return (
    <div className="btn-box2">
        <form onSubmit={handelSubmit}>
            <input type="email" placeholder='type your email' className='text-white fw-light fs-6' value={email} onChange={handelEmail} />
            <button type='submit' className='text-center'>
                <i className="bi bi-send-x"></i>
            </button>
        </form>
    </div>
  )
}

export default Email
