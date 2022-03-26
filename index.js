import { file } from './file.js';

console.log(file);

const status = file.create();
file.read();
file.update();
file.read();
file.delete();
file.read();