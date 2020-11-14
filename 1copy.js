
let goodsBascet;

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

