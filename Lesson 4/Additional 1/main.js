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

console.log('*********');

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let b = [];
b[0] = 7847;
b[1] = true;
b[2] = 'word';
b[3] = -773;
b[4] = false;
console.log(b);

console.log('*********');

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

for (let i = 0; i < c.length; i++) {
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

for (let i = c.length - 1; i >= 0; i--) {
    if (c[i] % 3 === 0) {
        c[i] = 'okten';
    }
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let d1 = [23, 43.43, 3452, -27, -3.25, 0, 12, -435, 14, 90];
for (let i of d1) {
    console.log(i);
}

console.log('*********');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let d2 = ['I', 'am', 'the', 'happiest', 'person', 'in', 'the', 'world', '!!', '!'];
for (let i of d2) {
    console.log(i);
}

console.log('*********');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let d3 = [true, false, null, undefined, NaN, 0, 'word', 123, -321, 23.25];
for (let i of d3) {
    console.log(i);
}

console.log('*********');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let e = [false, 42, 'mario', true, 655, 'rules', 'words', -77.8, true, 0];
for (let i of e) {
    if (typeof i === "boolean") {
        document.write(`<div>${i}</div>`);
    }
}

document.write('----------------');

for (let i of e) {
    if (typeof i === "number") {
        document.write(`<div>${i}</div>`);
    }
}

document.write('----------------');

for (let i of e) {
    if (typeof i === "string") {
        document.write(`<div>${i}</div>`);
    }
}

document.write('----------------');

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let f = [];
f[0] = 14;
f[1] = 24;
f[2] = 'air';
f[3] = undefined;
f[4] = true;
f[5] = "string";
f[6] = NaN;
f[7] = 111;
f[8] = -11.1;
f[9] = "ok";
for (let i of f) {
    console.log(i);
}

console.log('*********');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(`<div>`);
for (let i = 0; i <= 9; i++) {
    console.log(i);
    document.write(`${i} - `);
}
document.write(`</div>`);

console.log('*********');
document.write('----------------');

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(`<div>`);
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i} - `);
}
document.write(`</div>`);

console.log('*********');
document.write('----------------');

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

document.write(`<div>`);
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`${i} - `);
}
document.write(`</div>`);

console.log('*********');
document.write('----------------');

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

document.write(`<div>`);
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`${i} - `);
    }
}
document.write(`</div>`);

console.log('*********');
document.write('----------------');

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

document.write(`<div>`);
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(`${i} - `);
    }
}
document.write(`</div>`);

console.log('*********');
document.write('----------------');

// створити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: 'Robinson Crusoe',
        pageCount: 250,
        author: ['Daniel Defoe'],
        genre: ['Adventure', 'novel', 'historical']
    },
    {
        title: 'Harry Potter',
        pageCount: 500,
        author: ['J. K. Rowling'],
        genre: ['Fantasy', 'novel', 'thriller', 'magical realism', 'childrens literature']
    },
    {
        title: 'Robin Hood',
        pageCount: 140,
        author: ['folk', 'Mikhail Gershenzon'],
        genre: ['Adventure', 'novel', 'historical', 'legend', 'childrens literature', 'chivalric novel']
    }
];

// -знайти наібльшу книжку.

let maxPages = books[0];
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    if (book["pageCount"] > maxPages["pageCount"]) {
        maxPages = book;
    }
}
document.write(`<div>${maxPages["title"]}</div>`)

document.write('----------------');

// - знайти книжку/ки з найбільшою кількістю жанрів

let maxGenres = books[0];
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    if (maxGenres["genre"].length < book["genre"].length) {
        maxGenres = book;
    }
}
document.write(`<div>${maxGenres["title"]}</div>`);

document.write('----------------');

// - знайти книжку/ки з найдовшою назвою

let longestTitle = books[0];
for (let book of books) {
    if (longestTitle["title"].length < book["title"].length) {
        longestTitle = book;
    }
}
document.write(`<div>${longestTitle["title"]}</div>`);

document.write('----------------');

// - знайти книжку/ки які писали 2 автори

for (let book of books) {
    if (book["author"].length === 2) {
        document.write(`<div>${book["title"]}</div>`);
    }
}

document.write('----------------');

// - знайти книжку/ки які писав 1 автор

for (let book of books) {
    if (book["author"].length === 1) {
        document.write(`<div>${book["title"]}</div>`);
    }
}
document.write('----------------');