import React from 'react'
import {IoIosMail} from 'react-icons/io'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FaCode, FaGithub} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiReact, DiBootstrap} from 'react-icons/di'

function Contact() {
    return (
        <div className='text-white justify-content-center row m-0 p-0'>
            <div className='col-10 text-left mt-5 mb-5'>
                <h1>About This</h1>
                <h5>This is a training project aiming to learn how to use Axios inside React, use an API to get data from https://openweathermap.org/ and display it in a nice interface. On the other hand, learnd how to create a sideBar using CSS and Javascript in order to interac with the application which have multiples Views or Components presented on a single page.</h5>

                <h1 className='mt-3'>Used tecnologies</h1>
                <div>
                    <AiFillHtml5 size='50px' color='#FF7300'/>
                    <DiCss3 size='50px' color='#2881b8'/>
                    <DiReact size='50px' color='#2C2F73'/>
                    <DiBootstrap size='50px' color='#022873'/>
                    <img alt='Axios' src={require('../Images/axios.png')} style={{height: '50px'}}></img>
                    <img alt='OpenWeather' src={require('../Images/openweather.png')} style={{height: '40px'}}></img>
                </div>

                <h1 className='mt-3'>Contact Info</h1>
                <h4>Author: Gabriel Gutierrez</h4>
                <a href='mailto:gabriel.ares93@gmail.com' className='contact_link'>
                    <div>
                        <IoIosMail size='32px' color='white'/>
                        <p>Email: </p>
                    </div>
                    <p>gabriel.ares93@gmail.com</p>
                </a>

                <a href='https://gabriel6go8d.github.io/curriculum-vitae-2/' className='contact_link'>
                    <div>
                        <BsBriefcaseFill size='28px' color='white'/>
                        <p>Portfolio: </p>
                    </div>
                    <p>https://gabriel6go8d.github.io/curriculum-vitae-2/</p>
                </a>
                
                <a href='https://github.com/Gabriel6go8d/api-training' className='contact_link'>
                    <div>
                        <FaCode size='25px' color='white'/>
                        <p>Project Code: </p>
                    </div>
                    <p>https://github.com/Gabriel6go8d/api-training</p>
                </a>
                <a href='https://github.com/Gabriel6go8d' className='contact_link'>
                    <div>
                        <FaGithub size='30px' color='white'/>
                        <p>GitHub: </p>
                    </div>
                    <p>https://github.com/Gabriel6go8d</p>
                </a>
            </div>
        </div>
    )
}

export default Contact
