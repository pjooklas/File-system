// const users = ['Petras', 'Maryte', 'Jonas', 'Ona'];

import { file } from "./lib/file.js";

const users = [
    { name: 'Petras', age: 99, isMarried: true },
    { name: 'Maryte', age: 87, isMarried: false },
    { name: 'Jonas', age: 66, isMarried: false },
    { name: 'Ona', age: 54, isMarried: true },
];


// 1) Student Petras is 99 years old and is married (petras.json).
// 2) Student Maryte is 87 years old and is not married.


// let i = 0;
// for (const student of users) {
//     let jsonas = student.name.toLowerCase() + '.json';
//     console.log(`${++i}) Student ${student.name} is ${student.age} years old and is${student.isMarried ? '' : ' not'} married (${jsonas})`);
// }

// Kiekviena user objekta irasyti i atskira faila, kurie turetu buti talpinami `.data/users` folderyje. 
// Failo pavadinimas atitinka sablona `vardenis.json` (mazosios raides).

let i = 0;
for (const student of users) {
    let jsonas = student.name.toLowerCase() + '.json';
    await file.create('users', jsonas, student);
}