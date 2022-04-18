// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest






// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



describe('arrayShuffler', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        expect(arrayShuffler(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(arrayShuffler(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
  })
  

// b) Create the function that makes the test pass.
// Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// ***PSEUDOCODE***
//create a function
//remove the first element
// use .shift method
//math.floor/math.random



const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

 let arrayShuffler = array  => { 
        array.shift() 
            for (i=0; i < array.length; i++){
            let random = Math.floor(Math.random() * array.length)
            return array
        }
    }
console.log(arrayShuffler(colors1))

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
// const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe("miniMax", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
      expect(miniMax(nums1)).toEqual(expect.arrayContaining[-8, 90])
      expect(miniMax(nums2)).toEqual(expect.arrayContaining[5, 109])
    })
  })
// *********
// ● miniMax › takes an array of numbers and returns an array of the minimum and maximum numbers in that order

// ReferenceError: miniMax is not defined

//   77 |     const nums2 = [109, 5, 9, 67, 8, 24]
//   78 |     it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
// > 79 |       expect(miniMax(nums1)).toEqual(expect.arrayContaining[-8, 90])
//      |       ^
//   80 |       expect(miniMax(nums22)).toEqual(expect.arrayContaining[5, 109])
//   81 |     })
//   82 |   })

//   at Object.<anonymous> (code-challenges.test.js:79:7)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.149 s

// **********

// b) Create the function that makes the test pass. Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

//**PSUEDOCODE*****GOT THE CODE TO WORKBUT COULDNT GET IT TO PASS.DONT KNOW WHAT I AM DOING WRONG
//create a function called miniMax
//takes in an array
//use .min - .max method
//return an array with new numbers using min/max
//
var miniMax = (array) => {
    return [Math.min(...array), Math.max(...array)];
  };
  

  const nums1 = [3, 56, 90, -8, 0, 23, 6]
  const nums2 = [109, 5, 9, 67, 8, 24]
  console.log(miniMax(nums1)) 
  console.log(miniMax(nums2)) 








// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.***

// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("noDupes", () => {
    // const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    // const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
      expect(noDupes(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
        })
  })

// ************************************
// ✕ takes in two arrays as arguments and returns one array with no duplicate values

// ● noDupes › takes in two arrays as arguments and returns one array with no duplicate values

//   ReferenceError: noDupes is not defined

// 136 |     // const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// 137 |     it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
// > 138 |       expect(noDupes(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
//     |       ^
// 139 |         })
// 140 |   })
// 141 |

// at Object.<anonymous> (code-challenges.test.js:138:7)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.147 s, estimated 1 s
// Ran all test suites.

// ******************************

// // b) Create the function that makes the test pass.

// //**PSEUDOCODE****************
// //create function - arr3
// //parameters will be array1/array2
// //thinking to join arrays together
// //use a method  to remove similar values
// //data type will be new array of non duplicate values
//********************************

    // const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    // const testArray2 = [7, 8, 2, 3, 1, 5, 4]



// const noDupes = (testArray1, testArray2) => {
//     return [...new Set([...testArray1, ...testArray2])]
// }
// console.log(noDupes(testArray1, testArray2))


// -----------------------------------I GOT THE CODE BELOW TO WORK BELOW BUT COULDNT GET IT TO PASS,SO WENT WITH THE ABOVE-------------
// let noDupes = (testArray1.concat(testArray2));
// noDupes = noDupes.filter((item,index)=>{
//    return (noDupes.indexOf(item) == index)
//    })

// console.log(noDupes)