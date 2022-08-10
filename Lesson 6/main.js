// - Знайти та вивести довижину настипних стрінгових значень
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

console.log('-----------');

// - Перевести до великого регістру наступні стрінгові значення

let upStr1 = str1.toUpperCase();
let upStr2 = str2.toUpperCase();
let upStr3 = str3.toUpperCase();

// - Перевести до нижнього регістру настипні стрінгові значення

upStr1.toLowerCase();
upStr2.toLowerCase();
upStr3.toLowerCase();

// - Є "брудна" стрінга . Почистити її від зайвих пробілів.

let str = ' dirty string   ';

str.substring(0, 2);
str.substring(13, str.length);

console.log(str);

console.log('-----------');

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

function stringToarray(str) {
    return str.split(' ');
}

let string = 'Ревуть воли як ясла повні';
let arr = stringToarray(string);
console.log(arr);

console.log('-----------');

// - є масив чисел  . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr1 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let map = arr1.map((value) => `${value}`);
console.log(map);

console.log('-----------');

// - створити функцію , яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(arr, direction) {
    switch (direction) {
        case 'ascending':
            arr.sort((a, b) => a - b);
            break;
        case 'descending':
            arr.sort((a, b) => b - a);
            break;
    }
    return arr;
}

let nums = [11, 21, 3];

sortNums(nums, 'ascending');
console.log(nums);

console.log('-----------');

// function sortNums(arr, direction) {
//     switch (direction) {
//         case 'ascending':
//             arr.sort((a, b) => {
//                 if (a > b) {
//                     return 1;
//                 } else if (a < b) {
//                     return -1;
//                 } else if (a === b) {
//                     return 0;
//                 }
//             });
//             break;
//         case 'descending':
//             arr.sort((a, b)=>{
//                 if (a > b) {
//                     return -1;
//                 }else if (a < b) {
//                     return 1;
//                 }else if (a===b) {
//                     return 0;
//                 }
//             });
//     }
//     console.log(arr);
// }


// - є масив
// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);

console.log('-----------');

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filtered = coursesAndDurationArray.filter((value) => value.monthDuration > 5);
console.log(filtered);

console.log('-----------');

// описати колоду карт

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {value: 6, cardSuit: 'spade', color: 'black'},
    {value: 6, cardSuit: 'club', color: 'black'},
    {value: 6, cardSuit: 'heart', color: 'red'},
    {value: 6, cardSuit: 'diamond', color: 'red'},
    {value: 7, cardSuit: 'spade', color: 'black'},
    {value: 7, cardSuit: 'club', color: 'black'},
    {value: 7, cardSuit: 'heart', color: 'red'},
    {value: 7, cardSuit: 'diamond', color: 'red'},
    {value: 8, cardSuit: 'spade', color: 'black'},
    {value: 8, cardSuit: 'club', color: 'black'},
    {value: 8, cardSuit: 'heart', color: 'red'},
    {value: 8, cardSuit: 'diamond', color: 'red'},
    {value: 9, cardSuit: 'spade', color: 'black'},
    {value: 9, cardSuit: 'club', color: 'black'},
    {value: 9, cardSuit: 'heart', color: 'red'},
    {value: 9, cardSuit: 'diamond', color: 'red'},
    {value: 10, cardSuit: 'spade', color: 'black'},
    {value: 10, cardSuit: 'club', color: 'black'},
    {value: 10, cardSuit: 'heart', color: 'red'},
    {value: 10, cardSuit: 'diamond', color: 'red'},
    {value: 'jack', cardSuit: 'spade', color: 'black'},
    {value: 'jack', cardSuit: 'club', color: 'black'},
    {value: 'jack', cardSuit: 'heart', color: 'red'},
    {value: 'jack', cardSuit: 'diamond', color: 'red'},
    {value: 'queen', cardSuit: 'spade', color: 'black'},
    {value: 'queen', cardSuit: 'club', color: 'black'},
    {value: 'queen', cardSuit: 'heart', color: 'red'},
    {value: 'queen', cardSuit: 'diamond', color: 'red'},
    {value: 'king', cardSuit: 'spade', color: 'black'},
    {value: 'king', cardSuit: 'club', color: 'black'},
    {value: 'king', cardSuit: 'heart', color: 'red'},
    {value: 'king', cardSuit: 'diamond', color: 'red'},
    {value: 'ace', cardSuit: 'spade', color: 'black'},
    {value: 'ace', cardSuit: 'club', color: 'black'},
    {value: 'ace', cardSuit: 'heart', color: 'red'},
    {value: 'ace', cardSuit: 'diamond', color: 'red'}
];

// - знайти піковий туз

console.log(cards.find(value => value.value === 'ace' && value.cardSuit === 'spade'));

console.log('-----------');

// - всі шістки

console.log(cards.filter(value => value.value === 6));

console.log('-----------');

// - всі червоні карти

console.log(cards.filter(value => value.color === "red"));

console.log('-----------');

// - всі буби

console.log(cards.filter(value => value.cardSuit === "diamond"));

console.log('-----------');

// - всі трефи від 9 та більше

console.log(cards.filter(value => {
    if (value.cardSuit === "club") {
        switch (value.value) {
            case 9:
                return value;
            case 10:
                return value;
            case 'jack':
                return value;
            case 'queen':
                return value;
            case 'king':
                return value;
            case 'ace':
                return value;
        }
    }
}));

// console.log(cards.filter((value, index) => {
//     if (value.cardSuit === "club" && index >= 12) {
//         return value;
//     }
// }));

console.log('-----------');

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт

let reduced = cards.reduce((previousValue, currentValue) => {
    switch (currentValue.cardSuit) {
        case 'spade':
            previousValue.spades.push(currentValue);
            break;
        case 'club':
            previousValue.clubs.push(currentValue);
            break;
        case 'heart':
            previousValue.hearts.push(currentValue);
            break
        case 'diamond':
            previousValue.diamonds.push(currentValue);
    }
    return previousValue;
}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(reduced);


