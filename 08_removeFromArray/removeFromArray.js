const removeFromArray = function(arr, ...series) {
      
    let concatArr = arr.concat([], series);
    
    let rmvdArr = [];

    for (let item of concatArr) {
        if (series.includes(item)) {
            continue;
        } else {
        rmvdArr.push(item)
        }
    }
    
    
    return rmvdArr;
        
};
 
// Do not edit below this line
module.exports = removeFromArray;
