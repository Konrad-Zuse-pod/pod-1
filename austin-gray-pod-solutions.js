"use strict";
// SOURCE:  https://edabit.com/challenge/B9yPEStmax7Jxb9Dj  //
// Create a function that takes an array of words and transforms it into an array of each word's length.
// wordLengths(["hello", "world"]) ➞ [5, 5]
// wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]
// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]

// function wordLengths(array){
//     var arrayLength = [];
//     for (var i = 0; i < array.length; i++){
//         arrayLength.push(array[i].length)
//     }
//     return arrayLength;
// }


    // Shorthand //

// const wordLengths = arr => arr.map(word => word.length);



console.log(wordLengths(["hello", "how", "are", "you", "doing?"]));
// Should return [5, 3, 3, 3, 6] //




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
