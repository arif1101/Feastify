import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import SectionTitle from '../../useComponents/SectionTitle';

const items = [
  { id: 1, name: "Roast Duck Breast", price: 14.5 },
  { id: 2, name: "Tuna Niçoise", price: 14.5 },
  { id: 3, name: "Escalope de Veau", price: 14.5 },
  { id: 4, name: "Chicken and Walnut Salad", price: 14.5 },
  { id: 5, name: "Fish Parmentier", price: 14.5 },
  { id: 6, name: "Roasted Pork Belly", price: 14.5 },
];

const ManageItems = () => {
  return (
    <div className="w-full border border-blue-500 py-14">
        <SectionTitle title={'Manage All Items'} subTitle={'---hurry up!---'}></SectionTitle>
        <div className='py-[50px] px-20'>
            <h2 className="text-2xl font-semibold mb-6">
            TOTAL ITEMS: <span className="font-bold">{items.length}</span>
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
                    {items.map((item) => (
                    <tr key={item.id} className="border-t text-sm text-gray-700">
                        <td className="p-4 font-semibold">1</td>
                        <td className="p-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-md"></div>
                        </td>
                        <td className="p-4">{item.name}</td>
                        <td className="p-4">${item.price}</td>
                        <td className="p-4">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded">
                            <FaEdit />
                        </button>
                        </td>
                        <td className="p-4">
                        <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded">
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
