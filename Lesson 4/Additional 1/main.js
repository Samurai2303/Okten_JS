// --створити масив з:
//     - з 5 числових значень

let a1 = [1, 2, 0, 23, -46];

// - з 5 стічкових значень

let a2 = ['hi', 'my', 'name', 'is', 'Andrii'];

// - з 5 значень стрічкового, числового та булевого типу

let a3 = [123, 'asd', 'dsa', true, false];

// - та вивести його в консоль

console.log(a1);
console.log(a2);
console.log(a3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let b = [];
b[0] = 7847;
b[1] = true;
b[2] = 'word';
b[3] = -773;
b[4] = false;
console.log(b);

// - є масив  :

let c = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

let i1 = 0;
while (i1 < c.length) {
    document.write(`<div>${c[i1]}</div>`);
    i1++;
}

document.write('----------------');

//     2. перебрати його циклом for

for (let i = 0; i < c.length; i++) {
    document.write(`<div>${c[i]}</div>`)
}

document.write('----------------');

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let i2 = 0;
while (i2 < c.length) {
    if (i2 % 2 === 1) {
        document.write(`<div>${c[i2]}</div>`);
    }
    i2++;
}

document.write('----------------');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < c.length; i++) {
    if (i % 2 === 1) {
        document.write(`<div>${c[i]}</div>`);
    }
}

document.write('----------------');

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let i3 = 0;
while (i3 < c.length) {
    if (c[i3] % 2 === 0) {
        document.write(`<div>${c[i3]}</div>`);
    }
    i3++;
}

document.write('----------------');

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < c.length; i++) {
    if (c[i] % 2 === 0) {
        document.write(`<div>${c[i]}</div>`);
    }
}

document.write('----------------');

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i<c.length;i++) {
    if (c[i] % 3 === 0) {
        c[i] = 'okten';
    }
}

c[3] = 6;
c[6] = 45;
c[7] = 66;
c[9] = -18;

// 8. вивести масив в зворотньому порядку.

for (let i = c.length - 1; i >= 0; i--) {
    document.write(`<div>${c[i]}</div>`);
}

document.write('----------------');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let i4 = c.length - 1;
while (i4 >= 0) {
    document.write(`<div>${c[i4]}</div>`);
    i4--;
}

document.write('----------------');

for (let i = c.length - 1; i >= 0; i--) {
    document.write(`<div>${c[i]}</div>`);
}

document.write('----------------');

let i5 = c.length - 1;
while (i5 >= 0) {
    if (i5 % 2 === 1) {
        document.write(`<div>${c[i5]}</div>`);
    }
        i5--;
}

document.write('----------------');

for (let i = c.length - 1; i >= 0; i--) {
    if (i % 2 === 1) {
        document.write(`<div>${c[i]}</div>`);
    }
}

document.write('----------------');

let i6 = c.length - 1;
while (i6 >= 0) {
    if (c[i6] % 2 === 0) {
        document.write(`<div>${c[i6]}</div>`);
    }
    i6--;
}

document.write('----------------');

for (let i = c.length - 1; i >= 0; i--) {
    if (c[i] % 2 === 0) {
        document.write(`<div>${c[i]}</div>`);
    }
}

document.write('----------------');


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор