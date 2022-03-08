import React from 'react'
import { Button } from 'react-bootstrap'
import '../css/UploadArea.css'

const UploadArea = (props) => {
  return (
    <>
    <div className="main-area">
    <div className="upload-container">
    <h3>Upload your {props.type} here</h3>
    <input type="file" name="file" id="file" />
    </div>
    <Button variant="outline-dark" className="btn-upload">Upload {props.type}</Button>
    </div>
    </>
  )
}

export default UploadArea