import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
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
                        <textarea {...register("description")} className="textarea h-24" placeholder="Bio"></textarea>
                    </fieldset>
                    <input type="submit" />

                </form>
            </div>
        </div>
    )
};

export default AddItem;