import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import SectionTitle from '../../useComponents/SectionTitle';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../useComponents/useAxiosSecure';
import useMenu from '../../useComponents/useMenu';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, ,refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if(res.data.deletedCount>0){
                    
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your item has been deleted.",
                        icon: "success"
                      });
                      refetch()

                }
            }
          });
    }
    
  return (
    <div className="w-full px-3 mb-10 md:py-14">
        <SectionTitle title={'Manage All Items'} subTitle={'---hurry up!---'}></SectionTitle>
        <div className='md:py-[50px] md:px-20'>
            <h2 className="text-2xl font-semibold mb-6">
            TOTAL ITEMS: <span className="font-bold">{menu.length}</span>
            </h2>

            <div className="overflow-x-auto rounded-md shadow">
                <table className="min-w-full bg-white border">
                <thead>
                    <tr className="bg-yellow-600 text-white text-left text-sm">
                    <th className="p-3">#</th>
                    <th className="p-3">Item Image</th>
                    <th className="p-3">Item Name</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Action</th>
                    <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {menu.map((item,index) => (
                    <tr key={index} className="border-t text-sm text-gray-700">
                        <td className="p-4 font-semibold">{index+1}</td>
                        <td className="p-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-md"><img src={item.image} alt="" /></div>
                        </td>
                        <td className="p-4">{item.name}</td>
                        <td className="p-4">${item.price}</td>
                        <td className="p-4">
                        <Link to={`/dashboard/updateItem/${item._id}`}>
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded">
                                <FaEdit />
                            </button>
                        </Link>
                        </td>
                        <td className="p-4">
                        <button onClick={()=>handleDeleteItem(item)} className="bg-red-600 hover:bg-red-700 text-white p-2 rounded">
                            <FaTrash />
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

export default ManageItems;
