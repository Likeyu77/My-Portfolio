import logo from '../assets/logo.jpg'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import NavLinks from './NavLinks'
import { useState, useEffect } from 'react'

// const themes = { synthwave: 'synthwave', corporate: 'corporate' }
const Navbar = () => {
  // const [theme, setTheme] = useState(themes.synthwave)
  const [activeLink, setActiveLink] = useState('home')

  // const handleTheme = () => {
  //   const { synthwave, corporate } = themes
  //   const newTheme = theme === synthwave ? corporate : synthwave
  //   setTheme(newTheme)
  // }

  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', theme)
  // }, [theme])

  return (
    <nav className="bg-base-200 flex justify-center px-16 bg-opacity-60 fixed w-full z-20">
      <div className="navbar align-item max-w-screen-xl">
        <div className="navbar-start ml-4">
          <a href="#home" className="hidden md:flex  w-16 h-16 rounded-full">
            <img
              src={logo}
              alt="logo"
              className=" w-full h-full rounded-full "
            />
          </a>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-base-200 rounded-box w-52">
              <NavLinks activeLink={activeLink} setActiveLink={setActiveLink} />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal">
            <NavLinks activeLink={activeLink} setActiveLink={setActiveLink} />
          </ul>
        </div>

        <div className="navbar-end">
          {/* <label className="swap swap-rotate">
            <input type="checkbox" onChange={() => handleTheme()} />

            <BsMoonFill className="swap-off h-4 w-4" />

            <BsSunFill className="swap-on h-4 w-4" />
          </label> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
