const reverseString = function(string) {
    let str = "";
    let arr = string.split("");
    let reverseArr = arr.reverse();

    for (let char of reverseArr) {
        str += char ;
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
