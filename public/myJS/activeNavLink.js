let nav = document.getElementById('perm-nav');

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
    console.log(e.target)
    if(e.target.tagName == 'A'){
        for(let i = 1; i < nav.children.length;i++){
            if(e.target == nav.children[i].children[0]){
                console.log('find',nav.children[i],i)
                return Action.SetNewActive(i);
            }
        }
    }
})