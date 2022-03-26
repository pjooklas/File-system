import fs from 'fs/promises';

const file = {};

file.create = async(dir, fileName, content) => {
    let fileDescriptor = null;
    try {
        console.log('Kuriamas failas...');
        return true;
    } catch (error) {
        return false;
    }
}

file.read = (dir, fileName) => {
    console.log('Skaitomas failas...');
}

file.update = (dir, fileName, content) => {
    console.log('Atnaujinamas failas...');
}

file.delete = (dir, fileName) => {
    console.log('Trinamas failas...');
}

export { file }