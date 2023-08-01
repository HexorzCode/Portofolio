window.onscroll = function (){
    const header = document.querySelector("nav")
    const fixed = header.offsetTop;

    if (window.pageYOffset > fixed){
        header.classList.add('navfix')
    }else{
        header.classList.remove('navfix')
    }
}