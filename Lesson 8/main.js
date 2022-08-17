// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [];
users[0] = new User(1, 'vasya', 'petrov', 'petrovV@gmail.com', +380963465487);
users[1] = new User(2, 'petya', 'vasyov', 'petrovP@gmail.com', +380965755487);
users[2] = new User(3, 'ira', 'petrova', 'petrovaI@gmail.com', +380967655487);
users[3] = new User(4, 'kira', 'petrova', 'petrovaK@gmail.com', +3809124565487);
users[4] = new User(5, 'vika', 'petrova', 'petrovaV@gmail.com', +38096392487);
users[5] = new User(6, 'andrii', 'petrov', 'petrovA@gmail.com', +380969055487);
users[6] = new User(7, 'oleg', 'petrov', 'petrovO@gmail.com', +380963435587);
users[7] = new User(8, 'katya', 'petrova', 'petrovaKa@gmail.com', +3809069265487);
users[8] = new User(9, 'kita', 'petrov', 'petrovK@gmail.com', +380963465456);
users[9] = new User(10, 'galya', 'petrova', 'petrovaG@gmail.com', +380963465652);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(value => value.id % 2 ? false : value));

console.log('--------------');

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsers = users.sort((a, b) => a.id - b.id);

console.log(sortedUsers);

console.log('--------------');

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let order1 = ['coffee', 'tea', 'cookies', 'water', 'juice', 'candies', 'chocolate bar', 'coca-cola'];
let order2 = ['meat', 'fish', 'ice cream', 'melon', 'watermelon', 'potato'];
let order3 = ['oranges', 'whiskey', 'beer', 'apples', 'yogurt', 'tomatoes', 'cheese'];

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [];
clients[0] = new Client(1, 'vova', 'ivanov', 'ivanovV@gmail.com', +380989546731, order1);
clients[1] = new Client(2, 'vanya', 'vaniov', 'vaniov@gmail.com', +380989546553, order3);
clients[2] = new Client(3, 'kiril', 'maxov', 'maxov@gmail.com', +380989546876, order1);
clients[3] = new Client(4, 'max', 'vladov', 'vladovV@gmail.com', +380989546321, order2);
clients[4] = new Client(5, 'vlad', 'koliov', 'koliov@gmail.com', +380989546754, order1);
clients[5] = new Client(6, 'kolya', 'antonov', 'antonov@gmail.com', +380989546987, order2);
clients[6] = new Client(7, 'anton', 'gryc', 'gryc@gmail.com', +380989546098, order3);
clients[7] = new Client(8, 'ivan', 'andriychuk', 'andriychuk@gmail.com', +380989546765, order3);
clients[8] = new Client(9, 'andrii', 'romanov', 'romanov@gmail.com', +380989546543, order3);
clients[9] = new Client(10, 'roma', 'vovovych', 'vovovych@gmail.com', +380989546123, order2);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClients = clients.sort((a, b) => a.order.length - b.order.length);

console.log(sortedClients);

console.log('--------------');

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, yearOfProduction, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.yearOfProduction = yearOfProduction;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`model - ${model}`);
        console.log(`producer - ${producer}`);
        console.log(`yearOfProduction - ${yearOfProduction}`);
        console.log(`maxSpeed - ${maxSpeed}`);
        console.log(`engineVolume - ${engineVolume}`);      //Це тут треба стільки разів писати log чи може можна було б якось через цикл?
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newValue) {
        this.yearOfProduction = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('camry', 'toyota', 2016, 190, 3.2);

console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(200);
car.changeYear(2018);
car.addDriver({name: 'Max', age: 34});

console.log(car);

console.log('--------------');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {
    constructor(model, producer, yearOfProduction, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.yearOfProduction = yearOfProduction;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.drive = function () {
            console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`);
        }
        this.info = function () {
            console.log(`model - ${model}`);
            console.log(`producer - ${producer}`);
            console.log(`yearOfProduction - ${yearOfProduction}`);
            console.log(`maxSpeed - ${maxSpeed}`);
            console.log(`engineVolume - ${engineVolume}`);
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed = newSpeed;
        }
        this.changeYear = function (newValue) {
            this.yearOfProduction = newValue;
        }
        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }

}


car2 = new Car1('F-150', 'Ford', 2022, 170, 5.6);

console.log(car2);

console.log('--------------');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderellas = [];

cinderellas[0] = new Cinderella('Cinderella 1', 18, 30);
cinderellas[1] = new Cinderella('Cinderella 2', 19, 31);
cinderellas[2] = new Cinderella('Cinderella 3', 18, 32);
cinderellas[3] = new Cinderella('Cinderella 4', 19, 33);
cinderellas[4] = new Cinderella('Cinderella 5', 19, 34);
cinderellas[5] = new Cinderella('Cinderella 6', 18, 35);
cinderellas[6] = new Cinderella('Cinderella 7', 18, 36);
cinderellas[7] = new Cinderella('Cinderella 8', 19, 37);
cinderellas[8] = new Cinderella('Cinderella 9', 19, 38);
cinderellas[9] = new Cinderella('Cinderella 10', 18, 39);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

function Prince(name, age, sizeOfShoe) {
    this.name = name;
    this.age = age;
    this.sizeOfShoe = sizeOfShoe;
}

let prince = new Prince('Petya', 25, 35);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (let i = 0; i < cinderellas.length; i++) {
    cinderellas[i].footSize === prince.sizeOfShoe ? console.log(cinderellas[i]) : false;
}

console.log('--------------');

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

cinderellas.find(value => value.footSize === prince.sizeOfShoe ? console.log(value) : false);


