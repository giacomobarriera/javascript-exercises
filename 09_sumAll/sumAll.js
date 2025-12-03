
// prendi i due arg della funzione
const sumAll = function(a, b) {
//crea un nuovo array da riempire
    let newArr = []
//comincia un loop al contrario
//usa a e b come max e min
//se a più grande di b
    if (a > b) {
//se b più grande di a
        for (let i = a; i >= b; i--) {
//spingi l'indice del loop nel newArr
            newArr.push(i);
        }
    } else {
        for (let i = b; i >= a; i--) {
//spingi l'indice del loop nel newArr
            newArr.push(i);
        }
    }
//somma tutti gli elementi
    return newArr.reduce((sum, currItem) => {
        return sum + currItem;
    });

//per ogni numero somma gli elementi

};

// Do not edit below this line
module.exports = sumAll;
