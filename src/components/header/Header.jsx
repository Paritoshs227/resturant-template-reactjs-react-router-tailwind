import { NavLink, Link } from 'react-router-dom';
import BASEURL from '../../baseurl';
import { useState } from 'react';
const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const menuClickHandler=()=>{    
    setMenuClicked(!menuClicked);
  }
  const menuCloseHandler=()=>{      
    setMenuClicked(false);
  }
  return (
    <>
      <header className="absolute w-full bg-transparent">
        <nav className="flex container mx-auto w-full pt-5 justify-between">
          <Link to={`${BASEURL}/`} className="logocontainer flex items-center ms-5 md:ms-0">
            <img src={`${BASEURL}/assets/img/icons8-utensils-50.png`} alt="icons8-utensils-50" className="w-10" width="592" height="592" />
            <div className="text-yellow-500 text-4xl font-bold">&nbsp; Resturant</div>
          </Link>
          <img src={`${BASEURL}/assets/img/icons8-menu-30.png`} alt='' className='me-5 lg:hidden' onClick={menuClickHandler}/>
          <div className="hidden lg:block grow">
            <div className="navbar  flex justify-end items-center ">
              <div className="space-x-6">
                <NavLink className=" text-white font-semibold" to={`${BASEURL}/`}>HOME</NavLink>
                <NavLink className=" text-white font-semibold" to={`${BASEURL}/about`}>ABOUT</NavLink>
                <NavLink className=" text-white font-semibold" to={`${BASEURL}/service`}>SERVICE</NavLink>
                <NavLink className=" text-white font-semibold" to={`${BASEURL}/menu`}>MENU</NavLink>
                <NavLink className=" text-white font-semibold" to={`${BASEURL}/contact`}>CONTACT</NavLink>
              </div>
              <Link to="/service" className="px-4 py-3 ms-6 bg-yellow-500 hover:bg-yellow-400  text-white rounded-sm">BOOK A TABLE</Link>
            </div>
          </div>
        </nav>
      </header>
      <div onClick={menuCloseHandler} className={`bg-[#0F172B] h-screen fixed z-10 w-3/4 md:w-1/3 transition-transform transform ${menuClicked ?'':'-translate-x-full'} ease-in-out delay-100`}>
        <Link to={`${BASEURL}/`} className="logocontainer flex items-center ps-3  mt-5">
          <img src={`${BASEURL}/assets/img/icons8-utensils-50.png`} alt="icons8-utensils-50" className="w-5" width="592" height="592" />
          <div className="text-yellow-500 text-2xl font-bold">&nbsp; Resturant</div>
        </Link>
        <div className="flex-col flex px-6">
          <NavLink className="mt-5 text-white font-semibold" to={`${BASEURL}/`} >HOME</NavLink>
          <NavLink className="mt-5 text-white font-semibold" to={`${BASEURL}/about`}>ABOUT</NavLink>
          <NavLink className="mt-5 text-white font-semibold" to={`${BASEURL}/service`}>SERVICE</NavLink>
          <NavLink className="mt-5 text-white font-semibold" to={`${BASEURL}/menu`}>MENU</NavLink>
          <NavLink className="mt-5 text-white font-semibold" to={`${BASEURL}/contact`}>CONTACT</NavLink>
        </div>
      </div>
      <div onClick={menuCloseHandler} className={`${menuClicked ?'w-screen':'w-0'} h-screen fixed bg-black opacity-50 overflow-hidden transition delay-1000`} ></div>
    </>
  )
}
export default Header