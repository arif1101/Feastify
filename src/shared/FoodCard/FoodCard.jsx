import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useCart from '../../useComponents/useCart';

const FoodCard = ({item}) => {
    const {user} = useContext(AuthContext);
    const {_id, name, recipe, category, price} = item;
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

    const notify = (msg) => 
        toast.success(msg, {
          position: "top-center",  // Use a valid position
          autoClose: 3000,        // Auto close in 3s
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            backgroundColor: "white", // Green background
            color: "green",           // White text
          }
    });
    
    
    const addToCart = () => {
        if(user && user.email){
            const cartItem = {
                menuId: _id,
                email: user.email,
                name: name,
                recipe: recipe,
                price: price

            }
            axios.post('http://localhost:5000/carts', cartItem)
            .then(res => {
                if(res.data.insertedId){
                    notify('add to your cart')
                }
                refetch()
            })
        }
        else{
            notify()
            navigate('/login', { state: { from: location } })
        }
    }
    
    return (
        <div className='border max-w-[424px] pb-[52px] flex flex-col gap-8'>
        <div className='w-full h-[300px] overflow-hidden'>
        <img className='w-full h-full object-cover' src={item.image} alt="" />
        </div>
        <div className='px-[40px] flex flex-col items-center gap-6'>
            <h1 className='text-[24px]'>{item.name}</h1>
            <p className='text-[16px]'>{item.recipe}</p>
            <button onClick={addToCart} className='w-[196px] h-[64px] btn border border-b-[5px] border-yellow-600 rounded-xl'>ADD TO CART</button>
        </div>
    </div>
    );
};

export default FoodCard;