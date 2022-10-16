import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useSelector, useDispatch } from 'react-redux';
import { getImages } from "../features/modal/gallerySlice";

const City = () => {
  const dispatch = useDispatch();
  const { gallery, isLoading } = useSelector((store) => store.gallery);
  
  useEffect(() => {
    dispatch(getImages());
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading/>
  }

  return (
    <section className='section'>
      {
        gallery.slice(0,8).map((item) => {
          const { name, image, id } = item;
          return (
            <Link to={`/home/${id}`} key={id}>
              <img src={image} alt={name} className="img" />
            </Link>
          )
        })
      }
    </section>
  )
}

export default City