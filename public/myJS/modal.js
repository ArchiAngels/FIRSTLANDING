let text = 'Pososi';


let modal = {
    self:document.getElementsByClassName('darkWrap'),
    child:document.getElementsByClassName('block_inside_wrap'),
    isVisible:false,
    text:text,
    show:function(){
        modal.isVisible = !modal.isVisible;
        this.child[0].innerHTML = `<p>${this.text}</p>`;
        this.self[0].style.top = `${window.scrollY}px`;
        this.self[0].classList.remove('hide');
        this.self[0].classList.add('ON');
    },
    hide:function(){
        modal.isVisible = !modal.isVisible;
        this.self[0].classList.remove('ON');
        this.self[0].classList.add('Hide');
    }

}

modal.self[0].addEventListener('click',()=>{
    modal.hide();
})
let myOwnBtns = document.getElementsByClassName('event-btn');

for(let i =0; i < myOwnBtns.length;i++){
    myOwnBtns[`${i}`].addEventListener('click',(e)=>{
        console.log(e.target);
        modal.isVisible?modal.show():modal.hide();
    })
}
// myOwnBtns.children.map(function(item){
//     item.addEventListener('click',(e)=>{
//         console.log(e.target);
//         isVisible?modal.show():modal.hide();
//         modal.isVisible = !modal.isVisible;
        
//     })
// })


