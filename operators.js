function add(num1, num2) {
    return (num1 + num2);
}

function substract(num1, num2) {
    return (num1 - num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function exponent(num1, num2) {
    return (num1 ** num2);
}

function factorial(num) {
    let ans = 1;
    for (i = 1; i <= num; i++) {
        ans = ans * i;
    }
    return (ans);
}

function nPr(num1, num2) {
    let ans = 1
    for (i = num1; i > num1 - num2; i--) {
        ans = ans * i;
    }
    return (ans);
}

function nCr(num1, num2) {
    return (nPr(num1, num2) / factorial(num2));
}

function sqrt(num) {
    return (num ** 0.5);
}

