let nav = document.getElementById('perm-nav');

let navIsVisible = false;

window.addEventListener('scroll',()=>{
    if(window.scrollY > 94){
        if(!navIsVisible){
            swipeNav();
        }
    }else{
        if(navIsVisible){
            swipeNav();
        }
    }
})

function swipeNav(){
    navIsVisible = !navIsVisible;
    nav.classList.toggle('hide');
}