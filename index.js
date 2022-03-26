import { file } from './lib/file.js';

const petras = {
    name: 'Petras'
}
const status = await file.create('users', 'petras.json', petras);
console.log(status);
file.read();
file.update();
file.read();