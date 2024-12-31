//if-else
var age = 22;
if(age > 18){
    console.log('Age is Greater than 18')
}
else {
    console.log('Age is not greater than 18')
}

//switch()
let day = "Tuesday";

switch (day) {
    case "Monday":
    console.log("Start of the work week!");
    break;
    case "Tuesday":
        console.log("It's Tuesday!");
        break;
        case "Wednesday":
        console.log("It's  Wednesday!");
        break;
        case "Thursday":
        console.log("It's Thursday!");
        break;
        default:
            console.log("Just another day.");
}

//for loop
for (var i =0; i<=10; i++) {
    console.log(i);
}

//while loop 
let count = 1;
while(count<=5) {
    console.log("Count is:", count);
    count++;
}

//d0-while loop
let number = 1;

do{
    console.log("Number:", number);
    number++;
} while (number<=3);


//for of loop
var arr = [1,2,3,4,5]
for (var i of arr){
    console.log(i);
}


//for in loop: return the index of each item
var arr1 = ['latha','pavan','jaya','madhav']
for(var i in arr){
    console.log(i);
}


//forEach()
var arr3 = [10,20,30,40];
arr3.forEach((ele,index,complete_array) => {
console.log(ele,index,complete_array);
})


//break;
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log(i);
        break;
    }
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      
         continue;
    }
    console.log(i);
}

//