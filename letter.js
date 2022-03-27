/**
 * Funkcija, kuri grazina teksto raide, pagal nurodyta pozicija.
 */
function letter(text, position = 0) {
    // "text" validation
    if (typeof text !== 'string') {
        return [true, 'Tekstas turi buti "string"'];
    }
    if (text.length === 0) {
        return [true, 'Tekstas negali buti tuscias'];
    }

    // "position" validation
    if (typeof position !== 'number') {
        return [true, 'Pozicija turi buti "number"'];
    }
    if (!isFinite(position)) {
        return [true, 'Pozicija turi buti tikras skaicius'];
    }
    if (position < 0) {
        return [true, 'Pozicija negali buti maziau nulio'];
    }
    if (position >= text.length) {
        return [true, 'Pozicija negali buti didesne uz paskutinio teksto simbolio indeksa'];
    }
    if (!Number.isInteger(position)) {
        return [true, 'Pozicija negali buti desimtainis skaicius'];
    }

    return [false, text[position]];
}

const r1 = letter();
console.log(r1);

const r2 = letter(245);
console.log(r2);

const r3 = letter('Abcde');
console.log(r3);

const r4 = letter('Bcde');
console.log(r4);

const r5 = letter('Bcde', true);
console.log(r5);

const r6 = letter('Bcde', -1);
console.log(r6);

const r7 = letter('Bcde', 0.1);
console.log(r7);

const r8 = letter('Bcde', 4);
console.log(r8);

const r9 = letter('Bcde', 3);
console.log(r9);

const r10 = letter('Bcde', Infinity);
console.log(r10);

const r11 = letter('Bcde', NaN);
console.log(r11);

const r12 = letter('', 0);
console.log(r12);

const r13 = letter('           ', 5);
console.log(r13);