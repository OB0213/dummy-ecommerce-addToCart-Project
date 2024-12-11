import React from 'react';
import './Cart.css';
import { useSelector,useDispatch } from 'react-redux';
import Mycart from './Mycart';
import { useState,useEffect } from 'react';
import { deleteFromCart, updateCart } from '../Redux/cartSlice';

function Cart() {
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  console.log(cartData);

  useEffect(()=>{
    localStorage.setItem("cartData",JSON.stringify(cartData));

  },[cartData])
 

  return (
    <div className='cart container-fluid pt-2'>
    <div className='d-flex justify-content-center align-items-center mb-3'>
    <h1 className='text-center mytext'>CART DETAILS</h1>
    </div>
   {
    cartData.length===0?<h1 className='warning text-danger'>No Data in Cart</h1>:<MyCartData />
   }
      
    </div>
  )

  function MyCartData()
{
  function totalCartCost()
  {
    let sum=0;
    for(let i=0;i<cartData.length;i++)
    {
       sum=sum+(cartData[i].newPrice)*cartData[i].count;
    }

    return sum;
  }
  const [cartTotalCost,setCartTotalCost]=useState(totalCartCost());
  useEffect(()=>{
    setCartTotalCost(totalCartCost)

  },[cartData]);

  function MyclickData(valuedata)
  {
    setCartTotalCost(cartTotalCost+valuedata)
  }

  function deleteData(value)
  {
    dispatch(deleteFromCart(value))
  }

  
  
  return(
<div className='mydatacart'>
 
      {
        cartData.map((values,index)=>
        <div className='mycartpart mt-3 mb-3'>
<Mycart values={values} myclickdata={MyclickData} deleteElement={()=>deleteData(values)} index={index} />
          </div>
        )
      }
<div className='cartTotal d-flex justify-content-between align-items-center border-top border-bottom border-3 mt-3 px-3'>
<h1 className='mycartTotal pt-3 pb-3'>Cart Total Cost</h1>
<h1 className='mycartTotal pt-3 pb-3'>Rs {cartTotalCost}</h1>
</div>
      </div>
  )
}
}



export default Cart
