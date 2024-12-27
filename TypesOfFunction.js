//Function Declaration: Hoisted
function greet1(name) {
    return 'Hello,${name}'
}
console.log(greet1('latha'))

//Function Expression: not Hoisted
let greet2 = function(name) {
    return'Hello,${name}'
}
console.log(greet2('Pavan'))

//Arrow function: callbacks
let greet3 = (name)=>{
    return 'Hello,${name}'
}