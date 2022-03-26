import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const file = {};

/**
 * 
 * @param {*} dir 
 * @param {*} fileName 
 * @returns 
 */
file.fullPath = (dir, fileName) => {
    const __filename = fileURLToPath(
        import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.join(__dirname, '../.data', dir, fileName);
}

/**
 * 
 * @param {*} dir 
 * @param {*} fileName 
 * @param {*} content 
 * @returns 
 */
file.create = async(dir, fileName, content) => {
    let fileDescriptor = null;
    try {
        const filePath = file.fullPath(dir, fileName);
        fileDescriptor = await fs.open(filePath, 'wx');
        await fs.writeFile(fileDescriptor, JSON.stringify(content));
        return true;
    } catch (error) {
        console.log(error);
        return false;
    } finally {
        if (fileDescriptor) {
            await fileDescriptor.close();
        }
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