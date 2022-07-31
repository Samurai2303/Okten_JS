// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let a = [1, 2, 3, -3, -2, 0, true, false, 'hello', "array"];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
console.log(a[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Robinson Crusoe',
    pageCount: 250,
    genre: 'Adventure'
};
console.log(book1);

let book2 = {
    title: 'Robin Hood',
    pageCount: 140,
    genre: 'Adventure'
};
console.log(book2);

let book3 = {
    title: 'Harry Potter',
    pageCount: 400,
    genre: 'Fantasy'
};
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book4 = {
    title: 'Harry Potter',
    pageCount: 400,
    genre: 'Fantasy',
    author: ['name', 'age']
};
book4['author'][0] = 'J. K. Rowling';
book4['author'][1] = 56;
console.log(book4);

let book5 = {
    title: 'Robin Hood',
    pageCount: 140,
    genre: 'Adventure',
    author: ['name', 'age']
};
book5['author'][0] = 'folk';
book5['author'][1] = 'unknown';
console.log(book5);

let book6 = {
    title: 'Robinson Crusoe',
    pageCount: 250,
    genre: 'Adventure',
    author: ['name', 'age']
};
book6['author'][0] = 'Daniel Defoe';
book6['author'][1] = 70;
console.log(book6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'petya', username: 'user1', password: 'fsgkds92734'},
    {name: 'vika', username: 'user2', password: 'ierfu82984'},
    {name: 'anya', username: 'user2', password: 'bcsuuiwiiwu728'}
];
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);