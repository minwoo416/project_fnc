/* 헤더 */
const menu = document.querySelector('header .menu');
const hiddenMenu = document.querySelector('header .hidden_container');
const menuClose = document.querySelector('header .hidden_container .hidden_menu_close');
/* 카테고리 */
const cate = document.querySelectorAll('.category li button');
/* 내용 */
const artists = document.querySelectorAll('.artists_wrap > div');
/* 초기값 */
cate[0].classList.add('active');
artists[0].style.display = 'block';
/* 카테고리와 내용 보여지기 */
function cateNone(){
    cate.forEach((obj)=>{
        obj.classList.remove('active');
    })
}
cate.forEach((obj,idx)=>{
    obj.addEventListener('click',()=>{
        cateNone();
        artists.forEach((artists,index)=>{
            if(idx == index){
                obj.classList.add('active');
                artists.style.display = 'block';
            }else {
                artists.style.display = 'none';
            }
        })
    })
})


menu.addEventListener('click',()=>{
    /* hiddenMenu.style.display = 'block'; */
    hiddenMenu.classList.add('active');
    menuClose.addEventListener('click',()=>{
        /* hiddenMenu.style.display = 'none'; */
        hiddenMenu.classList.remove('active');
    })
})