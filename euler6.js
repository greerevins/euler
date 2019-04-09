function getSum(total, num) {
    return total + num;
}


function sumOfArray(anArray) {
    return anArray.reduce(getSum);
}


function square(aNumber) {
    return Math.pow(aNumber, 2);
}


function squareSum(anArray) {
    return square(sumOfArray(anArray));
}

function sumSquare(anArray) {
    return sumOfArray(anArray.map(square));
}

function getDiff(anArray) {
    return (squareSum(anArray))-(sumSquare(anArray)); 
}

function buildArray(){
    let count = 1
    let firstHundred=[];
    for(i=1;i<=100;i=i+1){
        firstHundred.push(count);
        count=count+1;
    }
    return firstHundred;
}


function solveIt(){
    return getDiff(buildArray());
}