function fibonacci(n) {
    let n1 = [1, 1];

    for (var i = 2; i < n; i++) {
        n1[i] = n1 [i-1]+ n1 [i-2];
    }
    return n1 [n-1];
}

alert(fibonacci(+prompt('Яке число Фібоначчі вивести на екран?')));



// function fibonacci(n) {
//   var num;

//   if (n >= 2) {
//     num = fibonacci(n - 1) + fibonacci(n - 2);
//   } else {
//     num = n
//   }

//   return num;
// }

// alert(fibonacci(+prompt('Яке число Фібоначчі вивести на екран?')));




// function fibonacciBinet(n) {
//   var sq5 = Math.sqrt(5);
//   var a = (1 + sq5) / 2;
//   var b = (1 - sq5) / 2;
//   return (Math.pow(a, n) - Math.pow(b, n)) / sq5;
// }

// alert(fibonacciBinet(+prompt('Яке число Фібоначчі вивести на екран?')));




