const usersContainer = document.querySelector('.users');


let data = fetch('https://jsonplaceholder.typicode.com/users');
data.then((res) => res.json()).then((res) => renderUser(res));

const renderUser = (users) => {
  users.forEach((user) => {
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
    usersContainer.append(col);
  })
}

console.log(data);


// <div className="col">
//   <div className="card">
//     <div className="card-body">
//       <h5 className="card-title">Name</h5>
//        <p class= card-subtitle username
//       <p className="card-text">
//         Some quick example text to build on the card title and make up the bulk of the
//         card's content.
//       </p>
//       <a href="#" className="btn btn-success">Go somewhere</a>
//     </div>
//   </div>
// </div>