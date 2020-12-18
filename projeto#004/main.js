function mostrar(id, teste) {
    if(document.getElementById(id).style.display == 'block') {
        document.getElementById(id).style.display = 'none'
        document.getElementById(teste).style.fontWeight = '400'
        document.getElementById(teste).style.color = 'hsl(240, 6%, 50%)'
    } else {
        document.getElementById(id).style.display = 'block'

        document.getElementById(teste).style.fontWeight = '700'
        document.getElementById(teste).style.color = 'hsl(238, 29%, 16%)'
    }
}