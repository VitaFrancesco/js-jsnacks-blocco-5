const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
// const nameList = [];
// people.forEach(element => {
//   nameList.push(element.name);
// });
// console.log(nameList.join(', '));
console.log(people.map(element => element.name));