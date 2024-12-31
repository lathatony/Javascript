var array = [10,11,12,13,14,15,16,17]
array.forEach((ele,index, arr)=>console.log(ele,index,arr));

console.log(array.filter((ele)=>ele % 2 === 0));
console.log(array.map((ele)=>ele * ele));
console.log(array.reduce((acc,ele)=>acc + ele,0));