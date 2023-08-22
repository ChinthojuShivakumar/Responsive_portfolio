import React from 'react';
import Skill from './Skill_Detail'
import { FaLaptopCode } from 'react-icons/fa'
import './Skills.css';

function Skills() {

    let skillEnter = Skill.map((detail) => {
        return (
            <span id='s-Span' className='s-Span'>
                <div className='sM-img' id='sM-img'>
                    <img id='sI' className='sI' src={detail.image} alt="skillImages" />
                </div>
                <div className='sM-title' id='sM-title'>
                    <h5 className='h5'>{detail.title}</h5>
                </div>
            </span>
        )
    })

    return (
        <div className='header-3' id='header-3'>
            <div className='sP' id='sP'>
                <div className='sC-1' id='sC-1'>
                    <h1 className='h1-s' id='h1-s'><FaLaptopCode /> Technical Skills</h1>
                </div>
                <div className='sC-2' id='sC-2'>
                    <h6>{skillEnter}</h6>
                    
                </div>
            </div>
        </div>
    )
}

export default Skills