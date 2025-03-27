function calcularTotal(preco ,quantidade){
    return preco * quantidade;
}

function aplicarDesconto(compra){
    if (compra > 100){
        return compra - (compra*0.1);
    }
}

let preco = parseFloat(prompt("Digite valor do produto:  "))
let quantidade = parseInt(prompt("Digite quantidade para a compra"))

let compra = calcularTotal(preco, quantidade)
let desconto = aplicarDesconto(compra)

function exibirResumo(){
    console.log('Valor total : '+compra)
    console.log('Valor com disconto: '+desconto)
}

exibirResumo()