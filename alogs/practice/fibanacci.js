function fib(n) {
    // base case
    if (n <= 0) {
        return 0;
    }
    if (n <= 1) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

//console.log(fib(40));

var fMap = {};

function fibM(n) {
    // base case
    if (n <= 0) {
        return 0;
    }
    if (n <= 1) {
        return 1;
    }
    
    if (fMap[n] !== undefined) {
        return fMap[n];
    } else {
        fMap[n] = fibM(n-1) + fibM(n-2);
        return fMap[n];
    }
}

//console.log(fibM(50));
//console.log(fMap);

// WOW huge time difference between memoization and direct way.. 