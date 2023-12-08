import { Routes, Route } from 'react-router-dom'
import BASEURL from './baseurl';
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
        <Route path={`${BASEURL}/`} element={<HomePage />} />
        <Route path={`${BASEURL}/about`} element={<AboutPage />} />
        <Route path={`${BASEURL}/service`} element={<ServicesPage/>} />
        <Route path={`${BASEURL}/menu`} element={<MenuPage />} />
        <Route path={`${BASEURL}/contact`} element={<ContactPage/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
