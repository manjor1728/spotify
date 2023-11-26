const botaoMenu = document.getElementById('botaoMenu')

botaoMenu.addEventListener('click', ()=>{
    const menuHamburguer = document.querySelector('.menuHamburguer')
    menuHamburguer.classList.toggle('menuMobile')
})






const acordionItem = document.querySelectorAll('.acordionItem')

acordionItem.forEach(item =>
    item.addEventListener('click', ()=>{
        
        const isItemRespostaSumir = item.classList.contains('respostaSumir')

        item.classList.remove('respostaSumir')
      
        if (!isItemRespostaSumir) {
            item.classList.toggle('respostaSumir')
        
        }
    })
)