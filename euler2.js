function collectEven(anArray) {
    let results = [];
    for (let i = 0; i < anArray.length; i = i + 1) {
        let theNumber = anArray[i];
        if (theNumber % 2 === 0) {
            results.push(theNumber)
        }
    }
    return results;
}

function sumOfArray(arrayOfEvens) {
    return arrayOfEvens.reduce(function (runningTotal, nextValue) {
        return runningTotal + nextValue
    })
}



function euler2() {
    let number = 0
    let fibonacciArray = [1, 2]
    while (number < (50 - 2)) {   //it seems like maybe it would be better to make this a passable parameter to euler2()
        let newArray = fibonacciArray.slice(fibonacciArray.length - 2, fibonacciArray.length)
        let firstNumber = newArray.slice(0, newArray.length - 1)
        let secondNumber = newArray.slice(1)
        let newNumber = Number(firstNumber) + Number(secondNumber)
        fibonacciArray.push(newNumber);
        if (newNumber > 4000000) {
            return (fibonacciArray);

        } else {
            number = number + 1;
        }
    } console.log(fibonacciArray)
}



function solveProblem() {
    console.log(sumOfArray(collectEven(euler2())));
}








// for the isEven function, use filter instead (2/25)
// use array methods slice and .length in your if else statement to solve this

    //         for(let i =0; i < 4000000; i= i +1){
//             let num= y+x
//             fibonacciArray.push(num)
//     }
// }