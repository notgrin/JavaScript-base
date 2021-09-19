"use strict";
/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.
*/
let a = 10
let b = 0
function addition(a, b) {
    return a + b
}

function subtraction(a, b) {
    return a - b
}

function multiplication(a, b) {
    return a * b
}

function division(a, b) {
    if (b == 0) {
        alert('На ноль делить нельзя!')
    } else {
        return a / b
    }
    
}

console.log(addition(a, b))
console.log(subtraction(a, b))
console.log(multiplication(a, b))
console.log(division(a, b))
