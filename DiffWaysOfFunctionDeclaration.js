//function declaration 
function add(a,b) {
    console.log(a+b);
}
add(100,200);

//function expression
const sub = function(a,b){
    console.log(a-b)
}
sub(20,10);

//arrow Function
const mul = (a,b)=> console.log(a * b)
mul(10,4)
const msg = ()=> "Hello World";
let res = msg();
console.log(res);