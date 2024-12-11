import React from 'react'

function localfunction() {
 let localData=JSON.parse(localStorage.getItem('cartData'));
  if(!localData)
  {
    localData=[];
  }
  return localData;
}

export default localfunction
