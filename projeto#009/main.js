function zero(x) {
    if(x < 10) {
        x = '0' + x
    } return x
}

setInterval(function() {
    let data = new Date()
    
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    hora = zero(hora)
    min = zero(min)
    sec = zero(sec)

    let horaAtual = `${hora}:${min}:${sec}`
    const timer = document.getElementById('timer')
    timer.querySelector('h1').innerText = `${horaAtual}`
    
}, 1000);

