const userID = window.location.search.substring(4);
console.log(userID);
const userContainer = document.querySelector('.user-container');
const postsContainer = document.querySelector('.posts-container')

fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
.then((res) => res.json())
.then((res => renderUser(res)));

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
   .then((res) => res.json())
   .then((res) => renderPosts(res));



const renderUser = async (user) => {
    const col = document.createElement('div');
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

    const email = document.createElement('div');
    const phone = document.createElement('div');
    const site = document.createElement('div');
    site.append(`WebSite: ${user.website}`);
    const company = document.createElement('div');
    email.classList.add('card-subtitle');
    email.append(user.email);
    phone.classList.add('card-subtitle');
    phone.append(user.phone);

    const adress = document.createElement('div');
    adress.classList.add('adress');
    const street = document.createElement('p');
    street.append(user.address.street);
    const suite = document.createElement('p');
    suite.append(user.address.suite);
    const city = document.createElement('p');
    city.append(user.address.city);
    const zipcode = document.createElement('p');
    zipcode.append(user.address.zipcode);
    adress.append(`Adress: `)
    adress.append(street, suite, city, zipcode)

    const companyName = document.createElement('div');
    companyName.classList.add('card-text');
    companyName.append(user.company.name);
    const companyPhrase = document.createElement('div');
    companyPhrase.classList.add('card-text');
    companyPhrase.append(user.company.catchPhrase);
    const companyBs = document.createElement('div');
    companyBs.classList.add('card-text');
    companyBs.append(user.company.bs);
    company.classList.add('card-subtitle');
    company.append(companyName, companyPhrase, companyBs);

    userName.append(user.username);
    cardBody.append(name, userName, email, phone, site, adress, company);
    card.append(cardBody);
    col.append(card);
    userContainer.append(col);
}

 const renderPosts = (data) => {
   postsContainer.innerHTML += `<h5> Posts: </h5>`;
   console.log(data);
   for (let post of data) {
     const postCont = document.createElement('div');
     postCont.classList.add('post');
     postsContainer.append(postCont);
     const postTitle = document.createElement('h5');
     postTitle.append(post.title);
     postCont.append(postTitle);

     const postText = document.createElement('p');
     postText.append(post.body);
     postCont.append(postText);
   }
 }