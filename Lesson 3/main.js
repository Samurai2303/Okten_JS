// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = +prompt('Enter number');
if (a) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Enter minutes');
if (time > 0 && time <= 15) {
    console.log('First quarter');
} else if (time > 15 && time <= 30) {
    console.log('Second quarter');
} else if (time > 30 && time <= 45) {
    console.log('Third quarter');
} else if (time > 45 && time <= 60) {
    console.log('Fourth quarter');
} else {
    console.log('Try again');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Enter day');
if (day > 0 && day <= 10) {
    console.log('First part of month');
} else if (day > 10 && day <= 20) {
    console.log('Second part of month');
} else if (day > 20 && day <= 31) {
    console.log('Third part of month');
} else {
    console.log('Try again');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let timetable = {
    monday: ['breakfast', ' studing', ' cooking', ' dinner', ' studing', ' gym', ' supper'],
    tuesday: ['breakfast', ' housework', ' cooking', ' dinner', ' studing', ' having rest', ' supper'],
    wednesday: ['breakfast', ' studing', ' cooking', ' dinner', ' studing', ' gym', ' supper'],
    thursday: ['breakfast', ' housewok', ' cooking', ' dinner', ' studing', ' having rest', ' supper'],
    friday: ['breakfast', ' studing', ' cooking', ' dinner', ' studing', ' gym', ' supper'],
    saturday: ['breakfast', ' studing', ' going shopping', ' cooking', ' dinner', ' having rest', ' supper'],
    sunday: ['breakfast', ' housework', ' having rest', ' cooking', ' dinner', ' going for a walk', ' supper and watching films']
}
let number_of_day = +prompt('Enter number of day');
switch (number_of_day) {
    case 1:
        document.write(timetable["monday"]);
        break;
    case 2:
        document.write(timetable["tuesday"]);
        break;
    case 3:
        document.write(timetable["wednesday"]);
        break;
    case 4:
        document.write(timetable["thursday"]);
        break;
    case 5:
        document.write(timetable["friday"]);
        break;
    case 6:
        document.write(timetable["saturday"]);
        break;
    case 7:
        document.write(timetable["sunday"]);
        break;
    default:
        document.write('Try again');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let n1 = +prompt('Enter number 1');
let n2 = +prompt('Enter number 2');
if (!!n1 === true && !!n2 === true) {
    if (n1 > n2) {
        console.log(n1);
    } else if (n2 > n1) {
        console.log(n2);
    } else {
        console.log('Number 1 = number 2');
    }
} else {
    console.log('Try again');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let x = NaN || 'default';
console.log(x);