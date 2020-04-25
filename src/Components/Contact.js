import React from 'react'

function Contact() {
    return (
        <div className='text-white justify-content-center row m-0 p-0'>
            <div className='col-8 text-left mt-5'>
                <h1>About Us</h1>
                <h4>This is a training project, which goald is learn how to use Axios inside React, use an API to obtain de data from https://openweathermap.org/ and show it in a nice interface. In another hand, learnd how to create a sideBar using CSS and Javascript in order to interac with the one page application which have multiples Views or Components.</h4>
                <h1 className='mt-5'>Contact Info</h1>
                <h4>Author: Gabriel Gutierrez</h4>
                <a href='mailto:gabriel.ares93@gmail.com' style={{fontSize: '20px', color: 'white'}}>Email: gabriel.ares93@gmail.com</a>
                <br/>
                <a href='https://github.com/Gabriel6go8d' style={{fontSize: '20px', color: 'white'}}>GitHub: github.com/Gabriel6go8d</a>
            </div>
        </div>
    )
}

export default Contact
