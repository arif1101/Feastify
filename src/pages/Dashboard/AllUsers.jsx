import React from 'react';
import useAxiosSecure from '../../useComponents/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../useComponents/SectionTitle';
import { FaTrash, FaUsers, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleRole = (user) => {
      axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        console.log(res)
        if(res.data.modifiedCount > 0){
          refetch()
          alert('success')
        }
      })
    }

    const handleDelete = (user) => {
    console.log(user)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        // console.log(result.isConfirmed)
        if (result.isConfirmed) {
            axiosSecure.delete(`/users/${user._id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })

        }
      });
    }
    
    return (
        <div className="w-full px-3 max-w-[992px] mx-auto md:py-12 ">
          <SectionTitle title={'MANAGE ALL USERS'} subTitle={'---How many??---'} />
          
          <div className="md:p-[50px] bg-white shadow-lg rounded-lg ">
            <p className='text-[32px] font-bold text-center text-gray-700 mb-6'>Total Users: <span className="text-yellow-600">{users.length}</span></p>
            {/* Table Section */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border bg-gray-100 shadow-md rounded-lg">
                <thead>
                  <tr className="bg-yellow-600 text-white">
                    <th className="p-4 border text-[14px] md:text-base text-left">#</th>
                    <th className="p-4 border text-[14px] md:text-base text-left">Name</th>
                    <th className="p-4 border text-[14px] md:text-base text-left">Email</th>
                    <th className="p-4 border text-[14px] md:text-base text-center">Role</th>
                    <th className="p-4 border text-[14px] md:text-base text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id} className="border bg-white hover:bg-gray-200 transition duration-200 text-[14px] md:text-base">
                      <td className="p-4 border text-left font-semibold text-gray-700">{index + 1}</td>
                      <td className="p-4 border text-left text-gray-600">{user.name}</td>
                      <td className="p-4 border text-left text-gray-600">arifurrahmanarif223@gmail.com</td>
                      {/* user role  */}
                      <td className="p-4 border text-center">
                        <button
                          onClick={() => handleRole(user)}
                          className={`flex items-center justify-center gap-2 p-2 rounded-lg transition-all duration-200 
                            ${user.role === "admin" ? "bg-yellow-500 text-white hover:bg-yellow-600" : "bg-gray-300 text-gray-700 hover:bg-gray-400"}`}
                          title={user.role === "admin" ? "This user is an admin" : "Click to make admin"}
                        >
                          {user.role === "admin" ? <FaUserShield className="text-[14px] md:text-xl" /> : <FaUsers className="text-[14px] md:text-xl" />}
                          <span className="text-[14px] text-sm font-semibold">{user.role === "admin" ? "Admin" : "User"}</span>
                        </button>
                      </td>
                      {/* end user role  */}
                      <td className="p-4 border text-center">
                        <button onClick={() => handleDelete(user)} className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition duration-200">
                          <FaTrash className="md:text-lg" />
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
