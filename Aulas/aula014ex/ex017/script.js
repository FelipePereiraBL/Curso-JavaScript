function tabuada(){
    let txtNumero=document.getElementById('idNum')

    let num=0
    let cont=0
    
    let tab=document.getElementById('idTabuada')
  
    if(txtNumero.value.length==0){
        let item=document.createElement(`option`)
        item.text='Digite um numero acima'

        tab.innerHTML=''
        tab.appendChild(item)

        window.alert('Digite um numero')
    }else{
        num=Number(txtNumero.value) 
        cont=1

        tab.innerHTML=''

        while(cont<=10){
            let item=document.createElement(`option`)       
            item.text=`${num} x ${cont} = ${num*cont}`
            item.value=`tab${cont}`

            tab.appendChild(item)

            cont++

            
        }
    }
}