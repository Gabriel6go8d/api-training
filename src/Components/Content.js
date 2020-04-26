import React, {useState, useEffect} from 'react'
import CardLayout from './CardLayout'
import EmptyCard from './EmptyCard'
import MyModal from './MyModal'

function Content() {
    console.log('render Content')

    const savedList = localStorage.getItem('list') 
    var array2Pass = 'MADRID'
    if(savedList){
        array2Pass = savedList.split(',')
    }

    const [cityName, setCityName] = useState(array2Pass)
    const [info, setInfo] = useState('')

    const Load = () => {
        setInfo(cityName.map( (xx, index) => <CardLayout key={index} value={xx} close={closeCard}/>))
    }

    useEffect(() => {
        Load()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const closeCard = (name) => {
        console.log(`Delete: ${name}`)
        if(cityName.includes(name)){
            if(cityName.length < 2){
                setCityName([]) 
                setInfo('')
            }else{
                const index = cityName.indexOf(name);                
                var array = cityName
                array.splice(index, 1);
                setCityName(array)
                Load()
            } 
            localStorage.setItem('list', cityName)          
        }   
    }

    const [modalShow, setModalShow] = useState(false); 
    const AddCard = (name) => {
        console.log(`Add: ${name}`)
        var array = cityName
        array.push(name)
        setCityName(array)
        Load()
        localStorage.setItem('list', cityName)
    }

    return (         
        <div className='row m-0 p-0 justify-content-end'>
            <div className='col-12 col-lg-11 mb-5'>   
                <div className='row m-0 p-0 justify-content-start'>         
                    {info}
                    <EmptyCard add={() => setModalShow(true)}/>
                </div>                
            </div> 
            {modalShow && <MyModal show={modalShow} hide={() => setModalShow(false)} save={AddCard}/>}    
            <div className='mytoast' id='myToast'>
                <p>Wheater Copied</p>
            </div>               
        </div>
    )
}

export default Content
