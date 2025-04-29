import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const UserHome = () => {
    const {user, userPhotoURL} = useContext(AuthContext)
    
    console.log(userPhotoURL)
    return (
        <div className="p-4 space-y-4 max-w-[1080px] w-full mx-auto mt-10">
        <h2 className="text-xl font-semibold">Hi. Welcome Back!</h2>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Menu Card */}
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-xl p-4 shadow-md text-center">
            <div className="text-2xl font-bold">205</div>
            <div className="mt-1">Menu</div>
            </div>

            {/* Shop Card */}
            <div className="bg-gradient-to-r from-yellow-300 to-orange-400 text-white rounded-xl p-4 shadow-md text-center">
            <div className="text-2xl font-bold">103</div>
            <div className="mt-1">Shop</div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl p-4 shadow-md text-center">
            <div className="text-2xl font-bold">03</div>
            <div className="mt-1">Contact</div>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Profile Box */}
            <div className="bg-orange-100 p-6 rounded-xl text-center">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-blue-400 overflow-hidden"><img className='w-full h-full object-cover' src={user.photoURL} alt="" /></div>
            <div className="mt-4 font-semibold text-lg">{user.displayName}</div>
            </div>

            {/* Activities Box */}
            <div className="bg-yellow-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Your Activities</h3>
            <ul className="space-y-2 text-sm">
                <li><span className="text-blue-600 font-medium">📦 Orders: 6</span></li>
                <li><span className="text-green-600 font-medium">⭐ Reviews: 2</span></li>
                <li><span className="text-yellow-600 font-medium">📅 Bookings: 1</span></li>
                <li><span className="text-red-600 font-medium">💳 Payment: 3</span></li>
            </ul>
            </div>
        </div>
        </div>

    );
};

export default UserHome;