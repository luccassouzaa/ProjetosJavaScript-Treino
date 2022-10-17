const submitButton = document.querySelector('#app form button')
const zipCodeField = document.querySelector('#app form input')
const content = document.querySelector('#app main')

// Tudo acima, foram variaveis criadas para identificar os documentos no HTML

submitButton.addEventListener('click', ProcurarOCep) // Identificar o Click no Button

function ProcurarOCep(event) { 
    event.preventDefault() // Previnir que a pagina nao atuailze quando clickar no botão

    const zipcodesformatados = replaces(zipCodeField.value)
   
    axios // Biblioteca Axios
        .get('https://viacep.com.br/ws/' + zipcodesformatados + '/json/') // site CEP
        .then(function(response){
            
            if(response.data.erro){
                throw new Error ('CEP inválido')
            }
            content.innerHTML = ''
        
         createLine(response.data.logradouro)
         createLine(response.data.localidade + '/' + response.data.uf)
         createLine(response.data.bairro)
        })
        .catch(function(error){
            content.innerHTML = ''
            createLine('Ops! Algo deu ruim.') 
        })
        
}

// Error -> alternativa do catch

function createLine(text){
    const linex = document.createElement('p') //Criar elemento com a informação da linha abaixo
    const textx = document.createTextNode(text) // Informação que será criada na linha acima "paragrafo"

    linex.appendChild(textx) // Informar que o texto que deverá entrar será o paragrafo
    content.appendChild(linex) // informar para a linha oq será inserido
}

function replaces(zipCode){
    zipCode = zipCode.replace(' ', '') // Tratar dados invalidos para o CEP
    zipCode = zipCode.replace('.', '') // Tratar dados invalidos para o CEP
    zipCode = zipCode.trim() // Tratar dados invalidos para o CEP (espaço começo e fim)
    return zipCode
}