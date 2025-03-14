import './App.css'
// import Display from './components/Display'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import UploadPdf from './components/UploadPdf'


function App() {


  return (
      <>
        <Navbar/>
        <div className='max-w-7xl mx-auto pt-10 px-6'>
          <HeroSection/>
        </div>
        <UploadPdf/>
       
        <Footer/>
      </>
  )
}

export default App
