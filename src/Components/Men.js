import React from 'react';
import './Main.css';
import MenData from '../Assets/MenOffers';
import OfferMens from './OfferMens';
import { KidsOffer } from '../Assets/KidsOffer';
import newCollections from '../Assets/new_collections';
import { dataProduct } from '../Assets/Data';

function Men() {
  const searches=["Shirt","Sweaters","Blazers","Jeans","Trousers","Salwaar","TShirts","Long Tshirts","Jackets"]
  return (
    <div className='maincontainer'>
    <div className='container-fluid'>
    <div className='offerdata py-lg-2 py-md-2 py-sm-2 px-sm-3 px-md-3 px-lg-3'>
    <div className='d-flex justify-content-center align-items-center pt-3 pt-sm-3 pt-md-3 pt-lg-3'>
  <h1 className='womenofferTitle pb-2 pb-sm-2 pb-md-2 pb-lg-2 mb-5 mb-sm-5 mb-lg-5 mb-md-5'>New Offers For Men</h1>
  </div>

<OfferMens data={MenData} />



</div>

<div className='offerdata py-lg-2 py-md-2 py-sm-2 px-sm-3 px-md-3 px-lg-3'>
    <div className='d-flex justify-content-center align-items-center pt-3 pt-sm-3 pt-md-3 pt-lg-3'>
  <h1 className='womenofferTitle pb-2 pb-sm-2 pb-md-2 pb-lg-2 mb-5 mb-sm-5 mb-lg-5 mb-md-5'>New Offers For Kids</h1>
  </div>

<OfferMens data={KidsOffer} />



</div>

<div className='offerdata py-lg-2 py-md-2 py-sm-2 px-sm-3 px-md-3 px-lg-3'>
    <div className='d-flex justify-content-center align-items-center pt-3 pt-sm-3 pt-md-3 pt-lg-3'>
  <h1 className='womenofferTitle pb-2 pb-sm-2 pb-md-2 pb-lg-2 mb-5 mb-sm-5 mb-lg-5 mb-md-5'>New Collections</h1>
  </div>

<OfferMens data={newCollections} />



</div>

<div className='offerdata py-lg-2 py-md-2 py-sm-2 px-sm-3 px-md-3 px-lg-3'>
    <div className='d-flex justify-content-center align-items-center pt-3 pt-sm-3 pt-md-3 pt-lg-3'>
  <h1 className='womenofferTitle pb-2 pb-sm-2 pb-md-2 pb-lg-2 mb-5 mb-sm-5 mb-lg-5 mb-md-5'>Legend Collections</h1>
  </div>

<OfferMens data={dataProduct} />



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

export default Men
