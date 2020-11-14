
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

console.log(goodsBascet);

function goodsPayment(totalAdd, totalPrice, totalWeight, price, weight){
  
  add.onclick = function(){
    totalAdd.value = (totalAdd.value*1)+1;
    totalPrice.value = totalAdd.value*price;
    totalWeight.value = totalAdd.value*weight;
  };
  minus.onclick = function(){
      if((totalAdd.value*1)-1<0){return}
      totalAdd.value = (totalAdd.value*1)-1;
      totalPrice.value = totalAdd.value*price;
      totalWeight.value = totalAdd.value*weight;
   };
}

let add;
let minus;

function createProductBascet (productName){
let element = document.createElement('div');
totalBascetItem.prepend(element);
element.classList.add('totalBascetGoods');


if(productName == 'TG'){element.innerHTML = '<div> <img src="IMG_20200408_170504_807.jpg" class="imgBasketTotal"/> Ті гуань інь. Пакетики по 7грам/20грн. <img src="plus_PNG19.png" class="bascetButton" id="add"/> <img src="minus_PNG27.png" class="bascetButton" id="minus"/> <output class="totalAdd" id="totalAddTG">0</output>шт <output class="totalAdd" id="totalPriceTG">0</output>grn <output class="totalAdd" id="totalWeightTG">0</output>грам </div>';
  let totalAddTG = document.getElementById('totalAddTG');
  let totalPriceTG = document.getElementById('totalPriceTG');
  let totalWeightTG = document.getElementById('totalWeightTG');
   add = document.getElementById('add');
   minus = document.getElementById('minus');
  goodsPayment(totalAddTG, totalPriceTG, totalWeightTG, 20, 7);
}
if(productName == 'P'){
  element.innerHTML = '<div> <img src="IMG_20200408_170504_807.jpg" class="imgBasketTotal"/> Ті гуань інь. Пакетики по 7грам/20грн. <img src="plus_PNG19.png" class="bascetButton" id="add1"/> <img src="minus_PNG27.png" class="bascetButton" id="minus1"/> <output class="totalAdd" id="totalAddP">0</output>шт <output class="totalAdd" id="totalPriceP">0</output>grn <output class="totalAdd" id="totalWeightP">0</output>грам </div>';
  let totalAddP = document.getElementById('totalAddP');
  let totalPriceP = document.getElementById('totalPriceP');
  let totalWeightP = document.getElementById('totalWeightP');
   add = document.getElementById('add1');
   minus = document.getElementById('minus1');
  goodsPayment(totalAddP, totalPriceP, totalWeightP, 10, 5);

}
if(productName == 'P1'){}
if(productName == 'DH'){}
if(productName == 'GP'){}
if(productName == 'GP1'){}

  
}

for( let key in goodsBascet){
  if(goodsBascet[key]>0){createProductBascet(key); console.log(1);}console.log(goodsBascet[key])
}