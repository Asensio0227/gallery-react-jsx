import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { 
  Home,
  About,
  Error,
  SingleImage,
} from './pages'

import {
  Navbar,
  Footer
} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='about' element={<About />} />
        <Route path='/home/:id' element={<SingleImage/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App