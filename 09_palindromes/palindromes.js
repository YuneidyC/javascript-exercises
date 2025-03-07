const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let j = str.length - 1;

    for (let i = 0; i < str.length / 2; i++)
    {
        if (str[i] !== str[j])
        {
            return false;
        }
        j--;
    }
    return true;
};

palindromes('Rac ecar!');

// Do not edit below this line
module.exports = palindromes;
