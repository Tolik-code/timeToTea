
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

function createMAddToCard(modalContent){
    let modal = document.createElement('div');
    let elemModal = document.createElement('div');
    document.body.prepend(modal);
    modal.classList.add('modalAddToCard');
    modal.id='modal';
    modal.innerHTML = modalContent;

    modal.prepend(elemModal);
    elemModal.classList.add('removeModal');
    elemModal.id = 'elemModal';
    elemModal.innerHTML = 'X';
    elemModal.onclick = function(){
        modalRemove();
    }
}
function modalRemove(){
   let modal = document.getElementById('modal');
   modal.remove();
}

addTG.onclick = function(){
    createMAddToCard('<h1>TG</h1>');
};
addP.onclick = function(){
    createMAddToCard('<h1>Puer</h1>');
};
addDH.onclick = function(){
    createMAddToCard('<h1>DH</h1>');
};
addGP.onclick = function(){
    createMAddToCard('<h1>Green  Puer</h1>');
};




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
