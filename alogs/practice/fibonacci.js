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
    
    if (fMap[n] === undefined) {
        fMap[n] = fibM(n-1) + fibM(n-2);
    }

    return fMap[n];
}

//console.log(fibM(55));
//console.log(fMap);

// dp - tabular
function fibDP(n) {
    var arr = [];

    arr[0] = 0;
    arr[1] = 1;

    for (var i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }

    return arr[n]
}
console.log(fibDP(55));

// mine - 2 temp vars
function me(n) {
    var pl_2 = 0,
        pl_1 = 1,
        ptemp = 0;
        ptempPrev = 0;
    for (var i = 2; i <= n; i++) {
        ptemp = pl_1 + pl_2;
        pl_2 = pl_1;
        pl_1 = ptemp;
    }
    return ptemp;
}
console.log(me(55));

// WOW huge time difference between memoization and direct recursion.. 