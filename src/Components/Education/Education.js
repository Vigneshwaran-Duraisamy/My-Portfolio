import React from 'react'
import './Education.css';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Education = () => {
    return (
        <div className='Section_Education' id='education'>
            <div className='Section_EducationHeading container'>
                <p>Education</p>
            </div>
            <div className='Section_EducationContent container'>
                <div className='Section_EducationContent_Left'>
                    <p><CalendarTodayIcon /> June 2017 - April 2020</p>
                    <p>B.Sc. Computer Science</p>
                    <p>Rathnavel Subramaniyam College of Arts and Science</p>
                    <p>Bharathiyar University</p>
                </div>
                <div className='Section_EducationContent_Right'>
                    <p><CalendarTodayIcon /> August 2022 - present</p>
                    <p>Web Developer Internship</p>
                    <p>Nschool Academy Coimbatore</p>
                    <p>Github</p>
                </div>
            </div>
        </div>
    )
}

export default Education
