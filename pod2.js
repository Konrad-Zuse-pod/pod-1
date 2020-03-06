/1. Ex: function should check if nums exist in num?

// function doesExist(nums, num){
//     for (var i = 0; i < nums.length; i++){
//         if(num === nums[i]){//nums[i] is every element in the array!
//         console.log(nums[i]);
//         }
//     }
// }
// doesExist([1, 3, 5, 7], 2);// should be false because 2 is not in the array
// doesExist([1, 3, 5, 7], 1);// should return true because 1 does exist inside the array!

//2. Array manipulation

// var dogs = [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 7
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 4
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 10
//     }
// ];

// dogs.forEach(function(dog) {
//     console.log(dog.breed + " " + dog.age)
// dogs.forEach(function (dog) {
// console.log(dog.age + 1);
// });

//3 Conditionals
//JOB AT City of San Antonio
//Job requirements : over 18 or high school degree

// var newGuy = "john";
// var age1 = 28;
// var highSchool = false;
//
// if(age >= 18 || highSchool === true){
//     alert("You can apply!")
// } else {
//     alert("You are not eligible!")
// }
//
// //4 Conditionals
// //JOB AT Codeup
// //Job requirements : over 18 and high school degree
//
// var girl = "Betty";
// var age = 17;
// var highSchools = true;
//
// if (age >= 18 && highSchools === true) {
//     alert("You may apply for this job.");
// }else{
//     alert("You may not apply!");
// }



// var i = 0;
// while(i > 10) {
//     console.log(i);
//     i++;
// }
// console.log(i);

// var i = 0;
// while(i <= 10) {
//     console.log(i);
//     i++;
// }
// console.log(i);

// var i = 0;
// while(i > 10) {
//     console.log(i);
//     i++;
// }
// console.log(i);

// for(var i = 0; i > 10; i++) {
//     console.log(i);
// }
// console.log(i);

// for(var i = 0; i = 10; i++) {
//     console.log(i);
// }
// console.log(i); infinite loop
//
//
// for(var i = 0; i < 10; i--) {
//     console.log(i);
// }
// console.log(i); infinite loop
//
// for(var i = 0; i <= 10; i++) {
//     console.log(i);
// }
// console.log(i);

// var array = ['John', 'Paul', 'George', 'Ringo', 'Santana'];
// console.log(array[array.length - 2]);

// console.log(array[array.length - 3]);
// console.log(array[2]);

// band.shred = function() {
//     console.log('RAAAAAAAAAA!!!!');
// };
//
// band.function();

// var array = ['John', 'Paul', 'George', 'Ringo', 'Santana'];
// function arrays(arr){
//     var bucket = [];
//     for(var i = 0; i < arr.length; i++){
//         bucket.push(array.split());
//         console.log(array.split());
//     }
//     return bucket;
// }
//
// console.log(arrays(array));
// // console.log(array.split());
// array.join(' ').log;
// function isTrue(x){
//     return '' === true;
// }

//1. Iterate Through an Array with a For Loop
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

// Example
// var ourArr = [ 9, 10, 11, 12];
// var ourTotal = 0;
//
// for (var i = 0; i < ourArr.length; i++) {
//     ourTotal += ourArr[i];
// }
//
// // Setup
// var myArr = [ 2, 3, 4, 5, 6];
//
// // Only change code below this line
//
// // Example
// var ourArr = [ 9, 10, 11, 12];
// var ourTotal = 0;
//
// for (var i = 0; i < ourArr.length; i++) {
//     ourTotal += ourArr[i];
// }
//
// // Setup
// var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

var total = 0;
for(var i = 0; i < myArr.length; i++){
    total += myArr[i];
}

//2 Manipulate Arrays With push()
// Push ["dog", 3] onto the end of the myArray variable.


// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul", 35]);

//3 Manipulate Arrays With shift()
// Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray;