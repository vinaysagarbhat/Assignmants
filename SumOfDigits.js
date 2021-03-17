const sumOfDigits = (number) => {
    let result = 0;

    String(number).split('').map(num => {
        result += Number(num);
    });
    return result > 9 ? sumOfDigits(result) : result;
}

console.log(sumOfDigits(12345))