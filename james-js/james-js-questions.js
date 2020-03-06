//TODO: Create a function named 'addOddNumbers' that adds up all the odd numbers in an array while excluding strings

var arr = [1, 2, 3, 7, 8, 'Dog', 'Apple', 'House',];
var total = 0;
    //create a for loop that will go through all elements in the array
       for(var i = 0; i < arr.length; i++)

            //If the element is a non number, continue over it
           if(isNaN(arr[i])){
               continue;

           }else if(arr[i] % 2 !== 0) {  //if element is a odd number, add it
               total += Number(arr[i]);

           }
         //if element is not an odd number, do not push to empty array
         //if element is not a even or odd number, do not push
         // create variable that will add all odd numbers in the array

    console.log(total); // answer should be 11.

/*TODO: Array of Multiples: Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

 **Notes**
 Notice that num is also included in the returned array.*/

function arrayOfMultiples (num, length) {
    filledArray = [];
    for(var i = 0; i < length; i++){
        filledArray[i] = num * (i+1);
    }
    return filledArray;
}

Test.assertSimilar(arrayOfMultiples(7, 5), [7, 14, 21, 28, 35])
// Test.assertSimilar(arrayOfMultiples(12, 10), [12, 24, 36, 48, 60, 72, 84, 96, 108, 120])
// Test.assertSimilar(arrayOfMultiples(17, 7), [17, 34, 51, 68, 85, 102, 119])
// Test.assertSimilar(arrayOfMultiples(630, 14), [630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820])
// Test.assertSimilar(arrayOfMultiples(140, 3), [140, 280, 420])
// Test.assertSimilar(arrayOfMultiples(7, 8), [7, 14, 21, 28, 35, 42, 49, 56])
// Test.assertSimilar(arrayOfMultiples(11, 21), [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231])

// function monthName(num) {
//     var month = ['Null', 'January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     for(var i = 1; i <= 12; i++){
//         month[i];
//     }
//     return month;
// }


// Get Students with Names and Top Notes
// Create a function that takes an array of objects like { name: 'John', notes: [3, 5, 4]} and returns an array of objects like { name: "John", topNote: 5 }.
//
// If student has no notes (an empty array) then let's assume topNote: 0.
//
// Examples
//     [
//     { name: "John", notes: [3, 5, 4]}
//     ] ➞ [
//     { name: "John", topNote: 5}
// ]
// Notes
// Try doing it with an arrow function.



function getStudentsWithNamesAndTopNotes(students) {

}


const objectsAreEqual = (actual, expected) => Object.keys(expected).every(
    key => actual[key] === expected[key]
)
const areEqual = (actual, expected, compare) => expected.every(
    (item, index) => compare(actual[index], item)
)
const sets = [
    [['Jacek', [5, 4, 3]], ['Ewa', [3, 3, 3]], ['Zygmunt', [1, 2, 3]]],
    [['Jacek', []], ['Ewa', []], ['Zygmunt', [1, 2, 3]]],
    []
].map(
    set => ({
        actual: getStudentsWithNamesAndTopNotes(
            set.map(([name, notes]) => ({ name, notes }))
        ),
        expected: set.map(([name, notes]) => ({ name, topNote: Math.max(...notes, 0) }))
    })
).forEach(
    ({ actual, expected }) => {
        Test.expectNoError('Result should be an array', () => {
            Test.assertEquals(areEqual(actual, expected, objectsAreEqual), true, JSON.stringify(actual))
        })
    }
)




// const getStudentsWithNamesAndTopNotes = students =>
//     students.map(student => ({
//         name: student.name,
//         topNote: Math.max(...student.notes, 0),
//     }));

// const getStudentsWithNamesAndTopNotes = students =>
//     students.map( ({ name, notes }) =>
//         ({
//             name,
//             topNote: Math.max(0,...notes)
//         })
//     )

// function getStudentsWithNamesAndTopNotes(students) {
//     return students.map(function(stud) {
//         return student = {
//             name: stud.name,
//             topNote: Math.max(...stud.notes, 0)
//         }
//     })
// }



// Get Sum of People's Budget
// Create the function that takes an array with objects and returns the sum of people's budgets.
//
// Examples
// getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700
//
// getBudgets([
//     { name: "John",  age: 21, budget: 29000 },
//     { name: "Steve",  age: 32, budget: 32000 },
//     { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600

function getBudgets(arr) {

}

// Test.assertEquals(getBudgets([{name: "John",  age: 21, budget: 23000}, {name: "Steve",  age: 32, budget: 40000}, {name: "Martin",  age: 16, budget: 2700}]), 65700)
// Test.assertEquals(getBudgets([{name: "John",  age: 21, budget: 29000}, {name: "Steve",  age: 32, budget: 32000}, {name: "Martin",  age: 16, budget: 1600}]), 62600)
// Test.assertEquals(getBudgets([{name: "John",  age: 21, budget: 19401}, {name: "Steve",  age: 32, budget: 12321}, {name: "Martin",  age: 16, budget: 1204}]), 32926)
// Test.assertEquals(getBudgets([{name: "John",  age: 21, budget: 10234}, {name: "Steve",  age: 32, budget: 21754}, {name: "Martin",  age: 16, budget: 4935}]), 36923)

// function getBudgets(arr) {
//     const budgets = arr.reduce((total, person) => total + person.budget, 0);
//     return budgets;
// }

// function getBudgets(arr) {
//     return arr.reduce((c,i) => c + i.budget, 0)
// }


//A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).
//
// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:
//
// If win equals true, end the list with Pong!.
// If win equals false, end with Ping! instead.
// Examples
// pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]
//
// pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]
//
// pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
// Notes
// You will always return the ball (i.e. the Pongs are yours).
// Player 1 serves the ball and makes Ping!.
// Return an array of strings.

function pingPong(arr, win) {

}

// Test.assertSimilar(pingPong(["Ping!", "Ping!", "Ping!"], true), ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"])
// Test.assertSimilar(pingPong(["Ping!", "Ping!"], false), ["Ping!", "Pong!", "Ping!"])
// Test.assertSimilar(pingPong(["Ping!"], true) , ["Ping!", "Pong!"])

// function pingPong(arr, win) {
//     var final = arr.map(e => [e, "Pong!"]).flat()
//     return win ? final : final.slice(0,final.length-1);
// }

// function pingPong(arr, win) {
//     arr = arr.join(',Pong!,').split(',');
//     return (win)?[...arr,'Pong!']:arr;
// }

// const pingPong = ({ length }, win) =>
//     Array.from({ length: length * 2 - !win }, (_, i) =>
//         i % 2 ? 'Pong!' : 'Ping!',
//     );



// Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.
// //
// //     Examples
// // incrementToTop([3, 4, 5]) ➞ 3
// // // 3 increments: 3 -> 4, 4 -> 5; 4 -> 5
// //
// // incrementToTop([4, 3, 4]) ➞ 1
// //
// // incrementToTop([3, 3, 3]) ➞ 0
// //
// // incrementToTop([3, 10, 3]) ➞ 14
// // Notes
// // If the array contains only the same digits, return 0 (see example #2).
// // Bonus: Can you write a solution that achieves this by only traversing the array once? (i.e. without finding the max before hand)

function incrementToTop(arr) {

}


// Test.assertEquals(incrementToTop([3, 4, 5]), 3)
// Test.assertEquals(incrementToTop([4, 3, 4]), 1)
// Test.assertEquals(incrementToTop([3, 3, 3]), 0)
// Test.assertEquals(incrementToTop([3, 10, 3]), 14)
// Test.assertEquals(incrementToTop([1, 2, 3, 4, 5]), 10)

function incrementToTop(arr) {
    let biggestElem = Math.max(...arr);
    return arr.reduce((a,b) => { return a + (biggestElem - b) },0 );
}

function incrementToTop(arr) {
    return arr.reduce((acc, cur) => {
        return acc + Math.max(...arr) - cur
    }, 0)
}

function incrementToTop(arr) {
    return arr.reduce((acc, cur) => {
        return acc + Math.max(...arr) - cur
    }, 0)
}

