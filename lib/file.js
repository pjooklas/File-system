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
 * Asinchronine funkcija, kuri sukuria norima faila nurodytoje vietoje ir iraso pradini turini.
 * @param {string} dir Folderio pavadinimas, kuriame bus kuriamas naujas failas (`.data` folderyje).
 * @param {string} fileName Norimo sukurti failo pavadinimas su pletiniu.
 * @param {Object} content Norimas irasyti turinys (JS objektas).
 * @param {string} content.name Vartotojo vardas.
 * @param {number} content.age Vartotojo amzius.
 * @returns {Promise<[boolean, string|object]>} Statusas, ar pavyko sukurti faila; Proceso rezultatas.
 */
file.create = async(dir, fileName, content) => {
    let fileDescriptor = null;
    try {
        const filePath = file.fullPath(dir, fileName);
        fileDescriptor = await fs.open(filePath, 'wx');
        await fs.writeFile(fileDescriptor, JSON.stringify(content));
        return [false, 'OK'];
    } catch (error) {
        return [true, error];
    } finally {
        if (fileDescriptor) {
            await fileDescriptor.close();
        }
    }
}

/**
 * Nuskaitomas failas ir grazinamas jo **tekstinis** turinys.
 * @param {string} dir Folderio pavadinimas, kuriame bus kuriamas naujas failas (`.data` folderyje).
 * @param {string} fileName Norimo sukurti failo pavadinimas su pletiniu.
 * @returns {Promise<[boolean, string|object]>} Statusas, ar pavyko perskaityti faila; Proceso rezultatas: failo turinys arba klaidos objektas.
 */
file.read = async(dir, fileName) => {
    const filePath = file.fullPath(dir, fileName);
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return [false, fileContent];
    } catch (error) {
        return [true, error];
    }
}

file.update = (dir, fileName, content) => {
    console.log('Atnaujinamas failas...');
}

file.delete = (dir, fileName) => {
    console.log('Trinamas failas...');
}

export { file }