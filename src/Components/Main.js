import React from 'react';
import './Main.css';
import bannerkids from '../Assets/banner_kids.png';
import bannermen from '../Assets/banner_mens.png';
import bannerwomen from '../Assets/banner_women.png';
import product1 from '../Assets/product_1.png';
import product2 from '../Assets/product_2.png';
import product9 from '../Assets/product_9.png';
import product7 from '../Assets/product_7.png';
import OfferMens from './OfferMens';
import MenProducts from '../Assets/MenOffers';
import { useSelector,useDispatch } from 'react-redux';
import { increment,updateCartLength,addCartLength } from '../Redux/cartSlice';
import { KidsOffer } from '../Assets/KidsOffer';

function Main() {
  const cartData = useSelector((state) => state.cart.cartData);
  const searches=["Shirt","Sweaters","Blazers","Jeans","Trousers","Salwaar","TShirts","Long Tshirts","Jackets"]
  const dispatch = useDispatch();
  console.log(cartData);
  return (
    <div className='maincontainer'>
      <div className='container-fluid'>
      <div className='offerdata py-lg-2 py-md-2 py-sm-2 px-sm-3 px-md-3 px-lg-3'>

     <div className='offers pt-sm-2 pt-md-2 pt-lg-3 pt-3'>
<h1 className='offertitle text-center mb-sm-2 mb-md-2 mb-lg-2'>Latest Offers !!!</h1>
<div id="carouselExampleIndicators" className="carousel slide mycarousel mb-sm-3 mb-md-3 mb-lg-3 mb-3" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active bg-black" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='bg-black'></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='bg-black'></button>
  </div>
  <div className="carousel-inner h-100">
    <div className="carousel-item active h-100">
      <img src={bannerkids} className="d-block w-100 h-100" alt="..." />
    </div>
    <div class="carousel-item h-100">
      <img src={bannermen} className="d-block w-100 h-100" alt="..." />
    </div>
    <div class="carousel-item h-100">
      <img src={bannerwomen} className="d-block w-100 h-100" alt="..." />
    </div>
  </div>
</div>
</div>

<div className='womenOffers'>
<div className='d-flex justify-content-center align-items-center pt-3 pt-sm-3 pt-md-3 pt-lg-3'>
  <h1 className='womenofferTitle pb-2 pb-sm-2 pb-md-2 pb-lg-2 mb-5 mb-sm-5 mb-lg-5 mb-md-5'>Offers For Women</h1>
  </div>


<div className='row container-fluid mb-sm-5 mb-md-5 mb-lg-5'>
  <div className='col-sm-6 col-md-6 col-lg-3 px-4 mb-3 h-100 myrow'>
<div className='rowData w-100 bg-white h-100 rounded'>
<img src={product1} className='h-50 w-100 mb-2'></img>
<div className='detailsdata py-2 px-2'>
  <p className='clothesdetails text-center'>
    Women Special Jackets
  </p>
  <div className='mycostData d-flex justify-content-evenly align-items-center my-1'>
<p className='originalcost'>Original Cost</p>
<p className='cost fs-4'>Rs 500</p>
  </div>

  <div className='mycostData d-flex justify-content-evenly align-items-center my-1'>
<p className='originalcost'>Offered Cost:</p>
<p className='cost fs-4'>Rs 300</p>
  </div>

  <div className='d-flex justify-content-evenly align-items-center mb-1'>
    <span className='bg-success text-white align-items-center justify-content-between px-2 py-2 rounded-circle'>
      40% Off
    </span>

    <span className='star-rating'>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-regular fa-star-half-stroke text-warning"></i>
    <span>(4.6/5)</span>
    </span>
  </div>
</div>
</div>
  </div>

  <div className='col-sm-6 col-md-6 col-lg-3 px-4 mb-3 h-100 myrow'>
  <div className='rowData w-100 bg-white h-100 rounded'>
<img src={product2} className='h-50 w-100 mb-2'></img>
<div className='detailsdata py-2 px-2'>
  <p className='clothesdetails text-center'>
    Women Special Tshirts
  </p>
  <div className='mycostData d-flex justify-content-evenly align-items-center my-1'>
<p className='originalcost'>Original Cost</p>
<p className='cost fs-4'>Rs 400</p>
  </div>

  <div className='mycostData d-flex justify-content-evenly align-items-center my-1'>
<p className='originalcost'>Offered Cost:</p>
<p className='cost fs-4'>Rs 280</p>
  </div>

  <div className='d-flex justify-content-evenly align-items-center mb-1'>
    <span className='bg-success text-white align-items-center justify-content-between px-2 py-2 rounded-circle'>
      30% Off
    </span>

    <span className='star-rating'>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-regular fa-star-half-stroke text-warning"></i>
    <span>(4.5/5)</span>
    </span>
  </div>
</div>
</div>
  </div>

  <div className='col-sm-6 col-md-6 col-lg-3 px-4 mb-3 h-100 myrow'>
  <div className='rowData w-100 bg-white h-100 rounded'>
<img src={product9} className='h-50 w-100 mb-2'></img>
<div className='detailsdata py-2 px-2'>
  <p className='clothesdetails text-center'>
    Women Special Salwaar
  </p>
  <div className='mycostData d-flex justify-content-evenly align-items-center my-1'>
<p className='originalcost'>Original Cost</p>
<p className='cost fs-4'>Rs 450</p>
  </div>

  <div className='mycostData d-flex justify-content-evenly align-items-center my-1'>
<p className='originalcost'>Offered Cost:</p>
<p className='cost fs-4'>Rs 270</p>
  </div>

  <div className='d-flex justify-content-evenly align-items-center mb-1'>
    <span className='bg-success text-white align-items-center justify-content-between px-2 py-2 rounded-circle'>
      40% Off
    </span>

    <span className='star-rating'>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-regular fa-star text-warning"></i>
    <span>(4.3/5)</span>
    </span>
  </div>
</div>
</div>
  </div>
 <div className='col-sm-6 col-md-6 col-lg-3 px-4 mb-3 h-100 myrow'>
  <div className='rowData w-100 bg-white h-100 rounded'>
<img src={product7} className='h-50 w-100 mb-2'></img>
<div className='detailsdata py-2 px-2'>
  <p className='clothesdetails text-center'>
    Women Special Officewear
  </p>
  <div className='mycostData d-flex justify-content-evenly align-items-center my-1'>
<p className='originalcost'>Original Cost</p>
<p className='cost fs-4'>Rs 500</p>
  </div>

  <div className='mycostData d-flex justify-content-evenly align-items-center my-1'>
<p className='originalcost'>Offered Cost:</p>
<p className='cost fs-4'>Rs 325</p>
  </div>

  <div className='d-flex justify-content-evenly align-items-center mb-1'>
    <span className='bg-success text-white align-items-center justify-content-between px-2 py-2 rounded-circle'>
      35% Off
    </span>

    <span className='star-rating'>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-solid fa-star text-warning"></i>
    <i class="fa-solid fa-star-half-stroke text-warning"></i>
    <span>(4.7/5)</span>
    </span>
  </div>
</div>
</div>
  </div>
</div>
</div>

<div className='menOffers'>
<div className='d-flex justify-content-center align-items-center pt-3 pt-sm-3 pt-md-3 pt-lg-3'>
  <h1 className='womenofferTitle pb-2 pb-sm-2 pb-md-2 pb-lg-2 mb-5 mb-sm-5 mb-lg-5 mb-md-5'>Offers For Men</h1>
  </div>

<OfferMens data={MenProducts} />



</div>

<div className='menOffers'>
<div className='d-flex justify-content-center align-items-center pt-3 pt-sm-3 pt-md-3 pt-lg-3'>
  <h1 className='womenofferTitle pb-2 pb-sm-2 pb-md-2 pb-lg-2 mb-5 mb-sm-5 mb-lg-5 mb-md-5'>Offers For Kids</h1>
  </div>

<OfferMens data={KidsOffer} />



</div>






</div>

<div className='bottompage px-2 py-2 container-fluid'>
  <div className='row justify-content-center my-2'>
    <div className='col-md-6 px-2 py-2 col-lg-3'>
      <div className='myinfoData'>
<p className='mytitle px-2'>Online Shopping</p>
      </div>
      <ul className='mybottomlist px-2'>
        <li>Mens</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>

    </div>

    <div className='col-sm-6 col-md-4 px-2 py-2 col-lg-3'>
      <div className='myinfoData'>
<p className='mytitle px-2'>Customer Policies</p>
      </div>
      <ul className='mybottomlist px-2'>
        <li>Contact Us</li>
        <li>FAQ</li>
        <li>T&C</li>
        <li>Terms and Use</li>
        <li>Privacy Policy</li>
        <li>Greivience Offers</li>
      </ul>

    </div>

    <div className='col-sm-6 col-md-4 px-2 py-2 col-lg-3'>
      <div className='myinfoData'>
<p className='mytitle px-2'>Experience FlipKart App on Mobile</p>
      </div>
      <div className='py-2 d-flex justify-content-evenly align-items-center px-2'>
      <i class="fa-brands fa-google-play myicon"></i>
      <i class="fa-brands fa-app-store-ios myicon"></i>
      </div>

     

    </div>

    <div className='col-sm-6 col-md-4 px-2 py-2 col-lg-3'>
      <div className='myinfoData'>
<p className='mytitle px-2 text-align-center'>Follow Us On</p>
      </div>
      <div className='py-2 d-flex justify-content-evenly align-items-center px-2'>
      <i class="fa-brands fa-facebook myicon"></i>
      <i class="fa-brands fa-instagram myicon"></i>
      <i class="fa-brands fa-x-twitter myicon"></i>
      <i class="fa-brands fa-youtube myicon"></i>
      </div>

     

    </div>
  </div>

  <div className='mysearches px-2 py-2'>
    <p className='mytitle px-2 py-1'>Popular Searches</p>
{
searches.map((values,index)=>{
 
  if(index<searches.length-1)
  {
    return(
      <span className='mysearch py-2'>
         {values} |
      </span>
    )
  }
  else{
    return(
      <span className='mysearch py-2'>
       {values} 
    </span>
    )
  }
})
}
  </div>
</div>


  </div>
  
</div>
     
  )
}

export default Main;
