txtNum=document.querySelector('#idNum')
listNum=document.querySelector('#idSectNum')
resul=document.querySelector('#idResult')

vetNum=[]

//Pega onumero que foi digitado e manda para a validação
function pegarValores(){
    validar(txtNum)
}

function validar(numDigitado){
    //Valida se o numero foi digitado
    if( numDigitado.value.length == 0){
        window.alert("[ERRO] Nenhum número foi digitado")
    }else if( numDigitado.value < 1 || numDigitado.value > 100){
        //Valida se o numero está  entre 1 e 100
        numDigitado.value < 1 ? window.alert('[ERRO] O número digitado é menor do que 1') : window.alert('[ERRO] O número digitado é  maior do que 100')
    }else{
        //Valida se o numero já foi adicionado  
        vetNum.indexOf(numDigitado.value) == -1 ? adicionar(numDigitado.value) :  window.alert('[ERRO] Este número já foi adicionado')
    } 

    txtNum.value=''
    txtNum.focus()
}

//Adiciona o numero na lista e atualiza a lista
function adicionar(num){
    vetNum.push(num)

    item=document.createElement('option')

    item.text=`O número ${num} foi adicionado na posição ${vetNum.indexOf(num)} da lista.`
    item.value=`pos${vetNum.indexOf(num)}`

    listNum.appendChild(item)    
}

//Os números serao organizados em ordem crescente de acordo com o seu valor
function ordenarNumeros(a,b){
    return a-b
}

//Mostra informaçoes sobre a lista de numeros na tela
function finalizar(){
    if(vetNum.length==0){
        window.alert('[ERRO] A lista está vazia! Adicione um ou mais números')
    }else if(vetNum.length==1){
        resul.innerHTML=''
        
        resul.innerHTML+=`<p>Apenas o número ${vetNum[0]} foi adicionado na lista.</p>`
    }else{
        resul.innerHTML=''

        resul.innerHTML+=`<p>Ao todo, foram adicionados ${vetNum.length} números à lista.</p>`   
    
        vetNum.sort(ordenarNumeros)
        resul.innerHTML+=`<p>O menor número da lista é ${vetNum[0]}</p>`
        resul.innerHTML+=`<p>O maior número da lista é ${vetNum[vetNum.length-1]}.</p>`
    
        soma=0
        for(let pos in vetNum){
            soma+=Number(vetNum[pos]) 
        }
        resul.innerHTML+=`<p>A soma de todos os números da lista é ${soma}.</p>`
    
        resul.innerHTML+=`A média dos números da lista é ${soma/vetNum.length}`
    }
    
}

//Limpar tudo
function limpar(){
    vetNum=[]
    resul.innerHTML=''
    listNum.innerHTML=''
    txtNum.value=''
}