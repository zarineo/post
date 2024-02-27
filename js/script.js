const postsContainer = document.querySelector('.row');


let data = fetch('https://jsonplaceholder.typicode.com/posts');
// data.then(response => response.json());
// data.then(json => console.log(json));
data.then((res) => res.json()).then((res) => renderPost(res));
//(res) - первый аргумент - это данные, которые мы получили от сервера?
//получается, то, что в скобках, это аргумент, а я строкой ниже уже передаю параметр? поэтому не выдает ошибку?

const renderPost = (posts) => {
  posts.forEach((post) => {
    const text = document.createElement('p');
    text.classList.add('card-text');
    text.append(post.body);
    const title = document.createElement('H5');
    title.classList.add('card-title');
    title.append(post.title);
    const body = document.createElement('div');
    const btn = document.createElement('a');
    btn.classList.add('btn', 'btn-success');
    btn.append('Перейти к посту')
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
    postsContainer.append(col);
  })
}

console.log(data);


// <div className="col">
//   <div className="card">
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">
//         Some quick example text to build on the card title and make up the bulk of the
//         card's content.
//       </p>
//       <a href="#" className="btn btn-success">Go somewhere</a>
//     </div>
//   </div>
// </div>