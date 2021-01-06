function mudarCor() {
    let card = document.getElementById('card')
    let select = document.getElementById('select')
    let inputs = document.getElementById('infos')

    let checkbox = select.querySelector('input')
    let PegarInputs = inputs.querySelector('input')

    checkbox.addEventListener('click', function() {
        if(card.style.backgroundColor == 'rgb(237, 68, 120)') { // clara
            card.style.backgroundColor = 'rgb(11, 20, 79)' // escura
            PegarInputs.style.backgroundColor = 'rgb(11, 20, 79)'
        } else {
            card.style.backgroundColor = 'rgb(237, 68, 120)'
            PegarInputs.style.backgroundColor = 'rgb(237, 68, 120)'
        }
    })
}

mudarCor()