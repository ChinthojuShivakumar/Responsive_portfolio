import React from 'react';
import { FaHeadphones } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri'
import Vector from '../assets/Contact.jpg'
import './ContactMe.css'

function ContactMe() {
    return (
        <div className='header-5' id='header-5'>
            <div className='cP' id='cP'>
                <div className='cC-1'>
                    <h1 id='h1-c' className='h1-c'>< FaHeadphones /> Contact Me</h1>
                </div>
                <div className='cC-2'>
                    <div className='cC-gC-1'>
                        <img className='cI' id='cI' src={Vector} alt="Contact_img" srcset="" />
                    </div>
                    <div className='cC-gC-2'>
                        <form>
                            <div class="row g-3 align-items-center ">
                                <div class="row g-1 align-items-center">
                                    <label for="inputPassword6" class="col-form-label">UserName</label>
                                </div>
                                <div class="row g-3 align-items-center">
                                    <input type="text" id="inputPassword6" class="form-control" placeholder='Type Your Name...' />
                                </div>
                                <div class="row g-3 align-items-center">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="row g-3 align-items-center">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message: </label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Currently this section under construction'></textarea>
                                </div>
                                <div class="row g-3 align-items-center">
                                    <button type="submit" class="btn btn-primary mb-3 nbtn">Submit <RiSendPlaneFill /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe