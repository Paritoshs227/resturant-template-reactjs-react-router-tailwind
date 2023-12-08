import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import MenuPage from './pages/MenuPage'
import ContactPage from './pages/ContactPage'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/service' element={<ServicesPage/>} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
