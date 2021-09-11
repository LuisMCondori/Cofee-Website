const navbar = document.querySelector('.navbar');
const menubtn = document.querySelector('#menu-btn');
const searchbtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('.search-form');


menubtn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    menubtn.classList.toggle('fa-times');
})
searchbtn.addEventListener('click',()=>{
    searchForm.classList.toggle('active');
})
window.addEventListener('scroll',()=>{
    navbar.classList.remove('active');
    menubtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
})

