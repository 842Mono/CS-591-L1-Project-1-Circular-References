let obj = {};
obj.x = obj; //error
console.log(obj);
console.log("?");

let obj2 = {a:"astring", b:{},c:{},d:{d1:{}}};
console.log(obj2);
obj2.b.c = obj2.a;
console.log(obj2);
obj2.d.d1.d11 = obj2.d; //error
console.log(obj2);

let obj3 = {x:{y:{}}};
obj3.x.y.z = obj3.x.y; //error
console.log(obj3);

let obj4 = {x:{y:{}}}
let reftox = obj4.x;
let reftoy = obj4.x.y;
reftoy = reftox;
console.log(obj4);
obj4.x.y = obj4.x; //error
console.log(obj4); 

obj5 = {}

obj5 = obj5