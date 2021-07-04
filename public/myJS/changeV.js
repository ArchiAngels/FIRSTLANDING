let btn_god = document.getElementById('GodBtn');
let mySecAction = {
    isVOne: true,

    changeToV2:function(){
        console.log('Version 2');
        document.getElementsByTagName('footer')[0].style.marginTop = '25vh';
        document.getElementsByTagName('header')[0].style.height = '100vh';
        document.getElementsByClassName('content-header')[0].style.transform = `translateY(50%)`;
// 
        document.getElementsByClassName('wrap-our-abilities')[0].style.width = `100%`;
        document.getElementsByClassName('wrap-our-abilities')[0].style.marginTop = '75vh';
        document.getElementsByClassName('wrap-our-abilities')[0].style.height = `100vh`;

        document.getElementsByClassName('wrap-our-works')[0].style.width = `100%`;
        document.getElementsByClassName('wrap-our-works')[0].style.height = `100vh`;
        document.getElementsByClassName('wrap-our-works')[1].style.width = `100%`;
        document.getElementsByClassName('wrap-our-works')[1].style.height = `100vh`;

        document.getElementsByClassName('wrap-what-we-offer')[0].style.width = `100%`;
        document.getElementsByClassName('wrap-what-we-offer')[0].style.height = `100vh`;
    },
    changeToV1:function(){
        console.log('Version 1');
        document.getElementsByTagName('footer')[0].style.marginTop = '0vh';
        document.getElementsByTagName('header')[0].style.height = '500px';
        document.getElementsByClassName('content-header')[0].style.transform = `translateY(0%)`;

        document.getElementsByClassName('wrap-our-abilities')[0].style.width = `0%`;
        document.getElementsByClassName('wrap-our-abilities')[0].style.marginTop = '0px';
        document.getElementsByClassName('wrap-our-abilities')[0].style.height = `500px`;

        document.getElementsByClassName('wrap-our-works')[0].style.width = `0%`;
        document.getElementsByClassName('wrap-our-works')[0].style.height = `500px`;
        document.getElementsByClassName('wrap-our-works')[1].style.width = `0%`;
        document.getElementsByClassName('wrap-our-works')[1].style.height = `500px`;

        document.getElementsByClassName('wrap-what-we-offer')[0].style.width = `0%`;
        document.getElementsByClassName('wrap-what-we-offer')[0].style.height = `500px`;
    }
}

btn_god.addEventListener('click',()=>{
    mySecAction.isVersionOne? mySecAction.changeToV2() : mySecAction.changeToV1();
    mySecAction.isVersionOne = !mySecAction.isVersionOne;
    btn_god.innerHTML =  mySecAction.isVersionOne?`<p>Version 1</p>`:`<p>Version 2</p>`;
    window.scrollBy(0,0);
})