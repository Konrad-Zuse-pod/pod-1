"use strict";

// 1. Create a function named wordsLength that takes an array of words and transforms it into an array of each word's length.
// wordLengths(["hello", "world"]) ➞ [5, 5]
// wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]
// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]


// SOLUTION //

// function wordLengths(array){
//     var arrayLength = [];
//     for (var i = 0; i < array.length; i++){
//         arrayLength.push(array[i].length)
//     }
//     return arrayLength;
// }


// SOLUTION 2 //

// const wordLengths = arr => arr.map(word => word.length);



// console.log(wordLengths(["hello", "how", "are", "you", "doing?"]));
// Should return [5, 3, 3, 3, 6] //

// END SOLUTIONS //

// 2. https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups //

// // Setup
// function phoneticLookup(val) {
//     var result = "";
//
//     // Only change code below this line
//     switch(val) {
//         case "alpha":
//             result = "Adams";
//             break;
//         case "bravo":
//             result = "Boston";
//             break;
//         case "charlie":
//             result = "Chicago";
//             break;
//         case "delta":
//             result = "Denver";
//             break;
//         case "echo":
//             result = "Easy";
//             break;
//         case "foxtrot":
//             result = "Frank";
//     }
//
//     // Only change code above this line
//     return result;
// }
//
// // Change this value to test
// phoneticLookup("charlie");


// SOLUTION //


// // Setup
// function phoneticLookup(val) {
//     var result = "";
//
//     // Only change code below this line
//     var lookup = {
//         "alpha": "Adams",
//         "bravo": "Boston",
//         "charlie": "Chicago",
//         "delta": "Denver",
//         "echo": "Easy",
//         "foxtrot": "Frank",
//     };
//     return lookup[val];
//     // Only change code above this line
//     return result;
// }
//
// // Change this value to test
// phoneticLookup("charlie");

// END SOLUTION //


// 3. Create a function that takes an array of numbers and returns only the even values.
// https://edabit.com/challenge/uJ9K3HtbjHoDGXKhg

// SOLUTION //

// function noOdds(arr) {
//     var bucket = [];
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] % 2 === 0) {
//             bucket.push(arr[i]);
//         }
//     }
//     return bucket;
// }

// END SOLUTION //

