// functionで返り値100
function numBer(num1, num2) {
    return num1 * num2;
}

console.log(numBer(10, 10));

// アロー関数で返り値100
const numBer2 = () => { 
    console.log(10*10);
}

numBer2();