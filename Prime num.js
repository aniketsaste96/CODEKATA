
//Return all the prime numbers in an array(a number that is divisible only by itself and 1)

var prime = function () {
    const isPrime = n => {
        if (n === 1) {
            return false;
        } else if (n === 2) {
            return true;
        } else {
            for (let x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        };
    };
    const filterPrime = data => {
        const filtered = data.filter(el => !isPrime(el));
        return filtered;
    };
    console.log(filterPrime(data));
}
prime();
//output Array(8) [ 1, 4, 6, 6, 9, 8, 1, 6 ]









(function () {
    const isPrime = n => {
        if (n === 1) {
            return false;
        } else if (n === 2) {
            return true;
        } else {
            for (let x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        };
    };
    const filterPrime = data => {
        const filtered = data.filter(el => !isPrime(el));
        return filtered;
    };
    console.log(filterPrime(data));
})();
//Array(8) [ 1, 4, 6, 6, 9, 8, 1, 6 ]
