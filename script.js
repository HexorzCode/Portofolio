window.onscroll = function (){
    const header = document.querySelector("nav")
    const fixed = header.offsetTop;

    if (window.pageYOffset > fixed){
        header.classList.add('navfix')
    }else{
        header.classList.remove('navfix')
    }
}

const text = document.querySelector(".sec-text");

        const textload = () => {
            setTimeout(() => {
                text.textContent = "Daffa Maulana";
            }, 0);
            setTimeout(() => {
                text.textContent = "Collage Student";
            }, 5000);
            setTimeout(() => {
                text.textContent = "Programer";
            }, 10000);
            
        }
        textload();
        setInterval(textload, 15000);