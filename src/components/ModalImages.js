import { useState } from 'react'
import Wrapper from '../assets/Wrappers/ModalImages'


const ModalImages = ({ images = [[]] }) => {
  const [mainImage, setMainImage] = useState([0]);


  return (
    <Wrapper>
      <img src={mainImage.url} alt="main main-img" className="main" />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            
            <img
              key={index}
              src={image.url}
              alt={image.filename}
              className={`${image.url === mainImage.url ? 'selected' : 'modal-img'}`}
              onClick={() => setMainImage(images[index])}
            />
          )
        })}
      </div>
    </Wrapper>
  )
};


export default ModalImages