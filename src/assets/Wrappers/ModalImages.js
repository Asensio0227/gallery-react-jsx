import styled from 'styled-components'

const Wrapper = styled.section`
  .main {
    height: 20rem;
    img {
      /* width: 100%; */
      display: block;
      border-radius: var(--radius);
      object-fit: cover;
    }
    margin: 5rem auto;
    position: relative;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 12rem;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 15;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default Wrapper