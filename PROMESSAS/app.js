var produtos = new Promise(function(resolve, reject) {
    setTimeout(function () {
        var produtos = ['Camisa', 'Sapato', 'Calça']
        resolve (produtos)
    },32000)
})

produtos.then(function(){
    console.log('Deu certo!')
})