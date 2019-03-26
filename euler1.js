
function euler1() {
    let numberList = [];
    for (let i = 0; i < 1000; i = i + 1) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            numberList.push(i);
        }else if (i % 3 === 0){
            numberList.push(i)

        }else if (i % 5 === 0){
            numberList.push(i)
        }

    }

    return numberList.reduce(getSum);

}

function getSum(total, num){
    return total + num;
}

