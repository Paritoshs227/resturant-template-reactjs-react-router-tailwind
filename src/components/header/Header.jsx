import { NavLink ,Link } from 'react-router-dom';
import BASEURL from '../../baseurl';
const Header = () => {
  return (
    <header className="absolute w-full bg-transparent hidden lg:block">
    <nav className="flex container mx-auto w-full pt-5">
      <Link to={`${BASEURL}/`} className="logocontainer flex items-center">
        <img src={`${BASEURL}/assets/img/icons8-utensils-50.png`} alt="icons8-utensils-50" className="w-10" width="592" height="592"/>
        <div className="text-yellow-500 text-4xl font-bold">&nbsp; Resturant</div>
      </Link>
      <div className="navbar grow flex justify-end items-center">
        <div className="space-x-6">
          <NavLink className=" text-white font-semibold" to={`${BASEURL}/`}>HOME</NavLink>
          <NavLink className=" text-white font-semibold" to={`${BASEURL}/about`}>ABOUT</NavLink>
          <NavLink className=" text-white font-semibold" to={`${BASEURL}/service`}>SERVICE</NavLink>
          <NavLink className=" text-white font-semibold" to={`${BASEURL}/menu`}>MENU</NavLink>    
          <NavLink className=" text-white font-semibold" to={`${BASEURL}/contact`}>CONTACT</NavLink>        
        </div>
        <Link to="/service" className="px-4 py-3 ms-6 bg-yellow-500 hover:bg-yellow-400  text-white rounded-sm">BOOK A TABLE</Link>
      </div>      
    </nav>
  </header>
  )
}
export default Header