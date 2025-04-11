import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdAddBox, MdManageAccounts, MdLibraryBooks, MdPeople } from "react-icons/md";
import { IoHomeSharp, IoFastFood, IoCartSharp, IoMail } from "react-icons/io5";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import useAdmin from "../../useComponents/useAdmin";

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
      <p className="flex gap-3 items-center">
        <FaUsers className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/users" onClick={closeDrawer}>All Users  </NavLink>
      </p>
      <p className="flex gap-3 items-center">
        <FaUsers className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/addItem" onClick={closeDrawer}>Add Item</NavLink>
      </p>
      <p className="flex gap-3 items-center">
        <FaUsers className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/manageItems" onClick={closeDrawer}>Manage Items</NavLink>
      </p>
      </> : <>
      <p className="flex gap-3 items-center">
        <AiFillHome className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/home" onClick={closeDrawer}>ADMIN HOME</NavLink>
      </p>

      <p className="flex gap-3 items-center">
        <MdAddBox className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/addItems" onClick={closeDrawer}>ADD ITEMS</NavLink>
      </p>

      <p className="flex gap-3 items-center">
        <MdAddBox className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/paymentHistory" onClick={closeDrawer}>PAYMENT HISTORY</NavLink>
      </p>

      <p className="flex gap-3 items-center">
        <FaShoppingCart className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/myCart" onClick={closeDrawer}>MY CART</NavLink>
      </p>

      <p className="flex gap-3 items-center">
        <MdManageAccounts className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/manageItems" onClick={closeDrawer}>MANAGE ITEMS</NavLink>
      </p>

      <p className="flex gap-3 items-center">
        <MdLibraryBooks className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/manageBookings" onClick={closeDrawer}>MANAGE BOOKINGS</NavLink>
      </p>

      <p className="flex gap-3 items-center">
        <MdPeople className="w-[24px] h-[24px]" />
        <NavLink to="/dashboard/allUsers" onClick={closeDrawer}>ALL USERS</NavLink>
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
        <NavLink to="/order" onClick={closeDrawer}>SHOP</NavLink>
      </p>

      <p className="flex gap-3 items-center">
        <IoMail className="w-[24px] h-[24px]" />
        <NavLink to="/contact" onClick={closeDrawer}>CONTACT</NavLink>
      </p>
    </>
  );

  return (
    <div className="drawer lg:drawer-open border w-auto border-red-700">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
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
