import React, { useState } from 'react'

const FooterForm = () => {

    const [FootEmail, setFootEmail] = useState();

    const handelFootEmail = (e) => {
        setFootEmail(e.target.value);
    }
    
    const FootSunmit = (e) => {
        e.preventDefault();
         
        console.log(FootEmail);
        setFootEmail('');
    }

  return (
    <>
      <form onSubmit={FootSunmit}>
        <input type="email" placeholder='Your Email' value={FootEmail} onChange={handelFootEmail} className="fw-normal w-100 text-white" style={{border: '2px solid hsla(0, 0%, 100%, .15)', padding: '20px 0px 20px 25px'}}/>
        <button type='submit' className="fw-normal w-100 text-white" style={{marginTop: '15px', backgroundColor: '#beb996', padding: '19px 20px', border: 'none'}}>Subscribe Now</button>
      </form>
    </>
  )
}

export default FooterForm
