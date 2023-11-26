import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start pl-10">
            <p className="text-xl text-red-400">daisyUI</p>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">

            <li className='px-5'>

                <NavLink to='/'>
                    Student List
                </NavLink>

            </li>
            <li className='px-5'>

                <NavLink to='/registration'>
                    Registration Form
                </NavLink>
                
            </li>
            </ul>

        </div>
        </div>
    </>
  )
}

export default Navbar
