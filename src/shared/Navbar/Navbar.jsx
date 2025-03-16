import React, { useContext } from 'react';
import {Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { toast } from 'react-toastify';
import useCart from '../../useComponents/useCart';

const Navbar = () => {
    const [cart] = useCart()
    const navigate = useNavigate()
    const {user,logOutUser} = useContext(AuthContext)

    const notify = () => 
        toast.success("Successfully logged out", {
          position: "top-center",  // Use a valid position
          autoClose: 3000,        // Auto close in 3s
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            backgroundColor: "white",
            color: "red",           // White text
          }
        });
    
    const handleLogOut = () => {
        logOutUser()
        .then(() => {
            notify()
            navigate('/')

        })
        .catch(() => {

        })
    }

    const links = (
        <>
            <NavLink
                to='/'
                className={({isActive}) => 
                    `${isActive ? 'text-lime-400':'text-black'}`
                }
            >
            Home</NavLink>
            <NavLink
                to='/contact'
                className={({isActive}) =>
                    `${isActive ? 'text-lime-400':'text-black'}`
                }
            >Contact</NavLink>
            <NavLink
                to='/dashboard'
                className={({isActive}) =>
                    `${isActive ? 'text-lime-400':'text-black'}`
                }
            >Dashboard</NavLink>
            <NavLink
                to='/menu'
                className={({isActive}) => 
                    `${isActive ? 'text-lime-400':'text-black'}`
                }
            >
            My Menu</NavLink>
            <NavLink
                to='/order/salad'
                className={({isActive}) =>
                    `${isActive ? 'text-lime-400':'text-black'}`
                }
            >Order</NavLink>
        </>
    )
    
    return (
        <div className="max-w-screen-xl navbar justify-between bg-white border-b lg:px-[55px] fixed z-10">
            {/* logo  */}
            <div className="flex items-center lg:items-start">

                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                
                
                <div className='flex flex-col'>
                    <h1 className="text-[22px] lg:text-[32px] font-bold"><span className='text-[rgb(217,153,4)]'>T</span>he<span className='text-[rgb(217,153,4)]'>D</span>aily<span className='text-[rgb(217,153,4)]'>D</span>ish</h1>
                    <h1 className="text-[13px]  tracking-[14px] text-sblack">RESTAURENT</h1>
                </div>
                
                
            </div>
            {/* end logo  */}
            
            {/* start cart and profile  */}
            <div className=" flex gap-[24px]">

                {/* start page link  */}
                <div className='hidden lg:flex'>
                    <ul className='text-[20px] font-[600] flex gap-5'>
                    {
                        links
                    }
                    </ul>
                </div>
                {/* end page link  */}

                
                {/* start cart  */}
                <div className="dropdown dropdown-end bg-yellow-600 rounded-full">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                    <span className="badge badge-sm indicator-item bg-green-600 rounded-full text-white">{cart.length}</span>
                    </div>
                </div>
                <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                    <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                    </div>
                </div>
                </div>
                {/* end cart  */}

                {/* start authentication  */}
                {
                    user? <>
                        <div className="dropdown dropdown-end">                
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                                </li>
                                <li>Settings</li>
                                <li><NavLink onClick={handleLogOut}>Logout</NavLink></li>

                            </ul>
                    </div>
                    </> : <>
                        <NavLink to='/login'><button className='text-[20px] font-semibold'>login</button></NavLink>
                    </>
                }


                {/* end authentication  */}
            </div>
        </div>
    );
};

export default Navbar;