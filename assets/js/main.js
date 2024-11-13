let toggleBtn = document.querySelector('#toggle-btn');
let toggleX = document.querySelector('#toggle-x');


let nav = document.querySelector('.nav');
    nav.style.display = 'none';
toggleBtn.addEventListener('click', ()=>{
    nav.style.display = 'flex';
    toggleBtn.style.display = 'none';
    toggleX.style.display = 'block';
});