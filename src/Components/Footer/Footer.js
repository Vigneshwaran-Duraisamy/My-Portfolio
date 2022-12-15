import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <div className='Section_Footer'>
        <div className='footer_content'>
            <p>Copyright © 2022 All rights reserved | This template is made with ❤️ by Colorlib</p>
        </div>
        <div className='footer_SocialMedia'>
            <a href="https://www.facebook.com/profile.php?id=100008821307118" target='_blank'><FacebookIcon/></a>
            <a href="https://www.instagram.com/vijayvignesh561/" target='_blank'><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/vigneshwaran-duraisamy-169660246" target='_blank'><LinkedInIcon/></a>

        </div>
    </div>
  )
}

export default Footer
