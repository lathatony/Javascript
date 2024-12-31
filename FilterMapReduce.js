var arr1 = [1,2,3,4,5,6,7,8,9]
var newArr = arr1.filter(function(ele) {
if(ele%2===0) {
    return ele;
}
})
console.log('Original Array:',arr1);
console.log('Even array:', newArr);

var years = [1996,2000,1997,1994,1900,1800,1700]
var newYear = years.filter(function(ele) {
    if(ele%4===0 && ele%100!==0 || ele%400===0) {
        return ele;
    }
})
console.log('leap year:', newYear);

var array = [1,2,3,4,5,6,7,8,9]
var squarr = array.map(function(ele){
    return ele * ele;
})
console.log('Original Array:', array);
console.log('Square Array:', squarr);

//call back Function
//reduce function(acc,ele){code})

var arr = [1,2,3,4,5,6]
var sum = arr.reduce(function(acc,ele){
    return ele + acc;
},0);
console.log('Sum is:', sum);

var product=arr.reduce((acc,ele)=> acc * ele,1)
var sum = arr.reduce((acc,ele)=>acc+ele,0);
console.log('Sum is:', sum)
console.log('Product is:', product)