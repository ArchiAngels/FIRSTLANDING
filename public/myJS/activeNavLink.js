let nav = document.getElementById('perm-nav');
let screen_elems = document.getElementById('main-cont');
let fast_travel = false;

let timeUp;

let Action={
    CurrentActive:null,
    ClassName:'active-link',
    Links:nav.children,

    SetNewActive:function(id){
        if(this.CurrentActive){
            this.CurrentActive.classList.toggle(this.ClassName);
        }
        
        this.CurrentActive = this.Links[id].children[0];

        this.CurrentActive.classList.toggle(this.ClassName);
    
    }
}


nav.addEventListener('click',(e)=>{
    // console.log(e.target)
    if(e.target.tagName == 'A'){
        for(let i = 1; i < nav.children.length;i++){
            if(e.target == nav.children[i].children[0]){
                // console.log('find',nav.children[i],i)
                clearTimeout(timeUp);

                timeUp = setTimeout(()=>{
                    fast_travel = false;
                },600)

                fast_travel = true;
                return Action.SetNewActive(i);
            }
        }
    }
})

window.addEventListener('scroll',()=>{
    if(fast_travel){

    }else{
        let h = window.scrollY + (0.5*window.innerHeight);

        for(let i =0; i <screen_elems.children.length;i++){
    
            // console.log(i,screen_elems.children[i].offsetHeight,h)
            // console.log(screen_elems.children[i].offsetTop,h,screen_elems.children[i].offsetTop + screen_elems.children[i].offsetHeight,i);
            if(h < screen_elems.children[0].offsetTop){
                // console.log('0')
                return Action.SetNewActive(1);
            }
            else if(h >= screen_elems.children[i].offsetTop && h <=  screen_elems.children[i].offsetTop + screen_elems.children[i].offsetHeight){
                // console.log(screen_elems.children[i].offsetTop,h,screen_elems.children[i].offsetTop + screen_elems.children[i].offsetHeight,i);
    
                return Action.SetNewActive(parseInt(screen_elems.children[i].dataset.type));
            }
            else{
                if( i == screen_elems.children.length-1){
                    // console.log('last')
                    return Action.SetNewActive(Action.Links.length-1);
                }
                
            }
        }
    }
    
})