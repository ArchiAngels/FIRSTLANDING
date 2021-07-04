let nav2 = document.getElementById('nav-anim');
let btn = document.getElementById('btn-nav');

let navIsVisible = false;

btn.addEventListener('click',()=>{
    swipeNav();
})

function swipeNav(){
    navIsVisible = !navIsVisible;
    btn.innerHTML = navIsVisible?`<p>Open</p>`:`<p>Close</p>`;
    nav2.classList.toggle('hide');
}