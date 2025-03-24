import React from 'react';
import useAxiosSecure from '../../useComponents/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../useComponents/SectionTitle';
import { FaTrash, FaUsers, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = []} = useQuery({
        queryKey:['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleRole = () => {

    }
    
    return (
        <div className="w-full max-w-[992px] mx-auto py-12">
          <SectionTitle title={'MANAGE ALL USERS'} subTitle={'---How many??---'} />
          
          <div className="p-[50px] bg-white shadow-lg rounded-lg">
            <p className='text-[32px] font-bold text-center text-gray-700 mb-6'>Total Users: <span className="text-yellow-600">{users.length}</span></p>
            {/* Table Section */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border bg-gray-100 shadow-md rounded-lg">
                <thead>
                  <tr className="bg-yellow-600 text-white">
                    <th className="p-4 border text-left">#</th>
                    <th className="p-4 border text-left">Name</th>
                    <th className="p-4 border text-left">Email</th>
                    <th className="p-4 border text-center">Role</th>
                    <th className="p-4 border text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id} className="border bg-white hover:bg-gray-200 transition duration-200">
                      <td className="p-4 border text-left font-semibold text-gray-700">{index + 1}</td>
                      <td className="p-4 border text-left text-gray-600">{user.name}</td>
                      <td className="p-4 border text-left text-gray-600">{user.email}</td>
                      <td className="p-4 border text-center">
                        {user.role === "admin" ? <FaUserShield className="text-yellow-600 text-xl" /> : <FaUsers className="text-gray-600 text-xl" />}
                      </td>
                      <td className="p-4 border text-center">
                        <button onClick={() => handleRole(user.id)} className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition duration-200">
                          <FaTrash className="text-lg" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
};

export default AllUsers;
