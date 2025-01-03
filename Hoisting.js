add()
sub()
function sub () {
   // console.log(x+y);cannot access 'x' before initialization
    let x = 40;
    var y = 50;
    console.log(x+y); 
}
function add() {
    console.log(a+b);
    var a = 50;
    var b = 60;
    console.log(a+b);
}