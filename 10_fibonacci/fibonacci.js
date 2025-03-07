const fibonacci = function(num) {
    if (num < 0)
    {
        return "OOPS";
    }

    let fib = [0, 1];
    num = parseInt(num);

    if (num === 0 || num === 1)
    {
        return num;
    }

    for (let i = 2; i <= num; i++)
    {
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    fib = fib[fib.length - 1];
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
