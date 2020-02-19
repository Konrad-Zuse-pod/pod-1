//Create a function named 'addOddNumbers' that adds up all the odd numbers in an array while excluding strings

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

/*TODO: Array of Multiples
 Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

     Examples
 arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 Notes
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


