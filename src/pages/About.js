import Wrapper from '../assets/Wrappers/About'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <Wrapper>
      <div>
        <h2>about us</h2>
        <p>
          Venmo normcore kickstarter, viral etsy JOMO deep v. Snackwave migas paleo tofu craft beer jianbing church-key meh. Poutine palo santo flannel locavore gochujang typewriter. Swag leggings godard master cleanse cornhole messenger bag williamsburg flexitarian, activated charcoal +1 coloring book tumeric small batch. Vexillologist shoreditch tofu taiyaki, locavore vaporware pug franzen vinyl paleo church-key. Truffaut banjo organic put a bird on it hammock gluten-free shaman squid tonx tumblr adaptogen messenger bag try-hard.
        </p>
        <Link to='/'>
          back home
        </Link>
      </div>
    </Wrapper>
  )
}

export default About
