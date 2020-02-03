let obj = {};
obj.x = obj;
console.log(obj);
console.log("?");
console.log({});
let obj2 = {a:"astring", b:{},c:{},d:{d1:{}}};
console.log(obj2);
obj2.b.c = obj2.a;
console.log(obj2);
obj2.d.d1.d11 = obj2.d;
console.log(obj2);

let obj3 = {x:{y:{}}};
obj3.x.y.z = obj3.x.y;
console.log(obj3);

let obj4 = {x:{y:{}}}
let reftox = obj4.x;
let reftoy = obj4.x.y;
reftoy = reftox;
console.log(obj4);
obj4.x.y = obj4.x;
console.log(obj4); 
