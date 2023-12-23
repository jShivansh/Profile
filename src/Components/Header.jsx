import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 flex flex-row-reverse justify-between items-center mx-auto max-w-screen-xl">
                <div className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2">
                    <ul className="flex flex-col  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink to="/Profile/"
                            className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 border-b 
                                    ${isActive ? "text-orange-700" : "text-gray-700"} 
                                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    } //isActive is given here to check with "if-else"  
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Profile/about"
                            className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 border-b 
                                    ${isActive ? "text-orange-700" : "text-gray-700"} 
                                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    } //isActive is given here to check with "if-else"  
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Profile/work"
                            className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 border-b 
                                    ${isActive ? "text-orange-700" : "text-gray-700"} 
                                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    } //isActive is given here to check with "if-else"  
                            >
                                Work
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Profile/contact"
                            className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 border-b 
                                    ${isActive ? "text-orange-700" : "text-gray-700"} 
                                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    } //isActive is given here to check with "if-else"  
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
      </header>
    </div>
  )
}

export default Header
