function carregar(){
    //Div onde vai aparecer a mensagem
    var msg= document.getElementById('msg')
    //Imagem que vai ser carregada
    var img=document.getElementById('imagem')

    //Hora atual do sistema
    var hora=new Date().getHours()
    var min=new Date().getMinutes()

    if(min < 10){
        min= "0" + min
    }

    msg.innerHTML=`Agora são ${hora + ":" + min} horas`

    if(hora >= 0 && hora < 12){
        img.src='imagens/manha.png'
        document.body.style.background='#ffe9bb'
    }
    else if(hora >= 12 && hora <= 18){
        img.src='imagens/tarde.png'
        document.body.style.background='#fa8000';
    }
    else{
        img.src='imagens/noite.png'
        document.body.style.background='#142b33'
    }
}
