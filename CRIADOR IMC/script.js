// buscar arquivos do html
const calcular = document.getElementById('calcular');

// pegar o valor de algo do html
// nome.value = 'Luccas'

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso/(altura*altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if(valorIMC < 25){
            classificacao = 'esta com seu peso ideal, parabéns!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso';
        }else if (valorIMC < 35){
            classificacao = 'obesidade nivel I';
        }else if (valorIMC < 40){
            classificacao = 'obesidade nivel II'
        }else{
            classificacao = 'obesidade nivel III, CUIDADO!!'
        }

        resultado.textContent = `${nome} seu imc é: ${valorIMC} e você esta ${classificacao}`;

    }else{
        resultado.textContent = "Preencha todos os campos!"
    }

}

calcular.addEventListener('click', imc);