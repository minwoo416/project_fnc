/* 헤더 */
const menu = document.querySelector('header .menu');
const hiddenMenu = document.querySelector('header .hidden_container');
const menuClose = document.querySelector('header .hidden_container .hidden_menu_close');
/* about,history */
const cateBtn = document.querySelectorAll('.category li button');
const about = document.querySelector('.company_wrap .about')
const history = document.querySelector('.company_wrap .history')
/* 푸터 */
const footer = document.querySelector('footer');

window.addEventListener('scroll',()=>{
    console.log(scrollY);
})

/* 초기값 */
cateBtn[0].classList.add('active');
cateBtn.forEach((obj,idx)=>{
    obj.addEventListener('click',()=>{
        if(idx == 0){
            history.style.display = 'none'
            about.style.display = 'flex';
            cateBtn[1].classList.remove('active');
            cateBtn[0].classList.add('active');
        }else {
            about.style.display = 'none';
            history.style.display = 'flex'
            cateBtn[0].classList.remove('active');
            cateBtn[1].classList.add('active');
        }
    })
})

footer.style.display = 'block';
menu.addEventListener('click',()=>{
    /* hiddenMenu.style.display = 'block'; */
    hiddenMenu.classList.add('active');
    menuClose.addEventListener('click',()=>{
        /* hiddenMenu.style.display = 'none'; */
        hiddenMenu.classList.remove('active');
    })
})