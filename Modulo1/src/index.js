const cities = ['Cidudad de mexico', 'Bogotá', 'Lima', 'Medellin', 'Lima'];
const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};
/* Para generar reportes de que funciones como RANDOMSTRING ( que si tiene un test )
 o reverseString ( que no está siendo probada), podemos usar un comando llamado 
 jest --covertage

 ----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   85.71 |      100 |      50 |   85.71 |
 index.js |   85.71 |      100 |      50 |   85.71 | 19
----------|---------|----------|---------|---------|-------------------
Este es el reporte que aparecería en consola
 */
const reverseString = (str) => {
  return str.split('').reverse().join('');
};

module.exports = randomString;
