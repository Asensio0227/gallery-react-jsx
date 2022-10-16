import Wrapper from '../assets/Wrappers/Error'
import halloween  from '../assets/images/undraw_halloween_bg6h.svg';
import {
  Link
} from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div className='error-page'>
        <img src={halloween} alt="holloween" />
        <h1>
          ohh! page not found
        </h1>
        <p>
          we seem to not find the page you're looking for
        </p>
        <Link to='/'>
          back home
        </Link>
      </div>
    </Wrapper>
  )
}

export default Error
