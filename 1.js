
let product= document.getElementById("product");

product.onmouseout = function (event){
    let target= event.target;
    let td = event.target.closest('div');
    if(!td){return}
    td.style.boxShadow ="0 0 0px";
};
product.onmouseover = function (event){
    let target= event.target;
    let td = event.target.closest('div');
    if(!td){return}
    td.style.boxShadow ="0 0 15px";
};
let goodsBascet;
let items, items1;
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


itemsCart = document.getElementById('itemsCart');
itemsCart.value = goodsBascet.itemsTotal;
let Item, Item1;
function recordGoods(){
    let totalAdd = document.getElementById('totalAdd');
    let totalAdd1 = document.getElementById('totalAdd1');
    goodsBascet[Item] += +totalAdd.value;
    if(Item1){goodsBascet[Item1] += +totalAdd1.value;}
    console.log(totalAdd1,totalAdd);
  }



function recordGoodsCookie(){
  localStorage.setItem('goodsCookie',JSON.stringify(goodsBascet));
}

function addItemsCard(){
  if(Item1){goodsBascet.itemsTotal = (goodsBascet.itemsTotal*1) + (items.value*1) + (items1.value*1);}
   else goodsBascet.itemsTotal = (goodsBascet.itemsTotal*1) + (items.value*1);
}


let addTG = document.getElementById('addTG');
let addP = document.getElementById('addP');
let addDH = document.getElementById('addDH');
let addGP = document.getElementById('addGP');
let elemAddModal;

console.log(localStorage.getItem('goodsCookie'));
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
        recordGoods();
        addItemsCard();
        modalRemove();
        recordGoodsCookie();
        itemsCart.value = goodsBascet.itemsTotal;
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
   document.body.style.overflow = '';
   window.onclick = ()=>{};
}

function crtModal(html,price,weight, Itm, Itm1 = false, price1,weight1){
    createMAddToCard(html);
        document.body.style.overflow = 'hidden';
window.onclick = (e)=>{if(!e.target.closest('.modalAddToCard') && !e.target.closest('.addToCard')){modalRemove(); }};
  let add = document.getElementById('add');
  let minus = document.getElementById('minus');
  let totalAdd = document.getElementById('totalAdd');
  let totalPrice = document.getElementById('totalPrice');
  let totalWeight = document.getElementById('totalWeight');
  totalAdd.value = 0;
  items = totalAdd;

Item = Itm;
Item1 = Itm1;



function addItms(Add, Tp, Tw, Fprice, Fweight){
   Add.value = (Add.value*1)+1;
   Tp.value = Add.value*Fprice;
   Tw.value = Add.value*Fweight;
 }
 function minusItms(Add, Tp, Tw, Fprice, Fweight){
  if((Add.value*1)-1<0){return}
    Add.value = (Add.value*1)-1;
    Tp.value = Add.value*Fprice;
    Tw.value = Add.value*Fweight;
}
 add.onclick = ()=> addItms(totalAdd, totalPrice, totalWeight, price, weight);

 minus.onclick = ()=> minusItms(totalAdd, totalPrice, totalWeight, price, weight);


 let add1 = document.getElementById('add1');
 let minus1 = document.getElementById('minus1');
 let totalAdd1 = document.getElementById('totalAdd1');
 let totalPrice1 = document.getElementById('totalPrice1');
 let totalWeight1 = document.getElementById('totalWeight1');
 totalAdd1.value = 0;
 items1 = totalAdd1;

 add1.onclick = ()=> addItms(totalAdd1, totalPrice1, totalWeight1, price1, weight1);

 minus1.onclick = ()=> minusItms(totalAdd1, totalPrice1, totalWeight1, price1, weight1);


}

addTG.onclick = ()=> crtModal('<div class="modalBlock"><img src="IMG_20200408_170504_807.jpg" class="imgModal"/> Ті гуань інь. Пакетики по 7грам/20грн. <img src="plus_PNG19.png" class="modalButton" id="add"/> <img src="minus_PNG27.png" class="modalButton" id="minus"/> <output class="totalAdd" id="totalAdd"></output>шт <output class="totalAdd" id="totalPrice">0</output>grn <output class="totalAdd" id="totalWeight">0</output>грам </div>',20,7, 'TG');

addP.onclick = ()=> crtModal('<div class="modalBlock"><img src="IMG_20200407_122439.jpg" class="imgModal"/> Шу пуер. Бліни по 250грам/370грн. <img src="plus_PNG19.png" class="modalButton" id="add"/> <img src="minus_PNG27.png" id="minus" class="modalButton"/> <output class="totalAdd" id="totalAdd">0</output>шт <output class="totalAdd" id="totalPrice">0</output>grn <output class="totalAdd" id="totalWeight">0</output>грам </div> <div class="modalBlock"><img src="puer_kubiki.jpg" class="imgModal"/> Кубики 6грам/10грн <img src="plus_PNG19.png" class="modalButton" id="add1"/> <img src="minus_PNG27.png" id="minus1" class="modalButton"/> <output class="totalAdd" id="totalAdd1"></output>шт <output class="totalAdd" id="totalPrice1">0</output>grn <output class="totalAdd" id="totalWeight1">0</output>грам</div>', 370, 250,'P','P1', 10, 6);

addDH.onclick =()=> crtModal('<div class="modalBlock"><img src="IMG_20200408_161445_985.jpg" class="imgModal"/> Да хун пао класичний, на вагу 10грам/20грн <img src="plus_PNG19.png" class="modalButton" id="add"/> <img src="minus_PNG27.png" class="modalButton" id="minus"/> <output class="totalAdd" id="totalAdd">0</output>шт <output class="totalAdd" id="totalPrice">0</output>grn  <output class="totalAdd" id="totalWeight">0</output>грам </div>',10,20, 'DH');

addGP.onclick = ()=> crtModal('<div class="modalBlock"><img src="IMG_20200414_133240.jpg" class="imgModal"/>Шен (зелений) пуер. Кульки 7грам/26грн <img src="plus_PNG19.png" class="modalButton" id="add"/> <img src="minus_PNG27.png" id="minus" class="modalButton"/> <output class="totalAdd" id="totalAdd">0</output>шт <output class="totalAdd" id="totalPrice">0</output>grn <output class="totalAdd" id="totalWeight">0</output>грам</div> <div class="modalBlock"><img src="IMG_20200427_181329_418.jpg" class="imgModal"/> Шен (зелений) пуер. Бліни по 350грам/690грн<img src="plus_PNG19.png" class="modalButton" id="add1"/> <img src="minus_PNG27.png" id="minus1" class="modalButton"/> <output class="totalAdd" id="totalAdd1"></output>шт <output class="totalAdd" id="totalPrice1">0</output>grn <output class="totalAdd" id="totalWeight1">0</output>грам</div>', 26,7, 'GP', 'GP1',690,357);





//корзина


let bascet = document.getElementById('bascet');
bascet.onmouseover = function (){
    bascet.style.backgroundColor = "rgba(237, 239, 183, 0.9)";
};

bascet.onmouseout = function (){
    bascet.style.backgroundColor = "rgba(237, 239, 183, 0.5)";
};
let addToCard = document.getElementsByClassName('addToCard');
