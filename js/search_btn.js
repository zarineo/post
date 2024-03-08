const btn = document.querySelector('.btn');
const formControl = document.querySelector('.form-control');
const getSearchForm = (e) => {
    e.preventDefault();
    window.location.href = window.location.origin + `/search.html?search=${formControl.value}`;
    console.log(window.location.origin.slice(5));
    formControl.value = '';
}

btn.addEventListener('click', getSearchForm);

