txtNum=document.querySelector('#idNum')

listNum=document.querySelector('#idSectNum')

resul=document.querySelector('#idResult')

vetNum=[]

function adicionar(){

    num=Number(txtNum.value)   

    if(txtNum.value.length==0){
        window.alert("[ERRO] Nenhum número foi digitado")
    }else if(num<1||num>100){
        num < 1? window.alert('[ERRO] O número digitado é menor do que 1'):window.alert('[ERRO] O número digitado é  maior do que 100')
       
    }else{
        if(vetNum.indexOf(num)==-1){

            vetNum.push(num)

            item=document.createElement('option')

            item.text=`O número ${num} adicionado`
            item.value=`pos${vetNum.indexOf(num)}`
    
            listNum.appendChild(item)

        }else{
            window.alert('[ERRO] Este número já foi adicionado')
        }             

    }
}

function finalizar(){
    if(vetNum.length==0){
        window.alert('[ERRO] A lista está vazia! Adicione um ou mais números')
    }else{
        resul.innerHTML=''

        vetNum.length==1?resul.innerHTML+=`<p>Ao todo, foi adicionado ${vetNum.length} número à lista.</p>`:resul.innerHTML+=`<p>Ao todo, foram adicionados ${vetNum.length} números à lista.</p>`   
    
        vetNum.sort()
        resul.innerHTML+=`<p>O maior número da lista é ${vetNum[vetNum.length-1]}.</p>`
    
        soma=0
        for(let pos in vetNum){
            soma+=vetNum[pos]
        }
        resul.innerHTML+=`<p>A soma de todos os números da lista é ${soma}.</p>`
    
        resul.innerHTML+=`A média dos números da lista é ${soma/vetNum.length}`
    }
    
}

function limpar(){
    vetNum=[]
    resul.innerHTML=''
    listNum.innerHTML=''
    txtNum.value=''
}