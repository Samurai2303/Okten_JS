// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsonsDiv = document.createElement('div');
simpsonsDiv.classList.add('simpsonsDiv');
document.body.appendChild(simpsonsDiv);
for (let simpson of simpsons) {
    let simpsonDiv = document.createElement('div');
    simpsonDiv.classList.add('member');
    simpsonsDiv.appendChild(simpsonDiv);
    let p = document.createElement('p');
    p.classList.add('name');
    p.innerText = `${simpson.name} ${simpson.surname} - ${simpson.age} years`;
    let img = document.createElement('img');
    img.src = simpson.photo;
    img.alt = `${simpson.name}`;
    let info = document.createElement('p');
    info.classList.add('info');
    info.innerText = `${simpson.info}`;
    simpsonDiv.append(p, img, info);
}

// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

let coursesDiv = document.createElement('div');
coursesDiv.classList.add('coursesDiv');
document.body.appendChild(coursesDiv);
for (let course of coursesArray) {
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('courseDiv');
    coursesDiv.appendChild(courseDiv);
    let title = document.createElement('p');
    title.classList.add('titleOfCourse');
    title.innerText = `Title - ${course.title}`;
    let wrap = document.createElement('div');
    wrap.classList.add('wrap');
    let monthDuration = document.createElement('p');
    monthDuration.classList.add('monthDuration');
    monthDuration.innerText = `Months - ${course.monthDuration}`;
    let hourDuration = document.createElement('p');
    hourDuration.classList.add('hourDuration');
    hourDuration.innerText = `Hours - ${course.hourDuration}`;
    wrap.append(monthDuration, hourDuration);
    let ul = document.createElement('ul');
    ul.classList.add('ul');
    for (let item of course.modules) {
        let li = document.createElement('li');
        li.classList.add('li');
        li.innerText = `${item}`;
        ul.appendChild(li);
    }
    courseDiv.append(title, wrap, ul);
}

// ------------------
//     - створити блок,

let div = document.createElement('div');
div.innerText = 'lorem ipsum';

//     - додати йому класи wrap, collapse, alpha, beta

div.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

div.style.background = 'lightgreen';
div.style.color = 'darkblue';
div.style.fontSize = '20px';
div.style.margin = '20px';

// - додати цей блок в body.

document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.

let clone = div.cloneNode(true);
document.body.appendChild(clone);


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationDiv = document.createElement('div');
coursesAndDurationDiv.classList.add('coursesAndDuration')
document.body.appendChild(coursesAndDurationDiv);
for (let item of coursesAndDurationArray) {
    let courseAndDuration = document.createElement('div');
    courseAndDuration.innerText = `${item.title} - ${item.monthDuration} months`;
    coursesAndDurationDiv.appendChild(courseAndDuration);
}

// - Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let coursesAndDuration1 = document.createElement('div');
coursesAndDuration1.classList.add('coursesAndDuration1');
document.body.appendChild(coursesAndDuration1);
for (let item of coursesAndDurationArray1) {
    let courseAndDuration1 = document.createElement('div');
    courseAndDuration1.classList.add('item');
    coursesAndDuration1.appendChild(courseAndDuration1);
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = item.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = item.monthDuration;
    courseAndDuration1.append(h1, p);
}

//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let wrapDivText = document.createElement('div');
document.body.appendChild(wrapDivText);
wrapDivText.classList.add('wrapDivText');
let idDiv = document.createElement('div');
idDiv.setAttribute('id', 'text');
let button = document.createElement('button');
button.classList.add('button1');
button.onclick = function () {
    if (idDiv.style.display === 'block') {
        idDiv.style.display = 'none';
    } else {
        idDiv.style.display = 'block';
    }
}
wrapDivText.append(button, idDiv);

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let inputDiv = document.createElement('div');
inputDiv.classList.add('inputDiv');
document.body.appendChild(inputDiv);
let input = document.createElement('input');
let button2 = document.createElement('button');
input.setAttribute('name', 'age');
input.setAttribute('type', 'number');
button2.onclick = function () {
    if (input.value >= 18) {
        console.log('Your age is more than 18');
    } else {
        console.log('Your age is less than 18');
    }
}
inputDiv.append(input, button2);

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let wrapForForm = document.createElement('div');
wrapForForm.classList.add('wrapForForm')
document.body.appendChild(wrapForForm);
let inputLine = document.createElement('input');
let inputCells = document.createElement('input');
let inputContent = document.createElement('input');
let buttonTable = document.createElement('button');
inputLine.setAttribute('type', 'number');
inputCells.setAttribute('type', 'number');
inputContent.setAttribute('type', 'text');
inputLine.setAttribute('placeholder', 'Amount of lines');
inputCells.setAttribute('placeholder', 'Amount of cells');
inputContent.setAttribute('placeholder', 'Content');
wrapForForm.append(inputLine, inputCells, inputContent, buttonTable);
buttonTable.onclick = function () {
    let mainWrap = document.createElement('div');
    document.body.appendChild(mainWrap);
    mainWrap.classList.add('mainWrap');
    for (let i = 0; i < inputLine.value; i++) {
        let lineDiv = document.createElement('div');
        mainWrap.appendChild(lineDiv);
        lineDiv.classList.add('lineDiv');
        for (let j = 0; j < inputCells.value; j++) {
            let cell = document.createElement('div');
            lineDiv.appendChild(cell);
            cell.classList.add('cell');
            cell.innerText = inputContent.value;
        }
    }
};

