import React from 'react'
import './About.css'

const About = () => {

    return (
        <div className='Section_About' id='about'>
            <div className='container vv'>
                <div className='row about_box'>
                    <div className='col-10 col-lg-5 image_left_outer'>
                        <div className='image_left'></div>
                    </div>
                    <div className='col-10 col-lg-5 content_right_outer'>
                        <div className='content_right'>
                            <div className='content_title'>ABOUT ME</div>
                            <div className='content_content'>
                                <div>Hi, my name is Vignesh. I am a Frontend Web Developer and I am very passionate about developing and technology.</div>
                                <div>To obtain a challenging career in the IT industry and put all my efforts
                                into the growth of the organization and have a great working
                                environment.</div>
                                </div>
                            <div className='content_button'><a href="VigneshwaranD.pdf" download='VigneshwaranD.pdf'><button>Download Resume</button></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
