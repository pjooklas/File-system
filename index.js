import { file } from './lib/file.js';

const petras = {
    name: 'Petras'
}
const createFileStatus = await file.create('users', 'petras.json', petras);
console.log(createFileStatus);

const readFileStatus1 = await file.read('users', 'petras.json');
console.log(readFileStatus1);

file.update();

const readFileStatus2 = await file.read('users', 'petras.json');
console.log(readFileStatus2);

file.delete();

const readFileStatus3 = await file.read('users', 'petras.json');
console.log(readFileStatu3);