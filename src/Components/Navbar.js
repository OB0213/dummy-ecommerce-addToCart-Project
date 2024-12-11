import React from 'react';
import cartIcon from '../Assets/logo.png';
import './Navbar.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment,updateCartLength } from '../Redux/cartSlice';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  let user=localStorage.getItem('user');
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  const cartlength=useSelector((state)=>state.cart.lengthdata);
  const navigate=useNavigate();

  useEffect(()=>{
    dispatch(updateCartLength());
  },[cartData]);

  function navigateData()
  {
navigate('/cart');
  }

  function logOut()
  {
    localStorage.removeItem('user');
    localStorage.removeItem('cartData');
     navigate('/login');
    window.location.reload();
    
  }

  return (
    <>
    <nav class="navbar bg-primary navbar-expand-lg navdata">
    <div class="container-fluid">

<span className='navbar-brand d-lg-none' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasScrolling">
<i class="fa-solid fa-bars text-white"></i>
</span>
      <span class="navbar-brand mb-0 h1 text-white">
        <img src={cartIcon}  width="30" height="24" class="d-inline-block align-text-top me-sm-2 me-md-2 me-lg-2"></img>
        <span className='text-white h3'>Flipkart</span>
      </span>

<div className='collapse navbar-collapse'>
      <ul class="ms-lg-5 me-lg-5 navbar-nav nav-underline">
        <li class="nav-item ps-lg-2 pe-lg-2 pt-lg-2 pb-lg-2">
        <span className='d-flex  justify-content-center align-items-center'>
            <i className='fa-solid fa-house text-white h5' ></i>
          <NavLink className="nav-link text-white h5" to='/'>Home</NavLink>
          </span>
        </li>
        <li class="nav-item ps-lg-2 pe-lg-2 pt-lg-2 pb-lg-2">
        <span className='d-flex  justify-content-center align-items-center'>
        <i className='fa-solid fa-person text-white h5' ></i>
            <NavLink className="nav-link text-white h5" to='newOffers'>New Offers</NavLink>
          </span>
        </li>

        <li className='nav-item ps-lg-2 pe-lg-2 pt-lg-2 pb-lg-2'>
          <span className='d-flex justify-content-center align-items-center'>
            <button className='btn btn-danger' onClick={logOut}>Log Out</button>
          </span>
        </li>
       
      
      </ul>
    </div>

    <span className='navbar-brand pt-lg-3 pb-lg-3'>
    <button type="button" class="btn btn-success position-relative" onClick={navigateData}>
  <i className='fa-solid fa-cart-shopping text-white h3 w-100 h-100 mt-1 mb-1'></i>
  {user?<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartlength}
     <span class="visually-hidden">unread messages</span>
  </span>:''
  
}
</button>
      
    
  
    </span>
    </div>
    <Outlet />
  </nav>


  <div class="offcanvas offcanvas-start d-lg-none myoffcanvasdata" data-bs-scroll="true" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header d-flex justify-content-between align-items-center titledata border px-4">
   <span className='navbar-brand pt-md-2 pb-md-2'>
    <img src={cartIcon} width="30" height="30"></img>
    <span className='text-white h3'>Flipkart</span>
   </span>
    <button type="button" class="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <ul class="nav flex-column nav-fill nav-justified nav-underline">
  <li class="nav-item mb-sm-2 mb-md-2 mt-sm-2 mt-md-2">
  <span className='d-flex align-items-center justify-content-start'>
           
            <NavLink className="nav-link text-black fs-3 rounded" to='/'>
              Home</NavLink>
          </span>
  </li>
  
  <li class="nav-item mb-sm-2 mb-md-2 mt-sm-2 mt-md-2">
  <span className='d-flex justify-content-start'>
          
            <NavLink className="nav-link text-black fs-3 rounded" to='newOffers'>
              New Offers</NavLink>
          </span>
  </li>


  <li className='nav-item mb-sm-2 mb-md-2 mt-sm-5 mt-md-5'>
    <span className='d-flex justify-content-center align-items-center'>
      <button className='btn btn-danger mt-sm-2 mt-md-2' onClick={logOut}>Log Out</button>
    </span>
  </li>
</ul>
  </div>
  <Outlet />
</div>

  </>
 

 
  )
}

export default Navbar
