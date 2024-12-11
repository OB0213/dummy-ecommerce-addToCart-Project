import React, { useEffect } from 'react';
import './Main.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment,updateCartLength} from '../Redux/cartSlice';


function OfferMens({data}) {
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();


  function AddData(value)
  {
    let myvaluedata=cartData.filter((values)=>values.id===value.id);
    if(myvaluedata.length===0)
    {
      dispatch(increment(value));
      alert("Added to Cart Successfully");
    }
    else if(myvaluedata.length>0)
    {
      alert("Already Added in the cart");
    }
 
  }

  useEffect(()=>{
    localStorage.setItem("cartData",JSON.stringify(cartData));
  },[cartData])

  console.log(cartData);
  return (
    <div className='container-fluid'>
    <div className='row mb-sm-5 mb-md-5 mb-lg-5 justify-content-center'>
      {
        data.map((values)=>
        <div className='col-sm-6 col-md-6 col-lg-3 px-4 mb-3 h-100 myrow'>
        <div className='rowData w-100 bg-white h-100 rounded'>
        <img src={values.image} className='h-50 w-100 mb-2'></img>
        <div className='detailsdata py-2 px-2'>
          <p className='clothesdetails text-center'>
           {values.name}
          </p>
          <div className='mycostData d-flex justify-content-evenly align-items-center my-1'>
        <p className='originalcost'>Original Cost</p>
        <p className='cost fs-4'>Rs {values.oldPrice}</p>
          </div>
        
          <div className='mycostData d-flex justify-content-evenly align-items-center my-1'>
        <p className='originalcost'>Offered Cost:</p>
        <p className='cost fs-4'>Rs {values.newPrice}</p>
          </div>
        
          <div className='d-flex justify-content-evenly align-items-center mb-1'>
            <span className='bg-success text-white align-items-center justify-content-between px-2 py-2 rounded-circle'>
              {values.discount} Off
            </span>
        
            <span className='star-rating'>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-regular fa-star-half-stroke text-warning"></i>
            <span className='ps-1'>{values.rating}/5</span>
            </span>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center mb-3'>
        <button className='btn btn-primary mb-3' onClick={()=>AddData(values)}>
        <i class="fa-solid fa-cart-shopping me-2" ></i>
          Add to cart</button>

          </div>
        </div>
          </div>
        
        )
      }
      </div>
      </div>
      
  )
        
   
}

export default OfferMens
