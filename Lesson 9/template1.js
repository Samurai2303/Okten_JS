// - Є масив:

let array = ['Main', 'Products', 'About us', 'Contacts'];

// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let menu = document.getElementsByClassName('menu')[0];
for (let string of array) {
    let li = document.createElement('li');
    li.innerText = string;
    menu.appendChild(li);
}
