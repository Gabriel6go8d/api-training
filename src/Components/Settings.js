import React from 'react'

function Settings() {

    const changeColor = (e) => {
        const select = e.target.id.split('_')[1]
        var color = ['#010626', '#010B40', '#020F59', 'hblue'] // body, nav, log, item:hover
        if (select === 'blue'){
            color = ['#010626', '#010B40', '#020F59', 'hblue']
        }else if (select === 'yellow'){
            color = ['#D97904', '#F29F05', '#F2B705', 'hyellow']
        }else if (select === 'black'){
            color = ['#262626', '#595959', '#A6A6A6', 'hdark']
        }
        document.body.style.backgroundColor = color[0]
        document.getElementById('theNav').style.backgroundColor = color[1]
        document.getElementById('movilNav').style.backgroundColor = color[1]
        document.getElementById('logo').style.backgroundColor = color[2]

        const items = document.getElementsByClassName('item') 
        const delClass = localStorage.getItem('color')              
        for(var t=0; t < items.length; t++){
            if(delClass){
                items[t].classList.remove(delClass.split(',')[3])
            }            
            items[t].classList.add(color[3])
        }

        localStorage.setItem('color', color)
    }

    return (
        <div className='row m-0 p-0 justify-content-center'>
            <div className='col-12 col-md-8 text-white text-left mt-5'>
                <h1>Pick the Palette</h1>
                <div className='palete mt-3' id='p_blue' onClick={changeColor} style={{backgroundImage: `url(${require('../Images/palette_blue.jpg')})`}}></div>
                <div className='palete mt-3' id='p_yellow' onClick={changeColor} style={{backgroundImage: `url(${require('../Images/palette_yellow.jpg')})`}}></div>
                <div className='palete mt-3' id='p_black' onClick={changeColor} style={{backgroundImage: `url(${require('../Images/palette_dark.jpg')})`}}></div>
            </div>
        </div>
    )
}

export default Settings
