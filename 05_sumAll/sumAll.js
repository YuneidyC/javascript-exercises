const sumAll = function (first, second) {

    if (!checkIsAInteger(first) || !checkIsAInteger(second))
    {
        return "ERROR";
    }

    if (first > second)
    {
        let changeValue = first;
        first = second;
        second = changeValue;
    }

    let total = 0;
    for (let i = first; i <= second; i++)
    {
        total += i;
    }

    return total;
};

function checkIsAInteger(num) {
    return typeof num === "number" && num % 1 === 0 && num > 0;
}

// Do not edit below this line
module.exports = sumAll;
