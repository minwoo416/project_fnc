const main = new Swiper('main .swiper',{
    direction:'vertical',
    mousewheel:true,
})
/* -----------변수모음---------- */
/* 배너 */
const bannerImg = document.querySelectorAll('.banner img');
/* 2행 연예인 */
const introduce = document.querySelectorAll('.introduce .introduce_wrap');
const introduceTop =document.querySelector('.introduce .introduce_top');
const introduceBottom = document.querySelectorAll('.introduce .introduce_bottom .introduce_wrap');
const artistMore = document.querySelector('.introduce .introduce_bottom .artist_more')
/* 3행 비지니스 */
const businessCate = document.querySelectorAll('.business .business_title li');
const business = document.querySelectorAll('.business .business_all_wrap .business_wrap');

console.log(introduceTop,introduceBottom,artistMore,businessCate,business);
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
    /* 2행일때 */
    if(main.activeIndex == 1){
        introduceTop.classList.add('introduce1');
        artistMore.classList.add('more');
        for(let i = 0; i < introduceBottom.length; i++){
            setTimeout(()=>{
                introduceBottom[i].classList.add('introduce2')
            },500 * (i + 1));
        }
    }else {
        introduceTop.classList.remove('introduce1');
        artistMore.classList.remove('more');
        introduceBottom.forEach((obj) => {
        obj.classList.remove('introduce2');
    });
    }
    /* 6행에 왔을때 풋터 */
    if(main.activeIndex == 5){
        footer.classList.add('active')
    }else{
        footer.classList.remove('active')
    }
})
/* 3행 비지니스 카테고리 클릭시 내용 변경 */
/* 초기값*/
businessCate[0].style.borderBottom = '3px solid #E54132'
business[0].style.display = 'flex';
function businessHidden(){
    business.forEach((obj)=>{
        obj.style.display = 'none';
    })
}
function businessCateHidden(){
    businessCate.forEach((obj)=>{
        obj.style.borderBottom = '1px solid #949494';
    })
}
businessCate.forEach((cate,idx)=>{
    cate.addEventListener('click',()=>{
        businessCateHidden()
        cate.style.borderBottom = '3px solid #E54132';
        businessHidden()
        business.forEach((obj,index)=>{
            if(idx == index){
                obj.style.display = 'flex'
            }
        })
    })
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