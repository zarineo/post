const searchText = window.location.search.substring(8).replaceAll('%20', ' ');

console.log(searchText.substring(8).replaceAll('%20', ' '));

fetch('https://jsonplaceholder.typicode.com/posts?title=${searchText}')
.then(res => res.json()) //получаем ответ res и преобразовываем ему в json формат
.then(res => console.log(res))