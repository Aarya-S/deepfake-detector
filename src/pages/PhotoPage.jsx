import React from 'react'
import Navbar2 from '../components/Navbar2'
import UploadArea from '../components/UploadArea'


const PhotoPage = () => {
  return (
    <>
    <Navbar2 />
    <UploadArea type="photo" />
    </>
  )
}

export default PhotoPage