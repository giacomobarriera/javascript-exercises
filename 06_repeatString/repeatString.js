const repeatString = function(string, num) {
   
    let arr = [];

    if (num < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < num; i++) {
        arr.push(string);
        }

        let arrString = arr.join()

        return arrString.replaceAll(",", "")
    }
}

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
