document.querySelector("#items").addEventListener("wheel", event => {
    if(event.deltaY > 0) {
        event.target.scrollBy(300, 0)
    } else {
        event.target.scrollBy(-300, 0)
    }
})

const fav = document.getElementById('music-info')

function mostrar() {
    if(fav.querySelector('i').style.color == 'red') {
        fav.querySelector('i').style.color = 'black'
        
    } else {
        fav.querySelector('i').style.color = 'red'
    }
}