import React from "react";
import { FaTrash } from "react-icons/fa"; // Import delete icon
import useCart from "../../useComponents/useCart";
import SectionTitle from "../../useComponents/SectionTitle";
import useAxiosSecure from "../../useComponents/useAxiosSecure";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart()
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure()

  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/carts/${id}`)
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
    <div className="w-full max-w-[992px] mx-auto py-12">
        <SectionTitle title={'WANNA ADD MORE?'} subTitle={'---My Cart---'}></SectionTitle>
        
    <div className="p-[50px]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Total orders: {cart.length}</h2>
        <h2 className="text-lg font-bold">
          Total price: ${totalPrice.toFixed(2)}
        </h2>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Pay
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-yellow-600 text-white">
            <th className="p-2 border">Item Image</th>
            <th className="p-2 border">Item Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.id} className="border">
              <td className="p-2 border text-center flex justify-around items-center">
                <p>{index+1}</p>
                <img
                  src={item.image}
                  className="w-12 h-12 rounded-md object-cover"
                />
              </td>
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">${item.price.toFixed(2)}</td>
              <td className="p-2 border text-center">
                <button onClick={() => handleDelete(item._id)} className="bg-red-600 text-white p-2 rounded">
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

export default MyCart;

