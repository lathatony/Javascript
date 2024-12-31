// Input: Array elements
const array = [1,2,3,4,5,6,7,8,9]; // Example array

// Filter and print even numbers
const evenNumbers = array.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);
 
 for (var i=0;i<=array.length; i++) {
    if(array[i]%2==0) {
        console.log(array[i]);
    }
 }

// Filter and print odd numbers
const oddNumbers = array.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

for (var i=0;i<=array.length; i++) {
    if(array[i]%2!==0) {
        console.log(array[i]);
    }
 }

// Calculate the sum
const sum = array.reduce((total, num) => total + num, 0);
console.log("Sum of all elements:", sum);



// Calculate the product
const product = array.reduce((total, num) => total * num, 1);
console.log("Product of all elements:", product);


 
// Add +5 to each element
const updatedArray = array.map(num => num + 5);
console.log("Updated array:", updatedArray);


 
// Calculate the square of each element
const squaredArray = array.map(num => num ** 2);
console.log("Squared array:", squaredArray);
