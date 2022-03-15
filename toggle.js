const navToggle = document.querySelector("#mytoggle");
const nav = document.querySelector("nav");
const mynav = document.querySelectorAll('.myicon');
const ham =document.querySelector('#ham');


navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    mynav.forEach(icon => {
        icon.classList.toggle("hidden")
    })
});


window.addEventListener("resize", () => {
    if(document.body.clientWidth > 720) {
        nav.classList.remove('open');
        mynav.forEach(icon => {
        icon.classList.add('hidden');
        ham.classList.remove('hidden');
        });
    }
}
);



