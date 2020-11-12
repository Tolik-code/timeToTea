
let product= document.getElementById("product");

product.onmouseout = function (event){
    let target= event.target;
    let td = event.target.closest('td');
    if(!td){return}
    td.style.boxShadow ="0 0 0px";
};
product.onmouseover = function (event){
    let target= event.target;
    let td = event.target.closest('td');
    if(!td){return}
    td.style.boxShadow ="0 0 15px";
};


let itemsCart = document.getElementById('itemsCart');
let items, items1;
function addItemsCard(){
    if(document.getElementById('totalAddDH')){items.value /= 10;}
  if(document.getElementById('totalAddP')||document.getElementById('totalAddGP')){
      itemsCart.value = (itemsCart.value*1) + (items.value*1) + (items1.value*1);
    }
  else if(items.value>0){
    itemsCart.value = (itemsCart.value*1) + (items.value*1);
  } else {return;}
}

let addTG = document.getElementById('addTG');
let addP = document.getElementById('addP');
let addDH = document.getElementById('addDH');
let addGP = document.getElementById('addGP');
let elemAddModal;


function createMAddToCard(modalContent,modalContent1){
    let modal = document.createElement('div');
    let elemRemModal = document.createElement('div');
    elemAddModal = document.createElement('div');
    document.body.prepend(modal);
    modal.classList.add('modalAddToCard');
    modal.id='modal';
    if(modalContent1!=undefined){
        modal.innerHTML = modalContent + modalContent1;
    } else{modal.innerHTML = modalContent;}

    modal.prepend(elemAddModal);
    elemAddModal.id = 'elemAddModal';
    elemAddModal.innerHTML = '<div><img src="icons8-корзина-50.png" class="imgFloat"/>добавить</div>';
    elemAddModal.onclick = function(){
        addItemsCard();
        modalRemove();
    };

    modal.prepend(elemRemModal);
    elemRemModal.classList.add('removeModal');
    elemRemModal.id = 'elemRemModal';
    elemRemModal.innerHTML = 'X';
    elemRemModal.onclick = function(){
        modalRemove();
    };
}


function modalRemove(){
   let modal = document.getElementById('modal');
   modal.remove();
}

addTG.onclick = function(){
    createMAddToCard('<div class="modalBlock"><img src="IMG_20200408_170504_807.jpg" class="imgModal"/> Ті гуань інь. Пакетики по 7грам/20грн. <img src="plus_PNG19.png" class="modalButton" id="add"/> <img src="minus_PNG27.png" class="modalButton" id="minus"/> <output class="totalAdd" id="totalAddTG"></output>шт <output class="totalAdd" id="totalPriceTG">0</output>grn <output class="totalAdd" id="totalWeightTG">0</output>грам </div>');
  
  let add = document.getElementById('add');
  let minus = document.getElementById('minus');
  let totalAddTG = document.getElementById('totalAddTG');
  let totalPriceTG = document.getElementById('totalPriceTG');
  let totalWeightTG = document.getElementById('totalWeightTG');
  totalAddTG.value = 0;
  items = totalAddTG;
  add.onclick = function(){
   totalAddTG.value = (totalAddTG.value*1)+1;
   totalPriceTG.value = totalAddTG.value*20;
   totalWeightTG.value = totalAddTG.value*7;
 };
 minus.onclick = function(){
     if((totalAddTG.value*1)-1<0){return}
    totalAddTG.value = (totalAddTG.value*1)-1;
    totalPriceTG.value = totalAddTG.value*20;
    totalWeightTG.value = totalAddTG.value*7;
  };
};
addP.onclick = function(){
    createMAddToCard('<div class="modalBlock"><img src="IMG_20200407_122439.jpg" class="imgModal"/> Шу пуер. Бліни по 250грам/370грн. <img src="plus_PNG19.png" class="modalButton" id="add"/> <img src="minus_PNG27.png" id="minus" class="modalButton"/> <output class="totalAdd" id="totalAddP">0</output>шт <output class="totalAdd" id="totalPriceP">0</output>grn <output class="totalAdd" id="totalWeightP">0</output>грам </div>','<div class="modalBlock"><img src="puer_kubiki.jpg" class="imgModal"/> Кубики 6грам/10грн <img src="plus_PNG19.png" class="modalButton" id="add1"/> <img src="minus_PNG27.png" id="minus1" class="modalButton"/> <output class="totalAdd" id="totalAddP1"></output>шт <output class="totalAdd" id="totalPriceP1">0</output>grn <output class="totalAdd" id="totalWeightP1">0</output>грам</div>');
  
  let add = document.getElementById('add');
  let minus = document.getElementById('minus');
  let totalAddP = document.getElementById('totalAddP');
  let totalPriceP = document.getElementById('totalPriceP');
  let totalWeightP = document.getElementById('totalWeightP');
  totalAddP.value = 0;
  items = totalAddP;

  add.onclick = function(){
   totalAddP.value = (totalAddP.value*1)+1;
   totalPriceP.value = totalAddP.value*370;
   totalWeightP.value = totalAddP.value*250;
 };
 minus.onclick = function(){
     if((totalAddP.value*1)-1<0){return}
    totalAddP.value = (totalAddP.value*1)-1;
    totalPriceP.value = totalAddP.value*370;
    totalWeightP.value = totalAddP.value*250;
  };
    
  
  let add1 = document.getElementById('add1');
  let minus1 = document.getElementById('minus1');
  let totalAddP1 = document.getElementById('totalAddP1');
  let totalPriceP1 = document.getElementById('totalPriceP1');
  let totalWeightP1 = document.getElementById('totalWeightP1');
  totalAddP1.value = 0;
  items1 = totalAddP1;

  add1.onclick = function(){
   totalAddP1.value = (totalAddP1.value*1)+1;
   totalPriceP1.value = totalAddP1.value*10;
   totalWeightP1.value = totalAddP1.value*6;
 };
 minus1.onclick = function(){
     if((totalAddP1.value*1)-1<0){return}
    totalAddP1.value = (totalAddP1.value*1)-1;
    totalPriceP1.value = totalAddP1.value*10;
    totalWeightP1.value = totalAddP1.value*6;
  };
};

addDH.onclick = function(){
    createMAddToCard('<div class="modalBlock"><img src="IMG_20200408_161445_985.jpg" class="imgModal"/> Да хун пао класичний, на вагу 10грам/20грн <img src="plus_PNG19.png" class="modalButton" id="add"/> <img src="minus_PNG27.png" class="modalButton" id="minus"/> <output class="totalAdd" id="totalAddDH"></output>грам <output class="totalAdd" id="totalPriceDH">0</output>grn  </div>');
  
    let add = document.getElementById('add');
    let minus = document.getElementById('minus');
    let totalAddDH = document.getElementById('totalAddDH');
    let totalPriceDH = document.getElementById('totalPriceDH');
    totalAddDH.value = 0;
    items = totalAddDH;
    

    add.onclick = function(){
     totalAddDH.value = (totalAddDH.value*1)+10;
     totalPriceDH.value = totalAddDH.value*2;
   };
   minus.onclick = function(){
       if((totalAddDH.value*1)-10<0){return}
      totalAddDH.value = (totalAddDH.value*1)-10;
      totalPriceDH.value = totalAddDH.value*2;
    };
};

addGP.onclick = function(){
    createMAddToCard('<div class="modalBlock"><img src="IMG_20200414_133240.jpg" class="imgModal"/>Шен (зелений) пуер. Кульки 7грам/26грн <img src="plus_PNG19.png" class="modalButton" id="add"/> <img src="minus_PNG27.png" id="minus" class="modalButton"/> <output class="totalAdd" id="totalAddGP">0</output>шт <output class="totalAdd" id="totalPriceGP">0</output>grn <output class="totalAdd" id="totalWeightGP">0</output>грам</div>','<div class="modalBlock"><img src="IMG_20200427_181329_418.jpg" class="imgModal"/> Шен (зелений) пуер. Бліни по 350грам/690грн<img src="plus_PNG19.png" class="modalButton" id="add1"/> <img src="minus_PNG27.png" id="minus1" class="modalButton"/> <output class="totalAdd" id="totalAddGP1"></output>шт <output class="totalAdd" id="totalPriceGP1">0</output>grn <output class="totalAdd" id="totalWeightGP1">0</output>грам</div>');
  
    let add = document.getElementById('add');
    let minus = document.getElementById('minus');
    let totalAddGP = document.getElementById('totalAddGP');
    let totalPriceGP = document.getElementById('totalPriceGP');
    let totalWeightGP = document.getElementById('totalWeightGP');
    totalAddGP.value = 0;
    items = totalAddGP;
   
    add.onclick = function(){
     totalAddGP.value = (totalAddGP.value*1)+1;
     totalPriceGP.value = totalAddGP.value*26;
     totalWeightGP.value = totalAddGP.value*7;
   };
   minus.onclick = function(){
       if((totalAddGP.value*1)-1<0){return}
      totalAddGP.value = (totalAddGP.value*1)-1;
      totalPriceGP.value = totalAddGP.value*26;
      totalWeightGP.value = totalAddGP.value*7;
    };
      
    
    let add1 = document.getElementById('add1');
    let minus1 = document.getElementById('minus1');
    let totalAddGP1 = document.getElementById('totalAddGP1');
    let totalPriceGP1 = document.getElementById('totalPriceGP1');
    let totalWeightGP1 = document.getElementById('totalWeightGP1');
    totalAddGP1.value = 0;
    items1 = totalAddGP1;
   
    add1.onclick = function(){
     totalAddGP1.value = (totalAddGP1.value*1)+1;
     totalPriceGP1.value = totalAddGP1.value*690;
     totalWeightGP1.value = totalAddGP1.value*357;
   };
   minus1.onclick = function(){
       if((totalAddGP1.value*1)-1<0){return}
      totalAddGP1.value = (totalAddGP1.value*1)-1;
      totalPriceGP1.value = totalAddGP1.value*690;
      totalWeightGP1.value = totalAddGP1.value*357;
    };
  };




//корзина


let bascet = document.getElementById('bascet');
bascet.onmouseover = function (){
    bascet.style.backgroundColor = "rgba(237, 239, 183, 0.9)";
};

bascet.onmouseout = function (){
    bascet.style.backgroundColor = "rgba(237, 239, 183, 0.5)";
};
let addToCard = document.getElementsByClassName('addToCard');
