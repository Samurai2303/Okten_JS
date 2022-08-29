// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let post = JSON.parse(new URL(location.href).searchParams.get('post'));

let postInfo = document.createElement('div');
postInfo.classList.add('postInfo');
postInfo.innerText = `User id - ${post.userId}
Id - ${post.id}
Title - ${post.title}
Body - ${post.body}`;
document.body.appendChild(postInfo);

let commentsDiv = document.createElement('div');
commentsDiv.classList.add('comments');
document.body.appendChild(commentsDiv);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(respose => respose.json())
    .then(comments => {
        for (let comment of comments) {
            let commentDiv = document.createElement('div');
            commentDiv.innerText = `Id - ${comment.id}
            Name - ${comment.name}
            Email - ${comment.email}
            Body - ${comment.body}`;
            commentsDiv.appendChild(commentDiv);

        }
    })

