/* 헤더 */
const menu = document.querySelector('header .menu');
const hiddenMenu = document.querySelector('header .hidden_container');
const menuClose = document.querySelector('header .hidden_container .hidden_menu_close');

menu.addEventListener('click',()=>{
    /* hiddenMenu.style.display = 'block'; */
    hiddenMenu.classList.add('active');
    menuClose.addEventListener('click',()=>{
        /* hiddenMenu.style.display = 'none'; */
        hiddenMenu.classList.remove('active');
    })
})