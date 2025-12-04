const convertToCelsius = function(fahr) {
  const celsius = (fahr - 32) * (5/9);

  //se numero intero
  if (celsius == Math.floor(celsius))
    return parseFloat(celsius);
  //se numero decimale
  else  
    return parseFloat(celsius.toFixed(1));

};

const convertToFahrenheit = function(cels) {
  const fahreneit = cels * (9/5) + 32
  
  //se numero intero
  if (fahreneit == Math.floor(fahreneit))
    return parseFloat(fahreneit);
  //se numero decimale
  else
    return parseFloat(fahreneit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
