
// prendi i due arg della funzione
const sumAll = function(a, b) {
//crea un nuovo array da riempire
    let newArr = []
//comincia un loop al contrario

//se a o b sono negativi
if (a < 0 || b < 0) {
// segnala ERRORE
    return "ERROR"
// se a o b non sono numeri
} else if ((typeof a != "number")
         ||(typeof b != "number")){
//segnala ERRORE
    return "ERROR"
// se a o b sono numeri decimali
} else if ((a != Math.floor(a))
        ||(b != Math.floor(b))){
//segnala ERRORE
    return "ERROR";
//negli altri casi    
} else { 
//se a più grande di b
    if (a > b) {
//se b più grande di a
        for (let i = a; i >= b; i--) {
//spingi l'indice del loop nel newArr
            newArr.push(i);
        }
// se a più grande di b
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
}
};

// Do not edit below this line
module.exports = sumAll;
