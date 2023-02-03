function add(){

}

function subtract(){

}

function multiply(){

}

function divide(){

}

function add(a,b){
    return a+b;
}
const sonuc = add(2,3);
console.log(sonuc);

function subtract(a,b){
    return a-b;
}
const r1 = subtract(5,6);
console.log(r1);

function multiply(a,b){
    return a*b;
}
const r2 = multiply(1,3);
console.log(r2);

function divide(a,b){
    return a/b;
}
const r3 = divide(13,3);
console.log(r3);

function increment(n){
    return ++n;
}
const r4 = increment(152);
console.log(r4);

function decrement(n){
    return --n;
}
const r5 = decrement(4);
console.log (r5);

function makeInt(x,y){
    return x,y;
}
const r6= makeInt("n",10);
console.log (r6);

function makeInt(n){
    return n;
}
const r7= makeInt("10");
console.log(r7);

function preserveDecimal(x){
    return x;
}
const r8= preserveDecimal("n");
console.log (r8);

function preserveDecimal(n){
    return parseFloat(n);
}
const r9= preserveDecimal('3.123');
console.log (r9);

function makeInt(n){
    return parseInt(n,10);
}