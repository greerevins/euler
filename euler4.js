


function threeDigitCounter() {
    let numbers = [];
    let number = 100;
    while (number < 1000) {
        numbers.push(number)
        number = number + 1;
    }
    return numbers;
}



function multiplyNumbers(aNumberArray, aTwoDigitNumber) {
    let products = [];
    let counter = 0;
    while (counter < aNumberArray.length) {
        let number = aNumberArray[counter];
        let product = (aTwoDigitNumber * number);
        products.push(product);
        counter = counter + 1;
    }
    return products;
}



function allThreeDigitProducts() {
    let results = [];
    aThreeDigitNumber = 100;
    while (aThreeDigitNumber < 1000) {
        results.push(multiplyNumbers(threeDigitCounter(), aThreeDigitNumber))
        aThreeDigitNumber = aThreeDigitNumber + 1;



    }
    return results;

}





function flattenArray(anArrayOfArrays) {
    let flattened = [];
    for (i = 0; i < anArrayOfArrays.length; ++i) {
        let current = anArrayOfArrays[i];
        for (j = 0; j < current.length; ++j) {
            flattened.push(current[j]);
        }
    }
    return flattened;
}





function convertToStrings(arrayOfNumbers) {
    let arrayOfStrings = [];
    for (i = 0; i < arrayOfNumbers.length; i = i + 1) {
        let theNumber = arrayOfNumbers[i];
        arrayOfStrings.push(String(theNumber))
    }
    return arrayOfStrings;
}






function reverseString(aString) {
    let splitString = aString.split("");
    let reverse = splitString.reverse();
    let reverseString = reverse.join("");
    return reverseString;
}





function reverseStrings(arrayOfStrings) {
    let reversedStrings = [];
    for (i = 0; i < arrayOfStrings.length; i = i + 1) {
        reversedStrings.push(reverseString(arrayOfStrings[i]))
    }
    return reversedStrings;

}




//precondition: this function should only ever take two arrays that are the exact same length
function compareStrings(firstArray, secondArray) {
    let duplicates = [];
    for (i = 0; i < firstArray.length; i = i + 1) {
        let theFirstString = firstArray[i];
        let theSecondString = secondArray[i];
        if (theFirstString === theSecondString) {
            duplicates.push(theFirstString);
        }

    }
    return duplicates;
}





function findPalendromes() {
    let workingArray = convertToStrings(flattenArray(allThreeDigitProducts()));
    let duplicateArray = reverseStrings(workingArray);
    let palendromes = compareStrings(workingArray, duplicateArray);
    return palendromes;

}



// could be simpler and clearer by mapping an anonymous function over the arrayOfStrings:
// let arrayOfNumbers = arrayOfStrings.map((str) => Number(str));
// precondition: arrayOfStrings :: [NumericString]
function convertToNumbers(arrayOfStrings) {
    let arrayOfNumbers = [];
    for (i = 0; i < arrayOfStrings.length; i = i + 1) {
        let theString = arrayOfStrings[i];
        arrayOfNumbers.push(Number(theString))
    }
    return arrayOfNumbers;
}





function getMaxOfArray(anArray) {
    let theMax = anArray.reduce(function (a, b) {
        return Math.max(a, b);
    }
    )
    return theMax
}




function findMaxPalendrome() {
    let theNumbers = convertToNumbers(findPalendromes())
    let theMax = getMaxOfArray(theNumbers)
    return theMax
}





































// function splitString(anArrayOfNumbers) {
//     let theStringHalves = []
//     for (i = 0; i < anArrayOfNumbers.length; i = i + 1) {
//         let theNumber = anArrayOfNumbers[i];
//         let theNumberString = String(theNumber);
//         let theSecondHalf = theNumberString.slice(theNumberString.length / 2)
//         let theFirstHalf = theNumberString.slice(0, (theNumberString.length / 2))
//         theStringHalves.push(theFirstHalf)
//         theStringHalves.push(theSecondHalf)


//     }
//     return theStringHalves
// }






























































// function findHalfTheProducts(theFirstNumberArray) {
//     let theProducts = [];
//     let theSecondNumber = 10;
//     while (theFirstNumberArray <= 99) {
//         while (theSecondNumber <= 99) {
//             theProducts.push(theSecondNumber * theFirstNumberArray)
//             theSecondNumber = theSecondNumber + 1;

//         }
//         theFirstNumberArray = theFirstNumberArray + 1;
//     }
//     return theProducts;
// }



// function twoDigitCounter(){
// let theFirstNumberArray=[]
//     let number = 10;
// while (number < 100) {
//   console.log(number);
//   number = number + 1;
// }
// }



// // function getNumbers() {
// //     let theNumbers = [];
// //     for (i = 10; i <= 99; i = i + 1) {
// //         let theOtherHalf=findHalfTheProducts(i);
// //         theNumbers.push(theOtherHalf)

// //     }
// //    return theNumbers
// // }


// // function getAllProducts(){
// //     let theNumbers=getNumbers()
// //     let theProducts = theNumbers.map(findHalfTheProducts;
// // return theProducts
// // }








// if (theFirstHalf.length === theSecondHalf.length) {

// } else { }