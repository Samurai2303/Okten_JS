// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let res1 = (a, b) => a * b;
console.log(res1(16, 5));

console.log('----------');

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let res2 = r => Math.round(Math.PI * r * r);
console.log(res2(10));

console.log('----------');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaOfCylinder(h, r) {
    return Math.round(2 * Math.PI * r * r + 2 * Math.PI * r * h);
}

console.log(areaOfCylinder(12, 8));

console.log('----------');

// - створити функцію яка приймає масив та виводить кожен його елемент

let x = [235, 453, 43, 'word 1', 'word 2', true, false, 342];

function arraysPrinter(array) {
    for (let i of array) {
        console.log(i);
    }
}

arraysPrinter(x);

console.log('----------');

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function textPrinter(text) {
    document.write(`<p>${text}</p>`);
}

let x1 = 'smth random text)';
textPrinter(x1);

document.write(`<div>-----------------</div>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulPrinter(text) {
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`);
}

let liText = 'Anouther text in li';
ulPrinter(liText);

document.write(`<div>-----------------</div>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function liPrinter1(text, amount) {
    document.write(`<ul>`);
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

liPrinter1(liText, 5);

document.write(`<div>-----------------</div>`);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function liPrenter3(array) {
    document.write(`<ul>`);
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

liPrenter3(x);

document.write(`<div>-----------------</div>`);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {
        id: 1,
        name: 'Andrii',
        age: 17
    },
    {
        id: 2,
        name: 'Vicka',
        age: 16
    },
    {
        id: 3,
        name: 'Kita',
        age: 19
    },
    {
        id: 4,
        name: 'Denya',
        age: 23
    },
    {
        id: 5,
        name: 'Tanya',
        age: 35
    },
    {
        id: 6,
        name: 'Sasha',
        age: 36
    },
    {
        id: 7,
        name: 'Milla',
        age: 15
    },
    {
        id: 8,
        name: 'Karina',
        age: 14
    },
    {
        id: 9,
        name: 'Max',
        age: 65
    },
    {
        id: 10,
        name: 'Vasya',
        age: 12
    }
];

function usersTable(arrayOfObjects) {
    document.write(`<div class="wrap">`);
    for (let user of arrayOfObjects) {
        document.write(`<div class="user">
        <p class="text">ID - ${user["id"]}</p>
        <p class="text">Name - ${user["name"]}</p>
        <p class="text">Age - ${user["age"]}</p>
    </div>`);
    }
    document.write(`</div>`);
}

usersTable(users);

document.write(`<div>-----------------</div>`);

// - створити функцію яка повертає найменьше число з масиву

let numbers = [2, 32, -2, 3, -20, 1, 1.7, 34, 5, 545, -34, 32.3, 8, 2, 0, 6, 43];

function smallestNumber(arrayOfNumbers) {
    let sNum = arrayOfNumbers[0];
    for (let i of arrayOfNumbers) {
        if (sNum > i) {
            sNum = i;
        }
    }
    return sNum;
}

console.log(smallestNumber(numbers));

console.log('----------');

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function addAllNumbers(arrayOfNumbers) {
    let res3 = 0;
    for (let i of arrayOfNumbers) {
        res3 += i;
    }
    return res3;
}

console.log(addAllNumbers(numbers));


