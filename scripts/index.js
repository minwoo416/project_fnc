const main = new Swiper('main .swiper',{
    direction:'vertical',
    mousewheel:true,
})
/* -----------변수모음---------- */
/* 배너 */
const bannerImg = document.querySelectorAll('.banner img');
/* 2행 연예인 */
const introduce = document.querySelectorAll('.introduce .introduce_wrap');
/* 푸터 */
const footer = document.querySelector('footer');
/* ---초기 배너 보이기--- */
bannerImg[0].classList.add('banner1');
bannerImg[1].classList.add('banner2');
/* ---------------각각 슬라이드에 왔을때 효과---------------- */
main.on('slideChange',()=>{
    /* 1행일때 */
    if(main.activeIndex == 0){
        bannerImg[0].classList.add('banner1');
        bannerImg[1].classList.add('banner2');
    }else {
        bannerImg[0].classList.remove('banner1');
        bannerImg[1].classList.remove('banner2');
    }
    /* 6행에 왔을때 풋터 */
    if(main.activeIndex == 5){
        footer.classList.add('active')
    }else{
        footer.classList.remove('active')
    }
})
/* 2행 연예인일때 마우스올리면 내용 나오기*/
introduce.forEach((obj)=>{
    obj.addEventListener('mouseover',()=>{
        obj.children[1].style.display = 'flex';
    })
    obj.addEventListener('mouseout',()=>{
        obj.children[1].style.display = 'none';
    })
})