import { Link } from 'react-router-dom'
import BASEURL from '../../baseurl';
const Footer = () => {
  return (

    <footer className="bg-[#0F172B] w-full ">
      <div className="container mx-auto py-5 w-full border-b border-gray-200">
        <div className="row w-full px-5 flex flex-col md:flex-row ">
          <div className="col px-3 mt-10 w-full md:w-1/3">
            <h4 className="font-bold text-3xl mt-4 text-yellow-500 ">Reservation</h4>
            <Link to={`${BASEURL}/about`} className="text-white block mb-3 mt-5">About US</Link>
            <Link to={`${BASEURL}/contact`} className="text-white block mb-3">Contact Us</Link>
            <Link to={`${BASEURL}/service`} className="text-white block mb-3">Service</Link>
            <Link to={`${BASEURL}/menu`} className="text-white block mb-3">Menu</Link>     
          </div>
          <div className="col px-3 mt-10 w-full md:w-1/3">
            <h4 className="font-bold text-3xl mt-4 text-yellow-500 ">Contact</h4>
            <p className="text-white block mb-3 mt-5">123, New York USA</p>
            <p className="text-white block mb-3">+12 345 6789</p>
            <p className="text-white block mb-3">info@example.com</p>
          </div>
          <div className="col px-3 mt-10 w-full md:w-1/3">
            <h4 className="font-bold text-3xl mt-4 text-yellow-500 ">Opening</h4>
            <h5 className="text-white text-xl mt-5">Monday - Staurday</h5>
            <h5 className="text-white text-md">9AM - 9PM</h5>
            <h5 className="text-white text-xl mt-5">Sunday</h5>
            <h5 className="text-white text-md">10AM - 8PM</h5>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-5 w-full ">
        <div className="row px-5 ">
          <div className="col px-3">
            <p className="text-white block mb-3">
              ©Your Site Name, All Right Reserved.
              Designed By Your Name
            </p>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer