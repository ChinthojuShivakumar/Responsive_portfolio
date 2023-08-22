import React from 'react';
import './Footer.css'
import { AiFillLinkedin } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <div id='footer' className='footer'>

            <div id='icons' className='iconns'>
                <a className='a' href='https://www.linkedin.com/in/shivakumarchinthoju1207/'><AiFillLinkedin /></a>
                <a className='a' href='#action'><GrMail /></a>
                <a className='a' href='https://github.com/ChinthojouShivaKumar'><FaGithub /></a>
            </div>

            <div id='copyright' className='copyright'>
                <h6>Copyright 2023 &copy; Shivakumar Chinthoju</h6>
                <p className='fP'>Last updated 22-08-2023</p>
            </div>
        </div>
    )
}

export default Footer