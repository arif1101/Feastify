import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../useComponents/useAxiosPublic';
import useAxiosSecure from '../../useComponents/useAxiosSecure';
import { toast } from 'react-toastify';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const { name, category, recipe, price, image, _id } = useLoaderData();
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const notify = () =>
    toast.success("Successfully updated food item", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        style: {
        backgroundColor: "white",
        color: "green",
        },
    })

    const onSubmit = async (data) => {
        try {
            let imageURL = image; // fallback to existing image

            // Only upload if a new image is selected
            if (data.image?.[0]) {
            const imageFile = { image: data.image[0] };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                "content-type": "multipart/form-data",
                },
            });

            if (res.data.success) {
                imageURL = res.data.data.display_url;
            }
            }

            const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: imageURL,
            };

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);

            if (menuRes.data.modifiedCount > 0) {
            notify();
            }
        } catch (error) {
            console.error("Update error:", error);
            toast.error("Failed to update. Try again!");
        }
    };
    
    return (
    <div className='px-6 md:px-24 py-11 w-full'>
    <div className='text-center mb-8'>
        <h2 className='text-3xl font-semibold'>UPDATE ITEM</h2>
    </div>

    <div className='bg-gray-100 p-10 rounded w-full max-w-4xl mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className='space-y-6'>

        {/* Recipe Name */}
        <div>
            <label className='block mb-1 font-semibold'>Recipe name*</label>
            <input
            {...register("name")}
            defaultValue={name}
            type="text"
            placeholder="Recipe name"
            className="input input-bordered w-full"
            />
        </div>

        {/* Category and Price */}
        <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex-1'>
            <label className='block mb-1 font-semibold'>Category*</label>
            <select {...register("category")} defaultValue={category} className='select select-bordered w-full'>
                <option disabled value='default'>Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
            </select>
            </div>
            <div className='flex-1'>
            <label className='block mb-1 font-semibold'>Price*</label>
            <input
                {...register("price")}
                defaultValue={price}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
            />
            </div>
        </div>

        {/* Recipe Details */}
        <div>
            <label className='block mb-1 font-semibold'>Recipe Details*</label>
            <textarea
            {...register("recipe")}
            defaultValue={recipe}
            placeholder="Recipe Details"
            className="textarea textarea-bordered w-full h-32"
            />
        </div>

        {/* Image Upload */}
        <div>
            <label className='block mb-1 font-semibold'>Upload New Image (optional)</label>
            <input
            {...register("image")}
            type="file"
            accept="image/*"
            className="file-input file-input-bordered w-full"
            />
        </div>

        {/* Submit Button */}
        <div className='text-center'>
            <button className='btn bg-yellow-700 text-white px-6 hover:bg-yellow-800'>
            Update Recipe Details
            </button>
        </div>
        </form>
    </div>
    </div>
    );
};

export default UpdateItem;