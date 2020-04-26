import React, {useState, useRef} from 'react'
import MyNav from './MyNav'
import Content from './Content'
import Settings from './Settings'
import Contact from './Contact'

function Main() {
    console.log('render Main')
    
    const DivRef = useRef(null)
    const ContRef = useRef(null)
    const [toShow, setToShow] = useState('')

    const change = (view) => {
        DivRef.current.style.opacity = 0    
        setTimeout(() => {
            ContRef.current.setAttribute('hidden', true)
            if(view === 'content'){
                ContRef.current.removeAttribute('hidden')
                setToShow('')
            }else if(view === 'setting'){
                setToShow(<Settings/>)
            }else if(view === 'contact'){
                setToShow(<Contact/>)
            }else {}

            DivRef.current.style.opacity = 1   
        }, 300)
    }

    return (
        <div>   
            <MyNav change={change}/>            
            <div className='ContDiv' id='ContDiv' ref={DivRef}>
                <div ref={ContRef}>
                    <Content/>
                </div>            
                {toShow}
            </div>            
        </div>
    )
}

export default Main
