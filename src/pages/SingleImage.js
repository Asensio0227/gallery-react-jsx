import { useSelector, useDispatch } from 'react-redux';
import { useNavigate,Link,useParams } from 'react-router-dom';
import { fetchImage } from '../features/singlePage/imageSlice';
import { useEffect } from 'react';
import {FaTimes} from 'react-icons/fa'
import {
  Loading,
  ModalImages
} from '../components';


const SingleImage = () => {
  const {
    items,
    error,
    isLoading,
  } = useSelector(store => store.image);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  useEffect(() => {
    dispatch(fetchImage(id));
    // eslint-disable-next-line
  }, [id])
  
  useEffect(() => {
    if (error) {
      setInterval(() => {
        navigate('/')
      }, 3000)
    }
  }, [error,navigate]);

  if (isLoading) {
    return <Loading/>
  }

  const { images, name } = items;

  return (
    <div className="modal open">
      <Link
        to='/'
        className="close-btn"
      >
        <FaTimes/>
      </Link>
        <ModalImages images={images} />
      <h5 className="image-name">{name}</h5>
    </div>
  )
}

export default SingleImage
