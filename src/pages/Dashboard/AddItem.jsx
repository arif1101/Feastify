import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../useComponents/useAxiosPublic';
import useAxiosSecure from '../../useComponents/useAxiosSecure';
import { toast } from 'react-toastify';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItem = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const notify = () => 
        toast.success("Successfully added food item", {
          position: "top-center",  // Use a valid position
          autoClose: 3000,        // Auto close in 3s
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          style: {
            backgroundColor: "white",
            color: "green",// White text
          }
    });
    
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type':'multipart/form-data'
            }
        });
        if(res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                notify()
            }
             
        }
        console.log(res.data)
    }
  
    return (
    <div className='px-3 md:px-24 md:py-11 w-full'>
    <div className='text-center mb-8'>
        <p className='text-sm text-yellow-500 italic'>---What's new?---</p>
        <h2 className='text-3xl font-semibold border-t border-b py-4 w-fit mx-auto'>ADD AN ITEM</h2>
    </div>

    <div className='bg-gray-100 p-10 rounded max-w-4xl mx-auto w-full'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>

        {/* Recipe Name */}
        <div>
            <label className='block mb-1 font-semibold'>Recipe name*</label>
            <input {...register("name")} type="text" placeholder="Recipe name" className="input input-bordered w-full" />
        </div>

        {/* Category and Price */}
        <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex-1'>
            <label className='block mb-1 font-semibold'>Category*</label>
            <select {...register("category")} className='select select-bordered w-full'>
                <option disabled selected>Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
            </select>
            </div>
            <div className='flex-1'>
            <label className='block mb-1 font-semibold'>Price*</label>
            <input {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full" />
            </div>
        </div>

        {/* Recipe Details */}
        <div>
            <label className='block mb-1 font-semibold'>Recipe Details*</label>
            <textarea {...register("recipe")} placeholder="Recipe Details" className="textarea textarea-bordered w-full h-32" />
        </div>

        {/* Image Upload */}
        <div>
            <input {...register('image')} type="file" className="file-input file-input-bordered w-full max-w-xs" />
        </div>

        {/* Submit Button */}
        <button className='btn bg-yellow-600 text-white hover:bg-yellow-700'>
            Add Item 🍴
        </button>
        </form>
    </div>
    </div>

    )
};

export default AddItem;