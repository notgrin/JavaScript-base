"use strict";
/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

let a = 7
let b = 50
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "+":
            console.log(arg1 + arg2);
            break;
        case "-":
            console.log(arg1 - arg2);
            break;
        case "*":
            console.log(arg1 * arg2);
            break;
        case "/":
            if (b == 0){
                console.log('На ноль делить нельзя!')
            } else {
                console.log(arg1 / arg2);
                break;
            }
            
    }
}

mathOperation(a, b, "/")
