const repeatString = function(str, num) {
    if (num < 0)
    {
        return "ERROR";
    } else if (num === 0)
    {
        return "";
    }

    let string = "";
    for (let i = 0; i < num; i++)
    {
        string += str;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
