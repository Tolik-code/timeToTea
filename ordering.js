
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
for(let key in goodsBascet){
  if(goodsBascet[key]>0){say.value+=goodsBascet[key]+key+'__';}
}
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


// const formData = new FormData();
// formData.append('qwqwqw','qwert');
// let xhr = new XMLHttpRequest();
//   xhr.open("POST", "http://localhost:3000/");
//   xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//   xhr.send(formData);
//   xhr.onload = function () { alert(xhr.response); };