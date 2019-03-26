
function findFactors(number) {
    let arrayOfFactors = [];
    let counter = 1;
    while (counter <= number) {
        if (number % counter === 0)
            arrayOfFactors.push(counter)
        counter = counter + 1;
    }
    return arrayOfFactors;
}





function isPrime(num) {
    let fax = findFactors(num);
    if (fax.length <= 2) {
        return true;
    } else {
        return false;
    }
}



function euler3(number) {
    console.time('euler3');
    let factors = findFactors(number);
    let primeFactors = factors.filter(isPrime);
    let theLargestPrimeFactorArray = primeFactors.reduce(function (a, b) {
        return Math.max(a, b);
    });
    console.timeEnd('euler3');
    return theLargestPrimeFactorArray
}





// function collectPrimes(anArray) {
//     let newFactorArray = [];
//     for (i = 0; i < anArray.length; i = i + 1) {
//         newFactorArray.push(findFactors(anArray[i]));
//         if (newFactorArray.length === 2) {
//             let firstNumber = Number(newFactorArray[0])
//             let secondNumber = Number(newFactorArray[1])
//             return firstNumber * secondNumber
//         }

//     }
// }




//let fax = findFactors(N);
//let primeFax = fax.filter(isPrime);
//return max (primeFax)




// function isPrime(anArray) {
//     let arrayOfPrimes = []
//     for (i = 0; i <= anArray.length; i = i + 1) {
// if(i){}
//     }
// }





// function isPrime(aNumber) {
//     let arrayOfFactors = [];
//     for (i = 0; i <= aNumber; i = i + 1) {
//         if (aNumber % i === 0){
//             arrayOfFactors.push(i)
//             console.log(arrayOfFactors)
//         }
//     }
// }









// 0) && (i===1) && (i===aNumber){
