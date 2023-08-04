//constant temperature in kelvin degrees
const kelvin = 293;
//converting kelvin to celsiis
const celsius = kelvin - 273;
//convertying celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//round down fahrenheit variable
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
let newton = celsius *(33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`);
