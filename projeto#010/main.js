function mostrar(id) {
    if(document.getElementById(id).style.display == 'block') {
        document.getElementById(id).style.display = 'none'

        let lang = document.getElementById('languages')
        lang.querySelector('h2').innerHTML = 'Programming Languages <i style="display: flex; align-items: flex-start;" class="fas fa-sort-down"></i>'
        
    } else {
        document.getElementById(id).style.display = 'block'
        let lang = document.getElementById('languages')
        lang.querySelector('h2').innerHTML = 'Programming Languages <i style="display: flex; align-items: flex-end;" class="fas fa-sort-up"></i>'

    }
}

function dark() { 

    var botao = document.getElementById('dark')
    
    let teste = document.querySelector('.card-principal')

    let card1 = document.querySelector('.infos')
    card1.style.background = 'rgb(101, 101, 101)'

    let cardFoto = document.querySelector('.foto')
    cardFoto.style.background = 'rgb(101, 101, 101)'

    
    let cardFoto2 = document.querySelectorAll('p')
    cardFoto2[0].style.color = 'whitesmoke'
    cardFoto2[1].style.color = 'whitesmoke'
    cardFoto2[2].style.color = 'whitesmoke'
    cardFoto2[3].style.color = 'whitesmoke'
    cardFoto2[4].style.color = 'whitesmoke'
    cardFoto2[5].style.color = 'whitesmoke'
    cardFoto2[6].style.color = 'whitesmoke'
    
    
    let cardInfos = document.querySelectorAll('h2')
    cardInfos[0].style.color = 'whitesmoke'
    cardInfos[1].style.color = 'whitesmoke'
    cardInfos[2].style.color = 'whitesmoke'
    cardInfos[3].style.color = 'whitesmoke'
    cardInfos[4].style.color = 'whitesmoke'
    
    let cardH1 = document.querySelectorAll('h1')
    cardH1[0].style.color = 'white'
    
    let botaoMostrar = document.querySelectorAll('i')
    botaoMostrar[0].style.color = 'white'

    document.body.style.backgroundColor = 'gray'

    botao = teste.classList.add('active')

}


   