import Navbar from './components/navbar'
import Manage from './Manage'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
     <Navbar/>
     <div className=''>
    <Manage/>
     </div>
    <Footer />
    </>
  )
}

export default App
