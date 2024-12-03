import './App.css'
import { Button } from '@mui/material'
import Navbar from './assets/Comonent/Navber'
import Header from './assets/Comonent/Header'
import Company from './assets/Comonent/Company'
import IconBer from './assets/Comonent/IconBer'
import Slider from './assets/Comonent/Slider'

import PerfectEmal from './assets/Comonent/PerfectEmal'
import Persents from './assets/Comonent/Persents'
import Footer from './assets/Comonent/Footer'



function App() {


  return (
    <>
    <div>  
      <main className='overflow-x-hidden'>
    <Navbar></Navbar>
     <Header></Header>
     <Company></Company>
     <IconBer></IconBer>
     <PerfectEmal></PerfectEmal>
     <Slider></Slider>  
     <Persents></Persents>
     <Footer></Footer>
     
     </main>     
    
 
     
    
    
    </div>

    </>
  )
}

export default App
