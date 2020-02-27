
//Create a nested array called myArray.


// Example
// var ourArray = [[“the universe”, 42], [“everything”, 101010]];
// Only change code below this line.
var myArray = [["the univers", 42],['me', 1]];


//====================================================================================//

// Accessing Nested Arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line


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



//------------------------------------------PART 2------------------------------------------------->

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
    var number = 0;
    for(var i = 0; i <= num; i++){
        number = number + (+[i]);
    }
    return number
}

// Test.assertEquals(addUp(4), 10)
// Test.assertEquals(addUp(13), 91)
// Test.assertEquals(addUp(600), 180300)
// Test.assertEquals(addUp(392), 77028)
// Test.assertEquals(addUp(53), 1431)
// Test.assertEquals(addUp(897), 402753)
// Test.assertEquals(addUp(23), 276)
// Test.assertEquals(addUp(1000), 500500)
// Test.assertEquals(addUp(738), 272691)
// Test.assertEquals(addUp(100), 5050)
// Test.assertEquals(addUp(925), 428275)
// Test.assertEquals(addUp(1), 1)
// Test.assertEquals(addUp(999), 499500)
// Test.assertEquals(addUp(175), 15400)
// Test.assertEquals(addUp(111), 6216)


// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
    //need to make an empty to push the largest and lowest number
    //need to make a for loop for(var i=0; i<arr.length; i++);
    //if i is the largest number in the array, push it to the empty array
    //else, if the number is the lowest, push it to the empty array also.
    var min = Math.min.apply(null, arr),
        max = Math.max.apply(null, arr);
    return [min, max]
}

// Test.assertSimilar(minMax([14, 35, 6, 1, 34, 54]), [1, 54])
// Test.assertSimilar(minMax([1.346, 1.6532, 1.8734, 1.8723]), [1.346, 1.8734])
// Test.assertSimilar(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]), [0.2345, 0.984])
// Test.assertSimilar(minMax([13, 72, 98, 43, 24, 65, 31]), [13, 98])
// Test.assertSimilar(minMax([-54, -23, -54, -21]), [-54, -21])
// Test.assertSimilar(minMax([-0.473, -0.6834, -0.1287, 0.5632]), [-0.6834, 0.5632])
// Test.assertSimilar(minMax([0, 0, 0, 0]), [0, 0])