


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


function euler7(){
    let thePrimes=[]
let theCount=13
for(i=){

}
}