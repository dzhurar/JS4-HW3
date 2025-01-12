// ВАРІАНТ З ПРОКРУТКОЮ

// document.addEventListener('DOMContentLoaded', () => {
//     const imgs = document.querySelectorAll('.img-item');

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             const img = entry.target.querySelector(".image");

//             if(entry.isIntersecting){
//                 img.src = img.getAttribute("data-high-res");
//             }else{
//                 img.src = img.src.replace('-high', '-low')
//             }
//         }
//     )});
//     imgs.forEach((img) => observer.observe(img));
// });




// ВАРІАНТ З КНОПКОЮ

const btn = document.querySelector('.change-button');
btn.addEventListener('click', () => {
    const imgs = document.querySelectorAll('.image');
    imgs.forEach((img) => {

        if(img.src.includes('-low')){
            img.src = img.getAttribute('data-high-res');
        } else {
            img.src = img.src.replace('-high', '-low');
        }
    }
)});