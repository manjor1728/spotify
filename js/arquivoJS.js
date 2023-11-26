const botaoMenu = document.getElementById('botaoMenu')

botaoMenu.addEventListener('click', ()=>{
    const menuHamburguer = document.querySelector('.menuHamburguer')
    menuHamburguer.classList.toggle('menuMobile')
})



/* const pergunta1 = document.querySelector('.per')

pergunta1.addEventListener('click', ()=>{
    const resposta = document.querySelector('.resposta')
    const btnUp = document.querySelector('.up')
    const btnDown = document.querySelector('.down')

    resposta.classList.toggle('respostaSumir')
    btnUp.classList.toggle('botaoUp')
    btnDown.classList.toggle('botaoDown')
    console.log('clicou')
}) */
/* const per2 = document.querySelector('.per2')

per2.addEventListener('click', ()=>{
    const resposta = document.querySelector('.resposta2')
    const btnUp = document.querySelector('.up2')
    const btnDown = document.querySelector('.down2')

    resposta.classList.toggle('respostaSumir2')
    btnUp.classList.toggle('botaoUp2')
    btnDown.classList.toggle('botaoDown2')
    console.log('clicou')
}) */
const pergunta1 = document.querySelectorAll('.pergunta1')

pergunta1.forEach(cadaPergunta =>{
    cadaPergunta.addEventListener('click', ()=>{
        
        const resposta = cadaPergunta.classList.contains('respostaSumir')

        pergunta1.forEach(cadaPergunta =>{
            cadaPergunta.classList.remove('respostaSumir')
            if (!resposta) {
                cadaPergunta.classList.toggle('respostaSumir')
            }
        })
    })
})