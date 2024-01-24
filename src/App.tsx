
import './App.css'
import About from './components/About'
import Clear from './components/Clear'
import Hero from './components/Hero'
import Ready from './components/Ready'
import Why from './components/Why'
import Faqs from './components/faqs'

function App() {

  return (
    <main className=''>
     <Hero />
     <Why />
     <Clear />
     <Faqs />
     <Ready />
     <About />
    </main>
  )
}

export default App
