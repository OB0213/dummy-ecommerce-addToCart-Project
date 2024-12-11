import React, { useEffect } from 'react';
import './Cart.css';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addCartLength,deleteFromCart, updateCart, updateCartLength, updateCount } from '../Redux/cartSlice';

function Mycart({values,myclickdata,deleteElement,index}) {
    const [count,setCount]=useState(values.count);

    const cartData = useSelector((state) => state.cart.cartData);
    const dispatch = useDispatch();
    const cartLength=useSelector((state)=>state.cart.lengthdata);

    console.log("Length is=",cartLength);

    useEffect(()=>{
      UpdateData(index,count)
    },[index,count]);

   

    function IncrementCounter()
    {
       setCount(count+1);
       
       myclickdata(values.newPrice);
       dispatch(addCartLength(1));
       
    }

    function UpdateData(index,counter)
    {
       let action={index:index,count:counter};
      dispatch(updateCart(action));
    }

 

    function DecrementCounter()
    {
        if(count>1)
        {
      myclickdata(-values.newPrice);
      setCount(count-1);
      dispatch(addCartLength(-1));
        }
        else{
            alert("You cannot reduce more");
        }
    }

   

    
  return (
  <div className='d-flex justify-content-evenly align-items-center cartPart border border-3 px-2 py-2'>
    <div className='imageData h-100 px-2 py-2'>
        <img src={values.image} className='h-100 w-100'></img>
    </div>

    <div className='d-flex flex-column justify-content-evenly align-items-center px-2 py-2'>
        <p className='mycartname px-2 fw-bolder'>{values.name}</p>
        <p className='totalcost mycartname fw-bolder'>Rs {values.newPrice*count}</p>
        
    </div>

    <div className='d-flex justify-content-center align-items-center'>
        <button className='btn btn-warning' onClick={DecrementCounter}>-</button>
        <span className='bg-white px-3 h-100 py-1'>{count}</span>
        <button className='btn btn-warning' onClick={IncrementCounter}>+</button>
    </div>


<span className='myspan btn btn-danger mx-2' onClick={deleteElement}>
<i class="fa-solid fa-trash"></i>
</span>

  </div>
  )
}

export default Mycart
