


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


function euler7(number) {
    let thePrimes = []
    let theCount = 1
    while (thePrimes.length <= number) {
        if (isPrime(theCount) === true) {
            thePrimes.push(theCount)

        }
        theCount = theCount + 1
    }

    return thePrimes.slice(thePrimes.length - 1)
}




console.time('someFunction');

someFunction(); // Whatever is timed goes between the two "console.time"

console.timeEnd('someFunction');