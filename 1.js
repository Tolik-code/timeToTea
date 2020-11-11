
let product= document.getElementById("product");

product.onmouseout = function (event){
    let target= event.target;
    let td = event.target.closest('td');
    if(!td){return}
    td.style.boxShadow ="0 0 0px";
}
product.onmouseover = function (event){
    let target= event.target;
    let td = event.target.closest('td');
    if(!td){return}
    td.style.boxShadow ="0 0 15px";
}

function callUsContactReset(){
    callUsTelegram.style.width = "50px";
    callUsNumber.style.width = "50px";
    callUsInstagram.style.width = "50px";
   setTimeout(function(){
       callUsTelegram.style.bottom = "24px";
       callUsNumber.style.bottom = "24px";
       callUsInstagram.style.bottom = "24px"},4000);
}
function callUsContactStart(){
    callUsTelegram.style.bottom = "110px";
    callUsNumber.style.bottom = "170px";
    callUsInstagram.style.bottom = "230px";
    
}


let callUs = document.getElementById('callUs');
callUs.onmouseover = function(){callUsContactStart();
};
callUsTelegram.onmouseover = function(){callUsContactStart();
    callUsTelegram.style.width = "60px";};
callUsNumber.onmouseover = function(){callUsContactStart();
    callUsNumber.style.width = "60px";};
callUsInstagram.onmouseover = function(){callUsContactStart()
    callUsInstagram.style.width = "60px";};

callUs.onmouseout = function (){
    callUsContactReset();
};
callUsTelegram.onmouseout = function (){
    callUsContactReset();
};
callUsNumber.onmouseout = function (){
    callUsContactReset();
};
callUsInstagram.onmouseout = function (){
    callUsContactReset();
};


let addTG = document.getElementById('addTG');
let addP = document.getElementById('addP');
let addDH = document.getElementById('addDH');
let addGP = document.getElementById('addGP');


function createMAddToCard(modalContent,modalContent1){
    let modal = document.createElement('div');
    let elemRemModal = document.createElement('div');
    let elemAddModal = document.createElement('div');
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
        alert(1);
        modalRemove();
    }

    modal.prepend(elemRemModal);
    elemRemModal.classList.add('removeModal');
    elemRemModal.id = 'elemRemModal';
    elemRemModal.innerHTML = 'X';
    elemRemModal.onclick = function(){
        modalRemove();
    }
}
function modalRemove(){
   let modal = document.getElementById('modal');
   modal.remove();
}

addTG.onclick = function(){
    createMAddToCard('<div class="modalBlock"><img src="IMG_20200408_170504_807.jpg" class="imgModal"/> Пакетики по 7гр/20грн. <img src="plus_PNG19.png" class="modalButton" id="add"/> <img src="minus_PNG27.png" class="modalButton" id="minus"/> <output class="totalAdd" id="totalAddTG"></output> <output class="totalAdd" id="totalPriceTG">0</output>grn </div>');
  
  let add = document.getElementById('add');
  let minus = document.getElementById('minus');
  let totalAddTG = document.getElementById('totalAddTG');
  let totalPriceTG = document.getElementById('totalPriceTG');
  totalAddTG.value = 0;
 
  add.onclick = function(){
   totalAddTG.value = (totalAddTG.value*1)+1;
   totalPriceTG.value = totalAddTG.value*7;
 };
 minus.onclick = function(){
     if((totalAddTG.value*1)-1<0){return}
    totalAddTG.value = (totalAddTG.value*1)-1;
    totalPriceTG.value = totalAddTG.value*7;
  };
};
addP.onclick = function(){
    createMAddToCard('<div class="modalBlock"><img src="IMG_20200407_122439.jpg" class="imgModal"/> Бліни по 250гр/370грн. <img src="plus_PNG19.png" class="modalButton" id="add"/> <img src="minus_PNG27.png" id="minus" class="modalButton"/> <output class="totalAdd" id="totalAddP">0</output> <output class="totalAdd" id="totalPriceP">0</output>grn </div>','<div class="modalBlock"><img src="puer_kubiki.jpg" class="imgModal"/> Кубики 6гр/10грн <img src="plus_PNG19.png" class="modalButton" id="add1"/> <img src="minus_PNG27.png" id="minus1" class="modalButton"/> <output class="totalAdd" id="totalAddP1"></output> <output class="totalAdd" id="totalPriceP1">0</output>grn</div>');
  
  let add = document.getElementById('add');
  let minus = document.getElementById('minus');
  let totalAddP = document.getElementById('totalAddP');
  let totalPriceP = document.getElementById('totalPriceP');
  totalAddP.value = 0;
 
  add.onclick = function(){
   totalAddP.value = (totalAddP.value*1)+1;
   totalPriceP.value = totalAddP.value*370;
 };
 minus.onclick = function(){
     if((totalAddP.value*1)-1<0){return}
    totalAddP.value = (totalAddP.value*1)-1;
    totalPriceP.value = totalAddP.value*370;
  };
    
  
  let add1 = document.getElementById('add1');
  let minus1 = document.getElementById('minus1');
  let totalAddP1 = document.getElementById('totalAddP1');
  let totalPriceP1 = document.getElementById('totalPriceP1');
  totalAddP1.value = 0;
 
  add1.onclick = function(){
   totalAddP1.value = (totalAddP1.value*1)+1;
   totalPriceP1.value = totalAddP1.value*10;
 };
 minus1.onclick = function(){
     if((totalAddP1.value*1)-1<0){return}
    totalAddP1.value = (totalAddP1.value*1)-1;
    totalPriceP1.value = totalAddP1.value*10;
  };
};
addDH.onclick = function(){
    createMAddToCard('<h1>DH</h1>');
};
addGP.onclick = function(){
    createMAddToCard('<h1>Green  Puer</h1>');
};



//корзина
let itemsCart = document.getElementById('itemsCart');
itemsCart.innerHTML = "12";

let bascet = document.getElementById('bascet');
bascet.onmouseover = function (){
    bascet.style.backgroundColor = "rgba(237, 239, 183, 0.9)";
};

bascet.onmouseout = function (){
    bascet.style.backgroundColor = "rgba(237, 239, 183, 0.5)";
};
let addToCard = document.getElementsByClassName('addToCard');
