const removeFromArray = function(arr, ...num) {
    const allNums = new Set(num);
    let newArr = [];

    for (let i = 0; i < arr.length; i++)
    {
        if (!allNums.has(arr[i]))
        {
            newArr.push(arr[i]);
        }
    }

    return newArr;
};

removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
