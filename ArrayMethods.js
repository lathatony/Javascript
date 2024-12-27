var arr1 = [10,20,30,40,51,33,25]

for (var i = 0; i<=arr1.length-1; i++) {
    if(arr1[i]%2==0) {
    console.log(arr1[i]);
}
}

var arr2 = [10,20,30,40]
arr2.push(50);
console.log('After push:', arr2);
arr2.unshift(5);
console.log('After unshift', arr2);

arr2.unshift(5);
console.log('After unshift',arr2);

console.log('Removed Element is:', arr2.pop());
console.log('After pop:',arr2);


console.log('Removed Element by shift:', arr2.shift());
console.log('After Shift:',arr2);

arr2 = [10,20,30,40,50,60,70]
console.log(arr2.splice(1,2,100,200,300))//[20,30]
console.log('After splice:',arr2)//After splice: [10,100,200,300,40,50,60,70]

//slice(start Index, end index -1)
arr3 = [100,200,300,400,500]
console.log(arr3.slice(1,3));

//indexOf(): Retruns index of speccific element
console.log(arr3.indexOf(200));
console.log(arr3.includes(4000));

arr4 = ['a','z','b']
arr4.sort()
console.log('After sort arr4 is:',arr4)
 console.log('After reverse:',arr4);

 //concat():,,
 let num1 = [10,20,30]
 let num2 = [40,50]
 let newarr = num1.concat(num2);
 console.log(newarr);

 //join():
 var names = ['a','p','p','l','e']
 let fruit_name = names.join("-");
 console.log(fruit_name); //a-p-p-l-e

 //array unpacking:
 let users = ['akash','ankit','punith','ayush']
 let [user1, user2] = users;
 console.log(user1)
 console.log(user2)

