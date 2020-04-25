import React, {useEffect, useRef} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FaCopy} from 'react-icons/fa'
import axios from 'axios'

function CardLayout(prop) {
    console.log('render CardLayout')

    const NameRef = useRef(null)
    const TempRef = useRef(null)
    const DescRef = useRef(null)
    const MinRef = useRef(null)
    const MaxRef = useRef(null)
    const PreRef = useRef(null)
    const HumRef = useRef(null)
    const DivRef = useRef(null)
    const TexRef = useRef(null)
    const TimRef = useRef(null)
    const CopyRef = useRef(null)
    
    const Appid = 'c890842d2fad5753a6743edaf2dc1bc0'   

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${prop.value}&units=metric&appid=${Appid}`)
        .then(res => {           
                    
            NameRef.current.innerHTML = res.data.name
            while(NameRef.current.clientHeight > 70 || NameRef.current.clientWidth > 190){
                var style = window.getComputedStyle(NameRef.current, null).getPropertyValue('font-size')
                var fontSize = parseFloat(style); 
                NameRef.current.style.fontSize = `${fontSize - 1}px`
            }


            TempRef.current.innerHTML = `${Math.floor(res.data.main.temp)}º`
            DescRef.current.innerHTML = res.data.weather[0].description
            MinRef.current.innerHTML = `Min: ${Math.floor(res.data.main.temp_min)}º`
            MaxRef.current.innerHTML = `Max: ${Math.floor(res.data.main.temp_max)}º`
            PreRef.current.innerHTML = `Pressure: ${res.data.main.pressure}`
            HumRef.current.innerHTML = `Humidity: ${res.data.main.humidity}`
            TimRef.current.innerHTML = res.data.main.humidity

            const Desc = res.data.weather[0].description
            var TeX = ''
            var CardDivBack = ''
            if(Desc === 'light rain'){
                TeX = 'Its time for dancing in the rain.'
                CardDivBack = "url('https://media.giphy.com/media/IuVFGSQZTd6TK/giphy.gif')"
            }else if(Desc === 'clear sky'){
                TeX = 'Another day in the Paradise'
                CardDivBack = "url('https://media.giphy.com/media/QwtMHd2Z8dlb5FFIdq/giphy.gif')"
            }else if(Desc === 'broken clouds'){
                TeX = 'Have a nice rainy day'
                CardDivBack = "url('https://media.giphy.com/media/KwZoSJlvep6Vy/giphy.gif')"
            }else if(Desc === 'scattered clouds'){
                TeX = 'Have a Great Day'
                CardDivBack = "url('https://media.giphy.com/media/13ZEwDgIZtK1y/giphy.gif')"
            }else if(Desc === 'overcast clouds'){
                TeX = 'Stay Calm and be Careful'
                CardDivBack = "url('https://media.giphy.com/media/3oz8xsTTDHL2D8Hluw/giphy.gif')"
            }else if(Desc === 'few clouds'){
                TeX = 'Lots of Fun'
                CardDivBack = "url('https://media.giphy.com/media/QwtMHd2Z8dlb5FFIdq/giphy.gif')"
            }else if(Desc === 'haze'){
                TeX = 'Lots of Fun'
                CardDivBack = "url('https://media.giphy.com/media/Yl5QvMg3Zxfe9g6HvM/giphy.gif')"
            }else{
                TeX = 'Another Stuff'
                CardDivBack = "url('https://media.giphy.com/media/26ueYP1qdZRt3sG7S/giphy.gif')"
            }

            DivRef.current.style.backgroundImage = CardDivBack
            TexRef.current.innerHTML = TeX

            const d1 = new Date().getTime()
            const d2 = new Date().getTimezoneOffset()*60*1000
            const d3 = res.data.timezone * 1000
            const d4 = d1+d2+d3
            const Time = new Date(d4).toLocaleTimeString()
            TimRef.current.innerHTML = Time
        })
        .catch(err => {         
            alert('Error retriven infromation. Please check the location Name.')   
            prop.close(prop.value.toUpperCase())
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })    
    
    const copyCard = () => {
        // navigator.clipboard.writeText('xxxx')
        document.getElementById('myToast').classList.add('mytoast_visible')
        const el = CopyRef.current
        el.removeAttribute('hidden')
        el.value = NameRef.current.innerHTML + ' ' + TimRef.current.innerHTML + ' Temp: ' + TempRef.current.innerHTML + ' ' + MinRef.current.innerHTML + ' ' + MaxRef.current.innerHTML + ' ' + PreRef.current.innerHTML + ' ' + HumRef.current.innerHTML

        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {            
            var oldContentEditable = el.contentEditable
            var oldReadOnly = el.readOnly
            var range = document.createRange();
        
            el.contentEditable = true;
            el.readOnly = true;
            range.selectNodeContents(el);
        
            var s = window.getSelection();
            s.removeAllRanges();
            s.addRange(range);
        
            el.setSelectionRange(0, 999999); 
        
            el.contentEditable = oldContentEditable;
            el.readOnly = oldReadOnly;        
            
        }else{
            el.focus()
            el.select()
        }
        document.execCommand('copy');
        el.setAttribute('hidden', true)

        setTimeout(()=>{
            document.getElementById('myToast').classList.remove('mytoast_visible')
        }, 2000)
    }

    return (
        <div className='mt-5 col-12 col-md-6 col-xl-3 m-0 p-0 testtt'>
            <div className='row m-0 p-0 justify-content-center'>
                <div className='cardL' ref={DivRef}>
                    <div className='mt-3 ml-3 mr-3 row p-0 text-left text-white'>
                        <div className='col-8'>
                            <h1 className='cardTitle' ref={NameRef}>...</h1>                    
                            <h5 className='desc' ref={DescRef}>...</h5>                    
                            <p ref={MinRef}>...</p>
                            <p ref={MaxRef}>...</p>
                            <p ref={PreRef}>...</p>
                            <p ref={HumRef}>...</p>                   
                        </div>
                        <div className='col-4 m-0 p-0 text-center'>
                            <h4 className='bigTemp' ref={TempRef}>º</h4>
                            <h5 ref={TimRef}>...</h5>
                        </div>                
                    </div>
                    <div className='mb-3 ml-3 mr-3 row p-0 text-left text-white'>
                        <div className='col-12'>
                            <h5 ref={TexRef}>...</h5>
                        </div>                
                    </div>            
                </div>
                <div className='clBut col-1 m-0 p-0'> 
                    <AiFillCloseCircle size='30px' color='#D5232C' onClick={() => prop.close(prop.value.toUpperCase())}/>  
                    <FaCopy size='30px' color='#2372D9' className='mt-2' onClick={copyCard}/>
                </div>
            </div>
            <textarea hidden ref={CopyRef} defaultValue="This is a description." ></textarea>
        </div>
    )
}

export default CardLayout
