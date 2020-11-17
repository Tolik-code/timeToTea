
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


function recordGoodsCookie(){
  localStorage.setItem('goodsCookie',JSON.stringify(goodsBascet));
}
console.log(goodsBascet);



function goodsPayment(name, totalAdd, totalPrice, totalWeight, price, weight, x){
  
  add.onclick = function(){
    totalAdd.value = (totalAdd.value*1)+x;
    totalPrice.value = totalAdd.value*price;
    totalWeight.value = totalAdd.value*weight;
    goodsBascet[name] = totalAdd.value;
    goodsBascet.itemsTotal += 1; 
    
    recordGoodsCookie();
  };
  minus.onclick = function(){
      if((totalAdd.value*1)-x<0){return}
      totalAdd.value = (totalAdd.value*1)-x;
      totalPrice.value = totalAdd.value*price;
      totalWeight.value = totalAdd.value*weight;
      goodsBascet[name] = totalAdd.value;
      goodsBascet.itemsTotal -= 1; 
      
      recordGoodsCookie();
   };
}



function deleteGoodsOn(product){
  if(product == 'DH'){goodsBascet.itemsTotal = goodsBascet.itemsTotal - goodsBascet[product]/10;}
  else {goodsBascet.itemsTotal -= goodsBascet[product];}
    goodsBascet[product] = 0;
    console.log(goodsBascet);
    recordGoodsCookie();
}

let add;
let minus;

function createProductBascet (productName){
let element = document.createElement('div');
totalBascetItem.prepend(element);
element.classList.add('totalBascetGoods');



if(productName == 'TG'){
  element.innerHTML = '<div id="productTG"> <div class="goodsDeleteOn" id="deleteTG">X</div><img src="IMG_20200408_170504_807.jpg" class="imgBasketTotal"/> Ті гуань інь. Пакетики по 7грам/20грн. <img src="plus_PNG19.png" class="bascetButton" id="add"/> <img src="minus_PNG27.png" class="bascetButton" id="minus"/> <output class="totalAdd" id="totalAddTG">0</output>шт <output class="totalAdd" id="totalPriceTG">0</output>grn <output class="totalAdd" id="totalWeightTG">0</output>грам </div>';
  let totalAddTG = document.getElementById('totalAddTG');
  let totalPriceTG = document.getElementById('totalPriceTG');
  let totalWeightTG = document.getElementById('totalWeightTG');

   totalAddTG.value = goodsBascet.TG;
   totalPriceTG.value = goodsBascet.TG*20;
   totalWeightTG.value = goodsBascet.TG*7;

  let deleteTG = document.getElementById('deleteTG');

  deleteTG.onclick = function(){
    element.remove();
    deleteGoodsOn('TG');
  };

   add = document.getElementById('add');
   minus = document.getElementById('minus');
  goodsPayment('TG', totalAddTG, totalPriceTG, totalWeightTG, 20, 7, 1);
}
if(productName == 'P'){
  element.innerHTML = '<div id="productTG"> <div class="goodsDeleteOn" id="deleteP">X</div> <img src="IMG_20200407_122439.jpg" class="imgBasketTotal"/> Шу пуер. Бліни по 250грам/370грн. <img src="plus_PNG19.png" class="bascetButton" id="add1"/> <img src="minus_PNG27.png" class="bascetButton" id="minus1"/> <output class="totalAdd" id="totalAddP">0</output>шт <output class="totalAdd" id="totalPriceP">0</output>grn <output class="totalAdd" id="totalWeightP">0</output>грам </div>';
  let totalAddP = document.getElementById('totalAddP');
  let totalPriceP = document.getElementById('totalPriceP');
  let totalWeightP = document.getElementById('totalWeightP');

  totalAddP.value = goodsBascet.P;
   totalPriceP.value = goodsBascet.P*370;
   totalWeightP.value = goodsBascet.P*250;

  let deleteP = document.getElementById('deleteP');

  deleteP.onclick = function(){
    element.remove();
    deleteGoodsOn('P');
  };

   add = document.getElementById('add1');
   minus = document.getElementById('minus1');
  goodsPayment('P',totalAddP, totalPriceP, totalWeightP, 370, 250, 1);
}
if(productName == 'P1'){
  element.innerHTML = '<div id="productTG"> <div class="goodsDeleteOn" id="deleteP1">X</div> <img src="puer_kubiki.jpg" class="imgBasketTotal"/> Шу пуер. Кубики 6грам/10грн. <img src="plus_PNG19.png" class="bascetButton" id="add2"/> <img src="minus_PNG27.png" class="bascetButton" id="minus2"/> <output class="totalAdd" id="totalAddP1">0</output>шт <output class="totalAdd" id="totalPriceP1">0</output>grn <output class="totalAdd" id="totalWeightP1">0</output>грам </div>';
  let totalAddP1 = document.getElementById('totalAddP1');
  let totalPriceP1 = document.getElementById('totalPriceP1');
  let totalWeightP1 = document.getElementById('totalWeightP1');

  totalAddP1.value = goodsBascet.P1*1;
   totalPriceP1.value = goodsBascet.P1*10;
   totalWeightP1.value = goodsBascet.P1*6;

  let deleteP1 = document.getElementById('deleteP1');

  deleteP1.onclick = function(){
    element.remove();
    deleteGoodsOn('P1');
  };

   add = document.getElementById('add2');
   minus = document.getElementById('minus2');
  goodsPayment('P1',totalAddP1, totalPriceP1, totalWeightP1, 10, 6, 1);
}
if(productName == 'DH'){
  element.innerHTML = '<div id="productTG"> <div class="goodsDeleteOn" id="deleteDH">X</div> <img src="IMG_20200408_161445_985.jpg" class="imgBasketTotal"/> Да хун пао класичний, на вагу 10грам/20грн. <img src="plus_PNG19.png" class="bascetButton" id="add3"/> <img src="minus_PNG27.png" class="bascetButton" id="minus3"/> <output class="totalAdd" id="totalAddDH">0</output>грам  <output class="totalAdd" id="totalPriceDH">0</output>grn </div>';
let totalAddDH = document.getElementById('totalAddDH');
let totalPriceDH = document.getElementById('totalPriceDH');

   totalAddDH.value = goodsBascet.DH;
   totalPriceDH.value = goodsBascet.DH*2;
   

let deleteDH = document.getElementById('deleteDH');

  deleteDH.onclick = function(){
    element.remove();
    deleteGoodsOn('DH');
  };

 add = document.getElementById('add3');
 minus = document.getElementById('minus3');
goodsPayment('DH',totalAddDH, totalPriceDH, 0, 2, 0, 10);}
if(productName == 'GP'){
  element.innerHTML = '<div id="productTG"> <div class="goodsDeleteOn" id="deleteGP">X</div> <img src="IMG_20200414_133240.jpg" class="imgBasketTotal"/>Шен (зелений) пуер. Кульки 7грам/26грн <img src="plus_PNG19.png" class="bascetButton" id="add4"/> <img src="minus_PNG27.png" class="bascetButton" id="minus4"/> <output class="totalAdd" id="totalAddGP">0</output>шт <output class="totalAdd" id="totalPriceGP">0</output>grn <output class="totalAdd" id="totalWeightGP">0</output>грам </div>';
  let totalAddGP = document.getElementById('totalAddGP');
  let totalPriceGP = document.getElementById('totalPriceGP');
  let totalWeightGP = document.getElementById('totalWeightGP');

  totalAddGP.value = goodsBascet.GP;
   totalPriceGP.value = goodsBascet.GP*26;
   totalWeightGP.value = goodsBascet.GP*7;

  let deleteGP = document.getElementById('deleteGP');

  deleteGP.onclick = function(){
    element.remove();
    deleteGoodsOn('GP');
  };

   add = document.getElementById('add4');
   minus = document.getElementById('minus4');
  goodsPayment('GP',totalAddGP, totalPriceGP, totalWeightGP, 26, 7, 1);
}
if(productName == 'GP1'){
  element.innerHTML = '<div id="productTG"> <div class="goodsDeleteOn" id="deleteGP1">X</div> <img src="IMG_20200427_181329_418.jpg" class="imgBasketTotal"/> Шен (зелений) пуер. Бліни по 350грам/690грн. <img src="plus_PNG19.png" class="bascetButton" id="add5"/> <img src="minus_PNG27.png" class="bascetButton" id="minus5"/> <output class="totalAdd" id="totalAddGP1">0</output>шт <output class="totalAdd" id="totalPriceGP1">0</output>grn <output class="totalAdd" id="totalWeightGP1">0</output>грам </div>';
  let totalAddGP1 = document.getElementById('totalAddGP1');
  let totalPriceGP1 = document.getElementById('totalPriceGP1');
  let totalWeightGP1 = document.getElementById('totalWeightGP1');

  totalAddGP1.value = goodsBascet.GP1;
   totalPriceGP1.value = goodsBascet.GP1*690;
   totalWeightGP1.value = goodsBascet.GP1*350;

  let deleteGP1 = document.getElementById('deleteGP1');

  deleteGP1.onclick = function(){
    element.remove();
    deleteGoodsOn('GP1');
  };

   add = document.getElementById('add5');
   minus = document.getElementById('minus5');
  goodsPayment('GP1',totalAddGP1, totalPriceGP1, totalWeightGP1, 690, 357, 1);
}

  
}

for( let key in goodsBascet){
  if(goodsBascet[key]>0){if(key == 'itemsTotal'){break;}createProductBascet(key);}
}