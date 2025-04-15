import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdAddBox, MdManageAccounts, MdLibraryBooks, MdPeople, MdAddCircle, MdFastfood } from "react-icons/md";
import { IoHomeSharp, IoFastFood, IoCartSharp, IoMail } from "react-icons/io5";
import { FaCalendarCheck, FaShoppingCart, FaUsers } from "react-icons/fa";
import useAdmin from "../../useComponents/useAdmin";
import { HiHome } from "react-icons/hi";
import '../../menu.css'


const SideBar = () => {
  
  // Close drawer only on mobile & tablet screens
  const [isAdmin] = useAdmin();
  const closeDrawer = () => {
    if (window.innerWidth < 1024) {
      document.getElementById("my-drawer-2").checked = false;
    }
  };

  const links = (
    <>
    {
      isAdmin ? <>
      {/* admin nav  */}
      <p className="flex gap-3 items-center">
        <HiHome className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard" onClick={closeDrawer}>ADMIN HOME</NavLink>
      </p>
      <p className="flex gap-3 items-center">
        <MdAddCircle className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/addItem" onClick={closeDrawer}>ADD ITEMS</NavLink>
      </p>
      <p className="flex gap-3 items-center">
        <FaCalendarCheck className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/users" onClick={closeDrawer}>MANAGE BOOKING</NavLink>
      </p>
      <p className="flex gap-3 items-center">
        <MdFastfood className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/manageItems" onClick={closeDrawer}>MANAGE ITEMS</NavLink>
      </p>
      <p className="flex gap-3 items-center">
        <FaUsers className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/users" onClick={closeDrawer}>All Users  </NavLink>
      </p>
      </> : <>

      {/* user nav */}
      <p className="flex gap-3 items-center">
        <AiFillHome className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/userHome" onClick={closeDrawer}>HOME</NavLink>
      </p>

      <p className="flex gap-3 items-center">
        <MdAddBox className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/paymentHistory" onClick={closeDrawer}>PAYMENT HISTORY</NavLink>
      </p>

      <p className="flex gap-3 items-center">
        <FaShoppingCart className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/myCart" onClick={closeDrawer}>MY CART</NavLink>
      </p>
      </>
    }

      <div className="mt-6 mb-6 w-full border-[1px]"></div>

      <p className="flex gap-3 items-center">
        <IoHomeSharp className="w-[24px] h-[24px]" />
        <NavLink to="/" onClick={closeDrawer}>HOME</NavLink>
      </p>

      <p className="flex gap-3 items-center">
        <IoFastFood className="w-[24px] h-[24px]" />
        <NavLink to="/menu" onClick={closeDrawer}>MENU</NavLink>
      </p>

      <p className="flex gap-3 items-center">
        <IoCartSharp className="w-[24px] h-[24px]" />
        <NavLink to="/order/salad" onClick={closeDrawer}>SHOP</NavLink>
      </p>

      <p className="flex gap-3 items-center">
        <IoMail className="w-[24px] h-[24px]" />
        <NavLink to="/contact" onClick={closeDrawer}>CONTACT</NavLink>
      </p>
    </>
  );

  return (
    <div className="drawer lg:drawer-open w-auto z-10">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content items-center justify-center">
        {/* Page content here */}
{/* menu button */}
<label
  htmlFor="my-drawer-2"
  className="btn drawer-button lg:hidden m-3 font-semibold text-white hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-orange-400 via-orange-400 to-yellow-600 shadow-md"
>
  <span className="animate-bounce mr-2">🍜</span> Menu
</label>

{/* end menu button */}

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="min-h-screen">
          <ul className="menu bg-orange-400 text-base-content w-80 min-h-screen p-8 text-base text-black flex gap-[26px]">
            <div>
              <h1 className="text-2xl font-bold">THE DAILY DISH</h1>
              <p className="text-lg font-thin tracking-[9.2px]">RESTAURANT</p>
            </div>
            {/* Sidebar content here */}
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
