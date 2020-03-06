
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


// Write a function to check if an array contains a particular number.

function check(arr, el) {
    return arr.includes(el);
}

// Test.assertEquals(check([1, 2, 3, 4, 5], 3), true)
// Test.assertEquals(check([1, 1, 2, 1, 1], 3), false)
// Test.assertEquals(check([1, 1, 2, 1, 5, 4, 7], 7), true)
// Test.assertEquals(check([1, 1, 2, 1, 5, 4, 7], 8), false)
// Test.assertEquals(check([5, 5, 5, 6], 5), true)
// Test.assertEquals(check([], 5), false)


// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

function removeLeadingTrailing(n) {
    var noZeros = parseFloat(n);
    return noZeros.toString();
}

// Test.assertEquals(removeLeadingTrailing("230.000"), "230")
// Test.assertEquals(removeLeadingTrailing("00402"), "402")
// Test.assertEquals(removeLeadingTrailing("03.1400"), "3.14")
// Test.assertEquals(removeLeadingTrailing("30"), "30")
// Test.assertEquals(removeLeadingTrailing("30.0000"), "30")
// Test.assertEquals(removeLeadingTrailing("24340"), "24340")
// Test.assertEquals(removeLeadingTrailing("0404040"), "404040")
// Test.assertEquals(removeLeadingTrailing("0"), "0")
// Test.assertEquals(removeLeadingTrailing("00"), "0")
// Test.assertEquals(removeLeadingTrailing("0.000000"), "0")
// Test.assertEquals(removeLeadingTrailing("0000.000"), "0")
// Test.assertEquals(removeLeadingTrailing("00.0001"), "0.0001")
// Test.assertEquals(removeLeadingTrailing("10000"), "10000")
// Test.assertEquals(removeLeadingTrailing("1345"), "1345")
// Test.assertEquals(removeLeadingTrailing("30.000020"), "30.00002")
// Test.assertEquals(removeLeadingTrailing("00200.1900001"), "200.1900001")

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(minutes, fps) {
    return (minutes * fps) * 60;
}

// Test.assertEquals(frames(1, 1), 60)
// Test.assertEquals(frames(10, 1), 600)
// Test.assertEquals(frames(10, 25), 15000)
// Test.assertEquals(frames(500, 60), 1800000)
// Test.assertEquals(frames(0, 60), 0)
// Test.assertEquals(frames(99, 1), 5940)
// Test.assertEquals(frames(419, 70), 1759800)
// Test.assertEquals(frames(52, 33), 102960)



// There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

function towerHanoi(discs) {
    return Math.pow(2, discs) - 1;
}

// Test.assertEquals(towerHanoi(3), 7)
// Test.assertEquals(towerHanoi(5), 31)
// Test.assertEquals(towerHanoi(8), 255)
// Test.assertEquals(towerHanoi(19), 524287)
// Test.assertEquals(towerHanoi(9), 511)
// Test.assertEquals(towerHanoi(13), 8191)
// Test.assertEquals(towerHanoi(0), 0)


// The packaging system is running wild and the candy is lying loose all over in the warehouse and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.
//
//     The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...

function getContainer(product) {
    let container
    switch (product) {
        case "Bread":
            container = "bag"
            break
        case "Beer":
            container = "bottle"
            break
        case "Milk":
            container = "bottle"
            break
        case "Cerials":
            container = "box"
            break
        case "Eggs":
            container = "carton"
            break
        case "Candy":
            container = "plastic"
            break
        default:
            container = null
    }

    return container
}

// Test.assertEquals(getContainer("Bread"), "bag")
// Test.assertEquals(getContainer("Milk"), "bottle")
// Test.assertEquals(getContainer("Beer"), "bottle")
// Test.assertEquals(getContainer("Eggs"), "carton")
// Test.assertEquals(getContainer("Candy"), "plastic")
// Test.assertEquals(getContainer("Cheese"), null)


// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

function cityFacts(city) {
    return city.name + " has a population of " + city.population + " and is situated in " + city.continent;
}

// Test.assertEquals(cityFacts({name: 'Manila', population: '1,780,148', continent: 'Asia'}), 'Manila has a population of 1,780,148 and is situated in Asia')
// Test.assertEquals(cityFacts({name: 'Melbourne', population: '4,936,349', continent: 'Australia'}), 'Melbourne has a population of 4,936,349 and is situated in Australia')
// Test.assertEquals(cityFacts({name: 'Kampala', population: '1,507,080', continent: 'Africa'}), 'Kampala has a population of 1,507,080 and is situated in Africa')
// Test.assertEquals(cityFacts({name: 'Buenos Aires', population: '2,891,082', continent: 'South America'}), 'Buenos Aires has a population of 2,891,082 and is situated in South America')
// Test.assertEquals(cityFacts({name: 'Vancouver', population: '631,486', continent: 'North America'}), 'Vancouver has a population of 631,486 and is situated in North America')
// Test.assertEquals(cityFacts({name: 'Berlin', population: '3,748,148', continent: 'Europe'}), 'Berlin has a population of 3,748,148 and is situated in Europe')


// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

function volumeOfBox(sizes) {
    return sizes.width * sizes.length * sizes.height;
}
//
// Test.assertEquals(volumeOfBox({width: 11,length: 1, height: 2}), 22)
// Test.assertEquals(volumeOfBox({width: 1, length: 5,  height: 3}), 15)
// Test.assertEquals(volumeOfBox({width: 2, length: 1,  height: 1}), 2)
// Test.assertEquals(volumeOfBox({width: 2, length: 6,  height: 5}), 60)
// Test.assertEquals(volumeOfBox({width: 2, length: 5,  height: 3}), 30)
// Test.assertEquals(volumeOfBox({width: 2, length: 5,  height: 1}),






