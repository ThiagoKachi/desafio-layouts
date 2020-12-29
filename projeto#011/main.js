let contagem = document.getElementById('box-counter')
let num = contagem.querySelector('h1')

function add() {
    let mais = document.getElementById('mais')

    mais.addEventListener("click", function() {
        let numero = parseInt(num.innerText) + 1
        num.innerText = numero
    })
}

add()


function sub() {
    let menos = document.getElementById('menos')

    menos.addEventListener("click", function() {
        let numero = parseInt(num.innerText) - 1
        num.innerText = numero
    })
}

sub()

function mais2() {
    let mais2 = document.getElementById('mais2')

    mais2.addEventListener("click", function() {
        let numero = parseInt(num.innerText) + 2
        num.innerText = numero
    })
}

mais2()


function menos2() {
    let menos2 = document.getElementById('menos2')

    menos2.addEventListener("click", function() {
        let numero = parseInt(num.innerText) - 2
        num.innerText = numero
    })
}

menos2()

function zerar() {
    let zerar = document.getElementById('zerar')

    zerar.addEventListener("click", function() {
        num.innerText = 0
    })
}

zerar()