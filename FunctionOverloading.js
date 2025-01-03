//it is the process of decalraing functions with same name but different parameters.

add(10,20);//NaN -> (Not a Number)
add(10,20,30);//NaN
add(10,20,30,40);//100

function add(a,b) {
    console.log(a+b);
}

function add(a,b,c) {
    console.log(a+b+c)
}

function add(a,b,c,d){
    console.log(a+b+c+d)
}

//in js when we declare multiple functions with same name but diff no.of parameters then only last declared function can be invoked and all other previous function declarations become useless.
//js do not support function overloading because when we try to declared multiple functions with same name but different no.of parameters then only last declared function can be accessed and all other previous functions will become useless.
