import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_qhu3lxe','template_sv3nmyl',e.target,'dNRK3Uj_WQXn8nnrM').then(res =>{console.log(res)}).catch(err => console.log(err))
    }
    
    

    return (
        <div className='Section_Contact' id='contact'>
            <div className='Section_Contact_title'>
                <p>Get <span>In Touch</span></p>
            </div>
            <div className='Section_Contact_Box row'>
                <div className='Contact_Left col-8 col-lg-6'>
                    <div className='Contact_Left_Title'>Get In Touch</div>
                    <form className='Contact_Left_Form' onSubmit={sendEmail}>
                        <input type="text" name="name" id="name" placeholder='Your Name' required/>
                        <input type="text" name="user_email" id="user_email" placeholder='Your Email' required/>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Write a Message'></textarea>
                        <div><input type="submit" value='SEND MESSAGE'/></div>
                        
                    </form>
                </div>
                <div className='Contact_right col-8 col-lg-4'>
                    <div className='Contact_right_Title'>My Contact Details</div>
                    <div className='Contact_right_Details'>
                        <div>
                            <h6>Email</h6>
                            <p>vijayvignesh561@gmail.com</p>
                        </div>
                        <div>
                            <h6>Phone</h6>
                            <p>+91 9384753529</p>
                        </div>
                        <div>
                            <h6>Address</h6>
                            <div>
                                <p>TamilNadu, India</p>
                                <p>11A, Krishanama Naiker Layout</p>
                                <p>Singanallur, Coimbatore - 15</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
