

// function divideNumber(number) {
//     let factors = [];
//     for (i = 1; i <= 20; i = i + 1) {
//         factors.push(number / i);
//     }
//     return factors;
// }



//THIS IS HOW YOU MAKE IT MUCH FASTER!!
// function divisionLoop(number) {
//     let count = 0
//     //let results = [];
//     for (i = 1; i <= 20; i = i + 1) {
//         let result = (number / i);
//         if (Number.isInteger(result)) {
//             count = count + 1
//          //   results.push(result);
//         } else {
//             return count;
//         };
//     }
//     return count;
// }

function divisionLoop(number) {
    let count = 0
    //let results = [];
    for (i = 1; i <= 20; i = i + 1) {
        let result = (number / i);
        if (Number.isInteger(result)) {
            count = count + 1
         //   results.push(result);
        };
    }
    return count;
}





function isTwenty(number) {
    let theCount = divisionLoop(number)
    if (theCount === 20) {
        return "True"
    } else { return "False" }
}




function getSmallest(number) {
    while (isTwenty(number) === "False") {
        number = number + 1
    }
    return number
}








// function countFirstElement(anArray) {
//     let count = 1
//     let theFirstNumber = anArray[0]
//     for (i = 1; i < anArray.length; i = i + 1) {
//         let theSecondNumber = anArray[i]
//         if (theFirstNumber === theSecondNumber) {
//             count = count + 1

//         }
//     }
//     return count

// }



// function countLoop(anArray){
// for(i=0;i<anArray.length;i=i+1){

// }
// }





//working with 2520*2, which is 5040 as the parameter for divisionLoop. It's arbitrary. 

//I need a function that counts the amount of times a number appears in the result array of divisionLoop. Every number that appears twenty times is a number to collect. I want the smallest one to solve the problem. 


