import React, {useEffect, useRef} from 'react'
import {Modal} from 'react-bootstrap'

function MyModal(prop) {

  const KeyP = (e) => {
    if (e.keycode === 13 || e.which === 13){
      Save()
    }
  }

  const Save = () => {
    const inputField = document.getElementById('inputName').value.toUpperCase()
      if(inputField === 'New York'){
        console.log('equal')
      }
      prop.save(inputField)
      prop.hide()
  }

  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  
  return (
    <Modal show={prop.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new Location
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Enter the City or Country Name</h5>
        <input className='form-control' id='inputName' style={{textTransform: 'capitalize'}} ref={inputRef} placeholder='Ex. Madrid' onKeyPress={KeyP}></input>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-danger' onClick={prop.hide}>Close</button>
        <button className='btn btn-primary' onClick={Save}>Add</button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyModal