const postID = window.location.search.substring(4);
const postContainer = document.querySelector('.post-container');
const commentsContainer = document.querySelector('.comments-container')

fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
.then((res) => res.json())
.then((res => renderPost(res)));

fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
  .then((res) => res.json())
  .then((res) => renderComments(res));
const getUserName = (userId) =>{
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .then((res) => res);
};
const renderPost = async (data) => {
  const postTitle = document.createElement('h2');
  postTitle.append(`${data.title}`);
  const postBody = document.createElement('p');
  postBody.classList.add('post-body');
  postBody.append(`${data.body}`);
  const user = await getUserName(data.userId);
  postContainer.append(postTitle);
  postContainer.append(postBody);
  postContainer.append(`Author: ${user.name}`);
}

const renderComments = (data) => {
  commentsContainer.innerHTML += `<h5> Comments: </h5>`;
  for (let comment of data) {
    const comm = document.createElement('div');
    comm.classList.add('comment');
    commentsContainer.append(comm);
    const commTitle = document.createElement('h5');
    commTitle.append(comment.name);
    comm.append(commTitle);
    const commText = document.createElement('p');
    commText.append(comment.body);
    comm.append(commText);
    const email = document.createElement('p');
    email.append(comment.email);
    comm.append(email);
  }
}