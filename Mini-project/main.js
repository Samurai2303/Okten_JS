// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users => {
        for (let user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');

            let p = document.createElement('p');
            p.innerText = `Id - ${user.id}
            Name - ${user.name}`;
            userDiv.appendChild(p);

            let button = document.createElement('button');
            button.innerText = 'More Details';
            button.onclick = function () {
                location.href = `user-details.html?userinfo=${JSON.stringify(user)}`;
            }
            userDiv.appendChild(button);

            document.getElementsByClassName('wrap')[0].appendChild(userDiv);
        }
    }))

