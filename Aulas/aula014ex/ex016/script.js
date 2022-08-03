function calcular(){
    var inic=Number(document.getElementById("idInic").value) 
    var fim=Number(document.getElementById("idFim").value)
    var passo=Number(document.getElementById("idPasso").value)

    var res=document.querySelector("#result")

    res.innerHTML=`<p></p>`

    if(passo<=0){
        window.alert("Passo invalido. Considerando PASSO 1")
        passo=1
    }

    if(inic<=0 || fim<=0 ){
        res.innerHTML+=`Impossivel contar`
    }else if(inic>=fim){
        while(inic>=fim){
            res.innerHTML+=` ${inic} &#x1F449;`
            inic-=passo
        }
            
    }else{
        while(inic<=fim){
            res.innerHTML+=` ${inic} &#x1F449;`
            inic+=passo
        }
    }

    res.innerHTML+=` &#x1F3C1;`
    
}
