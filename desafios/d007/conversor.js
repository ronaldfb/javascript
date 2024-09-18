let dolar = parseFloat(window.prompt('Qual a cotação do dólar atualmente?').replace(',','.'))

if(isNaN(dolar)) {
    dolar = 1
    window.alert('Valor inválido! Considerando valor = 1')
    
    
}
function converter() {
   let reais = parseFloat(window.prompt('Quantos R$ você tem na carteira?').replace(',','.'))
   let res = document.querySelector('section#resultado')
   if(reais == ''){
    window.alert('Por favor digite um valor')
   }else{

  let quantDolar = reais / dolar

  res.innerHTML = `Com <strong>R$${reais.toFixed(2).replace('.',',')}</strong> você consegue comprar <strong>US$${quantDolar.toFixed(2).replace('.',',')}</strong>`


   }

}