import React from 'react'

function Settings() {

    const changeColor = (e) => {
        const select = e.target.id.split('_')[1]
        document.documentElement.setAttribute('data-theme', select)
        localStorage.setItem('color', select)
    }

    return (
        <div className='row m-0 p-0 justify-content-center'>
            <div className='col-12 col-md-8 text-white text-left mt-5'>
                <h1>Pick the Palette</h1>
                <div className='palete mt-3' id='p_blue' onClick={changeColor} style={{backgroundImage: `url(${require('../Images/palette_blue.jpg')})`}}></div>
                <div className='palete mt-3' id='p_yellow' onClick={changeColor} style={{backgroundImage: `url(${require('../Images/palette_yellow.jpg')})`}}></div>
                <div className='palete mt-3' id='p_dark' onClick={changeColor} style={{backgroundImage: `url(${require('../Images/palette_dark.jpg')})`}}></div>
            </div>
        </div>
    )
}

export default Settings
