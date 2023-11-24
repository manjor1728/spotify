const botaoMenu = document.getElementById('botaoMenu')


botaoMenu.addEventListener('click', ()=>{
    const menuHamburguer = document.querySelector('.menuHamburguer')
    menuHamburguer.classList.toggle('menuMobile')
})