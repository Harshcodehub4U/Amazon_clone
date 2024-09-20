let imgs = document.querySelectorAll(".slider ul img")
let prev = document.querySelector(".control-prev")
let next = document.querySelector(".control-next")

let n = 0;

function changeSlide(){
    for (let i = 0;i < imgs.length;i++) {
        imgs[i].style.display = 'none' ;
    }
    imgs[n].style.display = 'block' ;
}
changeSlide();

prev.addEventListener('click',()=>{
    if(n>0){
        n--;
    }else{
        n = imgs.length-1;
    }
    changeSlide();
})

next.addEventListener('click',()=>{
    if(n < imgs.length -1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})
let scroll = document.querySelectorAll(".products");
for (let i of scroll){
    i.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        i.scrollLeft += evt.deltaY;
    });
} 