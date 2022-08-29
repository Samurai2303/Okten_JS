// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let user = JSON.parse(new URL(location.href).searchParams.get('userinfo'));

let userDiv = document.createElement('div');
userDiv.classList.add('userDiv');
document.body.appendChild(userDiv);

let userInfo = document.createElement('div');
userInfo.innerText = `Id - ${user.id}
Name - ${user.name}
Username - ${user.username}
Email - ${user.email}
Phone - ${user.phone}`;
userDiv.appendChild(userInfo);

let userAddress = document.createElement('div');
userDiv.appendChild(userAddress);

let p = document.createElement('p');
p.innerText = `City - ${user.address.city}
Street - ${user.address.street}
Suite - ${user.address.suite}
Zipcode - ${user.address.zipcode}`;
userAddress.appendChild(p);

let geo = document.createElement('p');
geo.innerText = `Lat = ${user.address.geo.lat}
Lng = ${user.address.geo.lng}`;
userAddress.appendChild(geo);

let userCompany = document.createElement('div');
userCompany.innerText = `Company name - ${user.company.name}
Website - ${user.website}
Bs - ${user.company.bs}
Catchphrase - ${user.company.catchPhrase}`;
userDiv.appendChild(userCompany);

let button = document.createElement('button');
button.classList.add('showPosts');
button.innerText = 'Post of current user';
document.body.appendChild(button);
button.onclick = function () {
    postsTitle.style.display = 'flex';
}

let postsTitle = document.createElement('div');
postsTitle.classList.add('postsTitle');
document.body.appendChild(postsTitle);

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(response => response.json())
    .then(posts => {
        for (let post of posts) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('postDiv');
            postsTitle.appendChild(postDiv);

            let title = document.createElement('p');
            title.innerText = `${post.title}`;
            postDiv.appendChild(title);

            let postButton = document.createElement('button');
            postButton.classList.add('postButton');
            postButton.innerText = 'Details';
            postButton.onclick = function () {
                location.href = `post-details.html?post=${JSON.stringify(post)}`;
            }
            postDiv.appendChild(postButton);
        }
    });
