import React, {useState, useRef, useEffect} from 'react'
import {FaBuffer, FaAtlassian} from 'react-icons/fa'
import {FiChevronsRight} from 'react-icons/fi'

function MyNav() {
    
    const [toggle, setToggle] = useState(false)
    const navRef = useRef(null)
    const toggleBut = () => {
        const textL = document.getElementsByClassName('link-text')
        if(toggle){
            navRef.current.style.width = '15rem'
            for(var i=0; i < textL.length; i++){
                textL[i].style.display = 'block'
                document.getElementById('togBut').style.transform = 'rotate(180deg)'
                document.getElementById('togBut').style.marginLeft = '150px'
            }

        }else{
            navRef.current.style.width = '5rem'            
            for(var j=0; j < textL.length; j++){
                textL[j].style.display = 'none'
                document.getElementById('togBut').style.transform = 'rotate(0deg)'
                document.getElementById('togBut').style.marginLeft = '0'
            }
            
        }
        setToggle(!toggle)
        
    }

    useEffect(() => {
        toggleBut()
    }, [])

    return (
        <div className='mynav' ref={navRef}>      
            <div className='item logo' onClick={toggleBut}>
                <div className='icon'>
                    <FaAtlassian size='50px' color='white'/>
                </div>
                <h2 className='link-text'>Assassin</h2>
            </div>       
            <div className='item mt-3'>
                <div className='icon'>
                    <FaBuffer size='50px' color='white'/>
                </div>
                <h2 className='link-text'>Primero</h2>
            </div> 
            <div className='item'>
                <div className='icon'>
                    <FaBuffer size='50px' color='white'/>
                </div>
                <h2 className='link-text'>Segundo</h2>
            </div> 
            <div className='item'>
                <div className='icon'>
                    <FaBuffer size='50px' color='white'/>
                </div>
                <h2 className='link-text'>Tercero</h2>
            </div>  
            <div className='item last' onClick={toggleBut}>
                <FiChevronsRight size='50px' color='white' id='togBut'/>
            </div>          
        </div>
    )
}

export default MyNav
