

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entrada) => {
        if(entrada.isIntersecting) {
            entrada.target.classList.add('show')
        } else {
            entrada.target.classList.remove('show')
        }
    })
    
})

const elementos = document.querySelectorAll('.hidden')

elementos.forEach((elemento) => myObserver.observe(elemento))



let caixaPrincipal = document.querySelector('caixa-principal')



document.querySelector('.bolinha').addEventListener('click', (e) => {
    e.target.classList.toggle('bolinha-move')
    document.body.classList.toggle('dark')
    
})




// let button = document.getElementById('button')
// let caixaPrincipal = document.querySelector('caixa-principal')
// let  portifolio = document.querySelector('portifolio')
// let section = document.querySelector('section')
// let projeto = document.querySelector('.projetos')
// let footer = document.querySelector('footer')

// button.addEventListener('click', () => {
//     button.classList.toggle('dark')
//     portifolio.classList.toggle('dark')


    
  
// })

