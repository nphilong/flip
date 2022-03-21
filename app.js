const images = document.querySelectorAll(".wrap .image img");
console.log(images)
const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery__image img ")
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const close = document.querySelector(".close");
// console.log(galleryImg)
var currentIndex = 0;

function showGallery(){
    if(currentIndex == 0){
        prev.classList.add("hide");
    }else{
        prev.classList.remove("hide")
    }
    if(currentIndex == images.length -1){
        next.classList.add("hide");
    }else{
        next.classList.remove("hide")
    }
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show');
}

images.forEach((item, index)=>{
    item.addEventListener('click',function(){
        currentIndex = index;
        // console.log(images[currentIndex].src);
        showGallery();
    })
    
})
close.addEventListener('click',function(){
    gallery.classList.remove('show');
})
document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show');
    }
})

prev.addEventListener('click',function(){
    if(currentIndex > 0 ){
        currentIndex --;
        showGallery();
    }
});
next.addEventListener('click',function(){
    if(currentIndex < images.length -1 ){
        currentIndex ++;
        showGallery();
    }
});