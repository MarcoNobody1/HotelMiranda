const menuBurguer = document.getElementById("menuBurguer");
const menuCross = document.getElementById('menuCross')
const nav = document.getElementById('nav');

menuBurguer.addEventListener('click', ()=>{
    menuBurguer.classList.add('header__menuiconburguer--closed')
    menuCross.classList.remove('header__menuiconcross--closed')
    nav.classList.remove('header__menucontent--hidden')
})

menuCross.addEventListener('click', ()=>{
    menuBurguer.classList.remove('header__menuiconburguer--closed')
    menuCross.classList.add('header__menuiconcross--closed')
    nav.classList.add('header__menucontent--hidden')
})