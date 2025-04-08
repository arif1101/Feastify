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
        <div className='px-24 py-11 w-full'>

            <div className='w-full'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                    {/* name  */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">name</legend>
                        <input {...register("name")} type="text" className="input" placeholder="Type here" />
                    </fieldset>
                    <div className='flex border items-center justify-between w-full'>
                    {/* category  */}
                    <select {...register("category")}
                        className='select select-bordere w-full max-w-xs'>
                        <option disabled selected="female">select a category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                    {/* price  */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Price</legend>
                        <input {...register("price")} type="number" className="input" placeholder="set price" />
                    </fieldset>
                    </div>
                    {/* description  */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Food Description</legend>
                        <textarea {...register("recipe")} className="textarea h-24" placeholder="Bio"></textarea>
                    </fieldset>
                    {/* fiel input  */}
                    <div>
                    <input {...register('image')} type="file" className="file-input file-input-ghost" />
                    </div>
                    <button className='btn'>Add Itme</button>

                </form>
            </div>
        </div>
    )
};

export default AddItem;