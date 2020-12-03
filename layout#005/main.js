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