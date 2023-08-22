import React from 'react';
import myImage from '../assets/my_image.jpg';
import { HiDocumentArrowDown } from 'react-icons/hi2';
import { FaUserAlt } from 'react-icons/fa';
import './About.css'

function About() {

    let resumeDownload = (e) => {

        let files = document.createElement('a')
        files.href = 'ShivaResume.pdf'
        files.download = 'ShivaResume.pdf'
        files.click()
    }

    return (
        <div className='header-2' id='header-2'>
            <div id='aP' className='aP-1'>
                <div className='aC-1' id='aC-1'>
                    <h1 className='h1-a' id='h1-a'><FaUserAlt style={{margin:'10px'}} /> About Me</h1>
                </div>
                <div className='aC-2' id='aC-2'>
                    <div className='ac-2-gC-1' id='ac-2-gC-1'>
                        <img className='img' id='img' src={myImage} alt="Shivakumar Jpg" />
                    </div>
                    <div className='aC-2-gC-2' id='aC-2-gC-2'>
                        <div className='aC-2-ggC-2' id='aC-2-ggC-2'>
                            <h2>Chinthoju ShivaKumar</h2>
                            <h5>Full Stack Developer</h5>
                            <p>I am a Front-End developer. I am an Electronics and Communication Engineering undergraduate from BIET. I am very passionate about improving my coding skills & developing websites. I build Websites using ReactJS . Working for myself to improve my skills.</p>
                            <button className='btn btn-primary' onClick={resumeDownload}> Resume <HiDocumentArrowDown /></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;