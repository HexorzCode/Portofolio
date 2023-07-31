const text = document.querySelector(".sec-text")

const textload = () => {
    setTimeout(() => {
        text.textContent = "Daffa Maulana";
    }, 0);
    setTimeout(() => {
        text.textContent = "Collage Student";
    }, 5000);
    
}
textload();