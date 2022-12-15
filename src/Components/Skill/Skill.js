import React from 'react'
import './Skill.css'

const Skill = () => {
    return (
        <div className='Section_Skill container-fluid' id='skills'>
            <div className='Section_SkillHeading container'>
                <p>Skills</p>
            </div>
            <div className='Section_SkillContent container'>
                <div className='Section_SkillContentBoxes row'>
                    <div className='flip_container'>
                        <div className='flip_card'>
                            <div className='flip_front'><div className='html'></div></div>
                            <div className='flip_back'>
                                <h3>HTML</h3>
                                <p>Level : Advanced</p>
                                <p>Version : HTML5</p>
                                <p>Experiance : 4 Months</p>
                            </div>
                        </div>
                    </div>
                    <div className='flip_container'>
                        <div className='flip_card'>
                            <div className='flip_front'><div className='css'></div></div>
                            <div className='flip_back'>
                                <h3>CSS</h3>
                                <p>Level : Advanced</p>
                                <p>Version : CSS3</p>
                                <p>Experiance : 4 Months</p>
                            </div>
                        </div>
                    </div>
                    <div className='flip_container'>
                        <div className='flip_card'>
                            <div className='flip_front'><div className='bootstrap'></div></div>
                            <div className='flip_back'>
                                <h3>Bootstrap</h3>
                                <p>Level : Intermediate</p>
                                <p>Version : Bootstrap 5.2</p>
                                <p>Experiance : 4 Months</p>
                            </div>
                        </div>
                    </div>
                    <div className='flip_container'>
                        <div className='flip_card'>
                            <div className='flip_front'><div className='javascript'></div></div>
                            <div className='flip_back'>
                                <h3>JavsScript</h3>
                                <p>Level : Advanced</p>
                                <p>Version : ES6</p>
                                <p>Experiance : 4 Months</p>
                            </div>
                        </div>
                    </div>
                    <div className='flip_container'>
                        <div className='flip_card'>
                            <div className='flip_front'><div className='react'></div></div>
                            <div className='flip_back'>
                                <h3>React JS</h3>
                                <p>Level : Intermediate</p>
                                <p>Version : React 18</p>
                                <p>Experiance : 4 Months</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
