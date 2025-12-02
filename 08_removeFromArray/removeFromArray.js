const removeFromArray = function(arr, obj) {
        let index = arr.indexOf(obj)

        arr.splice(index, 1)

        return arr;
};
 
// Do not edit below this line
module.exports = removeFromArray;
