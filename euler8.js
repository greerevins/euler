
let theArray = ["73167176531330624919225119674426574742355349194934",
    "96983520312774506326239578318016984801869478851843",
    "85861560789112949495459501737958331952853208805511",
    "12540698747158523863050715693290963295227443043557",
    "66896648950445244523161731856403098711121722383113",
    "62229893423380308135336276614282806444486645238749",
    "30358907296290491560440772390713810515859307960866",
    "70172427121883998797908792274921901699720888093776",
    "65727333001053367881220235421809751254540594752243",
    "52584907711670556013604839586446706324415722155397",
    "53697817977846174064955149290862569321978468622482",
    "83972241375657056057490261407972968652414535100474",
    "82166370484403199890008895243450658541227588666881",
    "16427171479924442928230863465674813919123162824586",
    "17866458359124566529476545682848912883142607690042",
    "24219022671055626321111109370544217506941658960408",
    "07198403850962455444362981230987879927244284909188",
    "84580156166097919133875499200524063689912560717606",
    "05886116467109405077541002256983155200055935729725",
    "71636269561882670428252483600823257530420752963450"]



function splitString(aString) {
    let newString = aString.split("");
    return newString;
}



function getProduct(x, y) {
    return x * y;
}



function multiplyNumbers(anArray) {
    return anArray.reduce(getProduct);

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






function getTotals(aString) {
    let theTotals = []
    let workingArray = []
    let theStrings = splitString(aString)
    for (i = 0; i < theStrings.length; i = i + 1) {
        workingArray.length = 0
        for (j = 0; j < 4; j = j + 1) {
            workingArray.push(theStrings[j])

        }
        theTotals.push(multiplyNumbers(workingArray))
    }
    return theTotals
}



function convertToNumbers(anArray){
for(i=0; i< anArray.length; i= i+1){
    Number(anArray[i])
   
}
return i
}


function tester(aString) {
    let counterOne = 0
    let counterTwo = 4
    let theTotals = []
    let workingArray = []
    let arrayOfStrings = splitString(aString)
    for (i = 0; i < arrayOfStrings.length; i = i + 1) {
        for (j = 0; j < arrayOfStrings.length; j = j + 1) {
            workingArray.push(arrayOfStrings.slice(counterOne, counterTwo))
            counterOne = counterOne + 1
            counterTwo = counterTwo + 1
        }
        theTotals.push(workingArray)
    }
    return theTotals
}



//this nearly works but I need to figure out how to convert the strings back to numbers before I can call multiplyNumbers on workingArray. the function convertToNumbers doesn't really work, it might be that I should abandon it, and flatten array is not necesserily needed for this problem, but I went ahead and pulled it in here just in case. 