import { file } from './lib/file.js';

console.log('-------------------------');
const petras = {
    name: 'Petras',
    age: 99
}
const maryte = {
    name: 'Maryte',
    age: 81
}

// const createFileStatus = await file.create('users', 'petras.json', petras);
// console.log(createFileStatus);
// const createFileStatus2 = await file.create('users', 'maryte.json', maryte);
// console.log(createFileStatus2);

// const readFileStatus1 = await file.read('users', 'petras.json');
// console.log(readFileStatus1);

// const updateFileStatus = await file.update('users', 'petras.json', {
//     name: 'Petras',
//     age: 99
// });
// console.log(updateFileStatus);

// const readFileStatus2 = await file.read('users', 'petras.json');
// console.log(readFileStatus2);

// const deleteFileStatus = await file.delete('users', 'petras.json');
// console.log(deleteFileStatus);


// const readFileStatus3 = await file.read('users', 'petras.json');
// console.log(readFileStatus3);

const listStatus = await file.list('users');
console.log(listStatus);