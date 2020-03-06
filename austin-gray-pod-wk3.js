"use strict";

// V EASY
// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.


// function volumeOfBox(sizes) {
//     return sizes.height * sizes.width * sizes.length;
// }

// MEDIUM - As you complete questions on Edabit, you gain experience points depending on the difficulty of the question. The points for each difficulty are as follows:

// Difficulty       Exp Points
// Very Easy        5XP
// Easy             10XP
// Medium           20XP
// Hard             40XP
// Very Hard        80XP


// MEDIUM - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
// Write a function that converts an object into an array, where each element represents a key-value pair.
// MDN for help https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// function toArray(obj) {
//     // console.log(Object.entries(obj));
//     return Object.entries(obj);
// }
// toArray({ a: 1, b: 2 });


// MEDIUM - https://edabit.com/challenge/yX9LqcQ43nEXo5GS2
// Given an object of how many questions a person has completed of each difficulty, return how many experience points they'll have.

// function getXP(obj) {
//     var points = {
//         'Very Easy' : 5,
//         'Easy'      : 10,
//         'Medium'    : 20,
//         'Hard'      : 40,
//         'Very Hard' : 80
//     };
//     var totalPoints = 0;
//
//     for (var i in obj) {
//         totalPoints += obj[i] * points[i];
//     }
//     return totalPoints + "XP";
// }
//
// getXP({
//     "Very Easy" : 89,
//     "Easy" : 77,
//     "Medium" : 30,
//     "Hard" : 4,
//     "Very Hard" : 1
// })