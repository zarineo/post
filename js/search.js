const searchText = window.location.search.substring(8).replaceAll('%20', ' ');
const searchContainer = document.querySelector('.search-container');

fetch(`https://jsonplaceholder.typicode.com/posts?title=${searchText}`)
.then((res) => res.json()) //получаем ответ res и преобразовываем ему в json формат
.then((res) => renderResult(res));

const renderResult = (res) => {
    for (let post of res){
        const text = document.createElement('p');
        text.classList.add('card-text');
        text.append(post.body);
        const title = document.createElement('H5');
        title.classList.add('card-title');
        title.append(post.title);
        const body = document.createElement('div');
        const btn = document.createElement('a');
        btn.innerHTML = `<a href = 'post.html?id=${post.id}' class = 'btn btn-success'> Перейти к посту`;
        body.classList.add('card-body');
        const card = document.createElement('div');
        card.classList.add('card');
        const col = document.createElement('div');
        col.classList.add('col');
        body.append(title);
        body.append(text);
        body.append(btn);
        card.append(body);
        col.append(card);
        searchContainer.append(col);
      }
}

fetch(`https://jsonplaceholder.typicode.com/users?username=${searchText}`)
.then((res) => res.json()) //получаем ответ res и преобразовываем ему в json формат
.then((res) => renderSearchUser(res))

const renderSearchUser = (data) => {
    console.log(data);
    console.log(`https://jsonplaceholder.typicode.com/users?username=${searchText}`);

    for (let user of data){
        const col= document.createElement('div');
    col.classList.add('col');
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const name = document.createElement('H5');
    name.classList.add('card-title');
    name.append(user.name);
    const userName = document.createElement('div');
    userName.classList.add('card-subtitle');

    const email =  document.createElement('div');
    const phone =  document.createElement('div');
    const site =  document.createElement('div');
    const company =  document.createElement('div');
    email.classList.add('card-subtitle');
    email.append(user.email);
    phone.classList.add('card-subtitle');
    phone.append(user.phone);
    const companyName =  document.createElement('div');
    companyName.classList.add('card-text');
    companyName.append(user.company.name);
    const companyPhrase =  document.createElement('div');
    companyPhrase.classList.add('card-text');
    companyPhrase.append(user.company.catchPhrase);
    const companyBs =  document.createElement('div');
    companyBs.classList.add('card-text');
    companyBs.append(user.company.bs);
    company.classList.add('card-subtitle');
    company.append(companyName, companyPhrase, companyBs);

    userName.append(user.username);
    cardBody.append(name, userName, email, phone, company);
    card.append(cardBody);
    col.append(card);

    const btn = document.createElement('a');
    btn.innerHTML = `<a href = 'user.html?id=${user.id}' class = 'btn btn-success'> Read more`;
    cardBody.append(btn);
    searchContainer.append(col);
    }
}

