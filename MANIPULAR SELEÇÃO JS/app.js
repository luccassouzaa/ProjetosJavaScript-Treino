var link = document.querySelector('#app a')

link.addEventListener('click', function(event){
    event.preventDefault()

    console.log('foi clicado')
})