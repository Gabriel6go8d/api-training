import React, {useState, useRef, useEffect} from 'react'
import {FaBuffer, FaAtlassian} from 'react-icons/fa'
import {FiChevronsRight} from 'react-icons/fi'
import {AiFillSetting} from 'react-icons/ai'
import {MdMessage} from 'react-icons/md'

function MyNav(prop) {
    const matches = window.matchMedia('(max-width:1000px)').matches  
    
    const [toggle, setToggle] = useState(false)
    const navRef = useRef(null)
    const cloDivRef = useRef(null)
    const toggleBut = () => {
        const theNav = document.getElementById('theNav')
        const arrow = document.getElementById('arrow')
        if(toggle){
            theNav.classList.add('mynavOpen')
            arrow.classList.add('rotate')
            if(matches){cloDivRef.current.removeAttribute('hidden')}     
        }else{
            theNav.classList.remove('mynavOpen')
            arrow.classList.remove('rotate')
            if(matches){cloDivRef.current.setAttribute('hidden', true)}
        }
        setToggle(!toggle)
        
    }

    const LogoRef = useRef(null)
    const movilnavRef = useRef(null)
    useEffect(() => {
        toggleBut()
        if(matches){LogoRef.current.setAttribute('hidden', true)}

        const savedColor = localStorage.getItem('color')     
        const items = document.getElementsByClassName('item') 
        if (savedColor){
            const colorArr = savedColor.split(',')
            document.body.style.backgroundColor = colorArr[0]
            navRef.current.style.backgroundColor = colorArr[1]
            movilnavRef.current.style.backgroundColor = colorArr[1]
            LogoRef.current.style.backgroundColor = colorArr[2]

            for(var t=0; t < items.length; t++){                
                items[t].classList.add(colorArr[3])
            }
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <React.Fragment>
        <div className='movilNav' id='movilNav' ref={movilnavRef}>
            <div onClick={toggleBut}>
                <FiChevronsRight size='50px' color='white' id='arrow' className='arrow'/>
            </div>
            <div className='item-mov' onClick={toggleBut}>
                <h2 className='text-white'>AWeather</h2>
                <div className='icon mr-3'>
                    <FaAtlassian size='50px' color='white'/>
                </div>                
            </div>       
        </div>

        <div className='mynav' ref={navRef} id='theNav'>      
            <div className='item logo' ref={LogoRef} onClick={toggleBut} id='logo'>
                <div className='icon'>
                    <FaAtlassian size='40px' color='white'/>
                </div>
                <h2 className='link-text'>AWeather</h2>
            </div>       
            <div className='item mt-3' onClick={() => prop.change('content')}>
                <div className='icon'>
                    <FaBuffer size='40px' color='white'/>
                </div>
                <h2 className='link-text'>Wheater</h2>
            </div> 
            <div className='item' onClick={() => prop.change('setting')}>
                <div className='icon'>
                    <AiFillSetting size='40px' color='white'/>
                </div>
                <h2 className='link-text'>Settings</h2>
            </div> 
            <div className='item' onClick={() => prop.change('contact')}>
                <div className='icon'>
                    <MdMessage size='40px' color='white'/>
                </div>
                <h2 className='link-text'>Contact</h2>
            </div>  
            <div className='item last' onClick={toggleBut}>
                <FiChevronsRight size='40px' color='white' id='togBut'/>
            </div>          
        </div>

        <div className='closeDiv' hidden onClick={toggleBut} ref={cloDivRef}></div>        
        </React.Fragment>
    )
}

export default MyNav
