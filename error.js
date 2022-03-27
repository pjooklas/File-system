/**
 * Susumuoja du skaicius.
 * @param {number} a Pirmasis skaicius.
 * @param {number} b Antrasis skaicius.
 * @returns {[boolean, number|string]} Funkcijos statusas; Suma arba klaidos pranesimas.
 */
function sum(a, b) {
    if (typeof a !== 'number') {
        return [true, 'ERROR: pirmasis parametras privalo buti skaicius'];
    }
    if (typeof b !== 'number') {
        return [true, 'ERROR: antrasis parametras privalo buti skaicius'];
    }
    return [false, a + b];
}

const [r1Err, r1Rez] = sum(true, false);
console.error(r1Err, r1Rez);

const [r2Err, r2Rez] = sum(5, 'asdfd');
console.error(r2Err, r2Rez);

const [r3Err, r3Rez] = sum(5, 7);
console.error(r3Err, r3Rez);

/**
 * Funkcija, kuri grazina teksto raide, pagal nurodyta pozicija.
 */
function letter(text, position) {

}