
let goodsBascet;
let totalBascetItem = document.getElementById('totalBascetItem');

if(localStorage.getItem('goodsCookie')){
  let valueJsonCoocie = localStorage.getItem('goodsCookie');
  goodsBascet = JSON.parse(valueJsonCoocie);
 }else { goodsBascet = {
   TG:0,
   P:0,
   P1:0,
   DH:0,
   GP:0,
   GP1:0,
   itemsTotal:0,
 };
}

let say = document.getElementById('say');
say.value = JSON.stringify(goodsBascet);


let deliveryBranch = document.getElementById('deliveryBranch');
let expressDelivery = document.getElementById('expressDelivery');
const express = document.getElementById('express');
express.onclick = function(){
  expressDelivery.hidden = 0;
  deliveryBranch.hidden = 1;
};
branch.onclick = function(){
  expressDelivery.hidden = 1;
  deliveryBranch.hidden = 0;
};



async function postData(url = '', data = {}) {
  
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      
     
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', 
    body: new FormData(data)
  });
  

  return await response.json(); 
  
}

const form = document.getElementById('form');

const button = document.getElementById('button');
button.onclick = function() {
  
  localStorage.removeItem('goodsCookie');

  alert('Дякуємо, замовлення прийняте');
  location.href = 'https://time-to-tea.online/index.html';

  

  postData('https://ptsv2.com/t/x65x3-1607257317/post',form)
  .then((data) => {
    console.log(data); 
    
  });};

