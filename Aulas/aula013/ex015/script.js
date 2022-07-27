function verificar(){

    //Ano atual do sistema
    var ano=new Date().getFullYear()
  
    //Campo para pegar o ano de nascimento
    var formAno= document.getElementById('txtAno')
    
    //Area para mostrar o resultado
    var res= document.querySelector('#res')

    //Verifica se o ano de nascimento é nulo ou maior que o ano atual
    if(formAno.value.length==0 || formAno.value>ano){
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    }else{
        //Checkbox que pqga o sexo
        var formSex=document.getElementsByName('radSex')

        //Caucula a idade a partir do ano de nascimento e o ano atual
        var idade= ano - Number(formAno.value)

        //Guarda o genero a partir do sexo selecionado
        var genero=''

        //Cria um lemento imagem
        var img=document.createElement('img')

        //Atribui o id="foto" para o elemento imagem criado
        img.setAttribute('id','foto')
        
         //ArtigoInd
         var artInd=''

         //Verifica se o sexo é masculino ou feminino
         if(formSex[0].checked){
             genero= 'homem'
             artInd='um'
         }else{
             genero='mulher'
             artInd='uma'
         }   

        //Guarda a fase da vida de acordo com a idade e vai ser usada para construir o src para achar a imagem
        var faseVida=''

        //Caucula qual a fase da vida de acordo com a idade
        if(idade<=5){
            genero=='homem'?faseVida='bebê menino':faseVida='bebê menina'
            genero=='homem'?document.body.style.background='#f1d8c3':document.body.style.background='#cb9b81'
        }else if(idade<=12){
            genero=='homem'?faseVida='menino':faseVida='menina'
            genero=='homem'?document.body.style.background='#70706e':document.body.style.background='#708b83'
        }else if(idade<=21){
            genero=='homem'?faseVida='rapaz':faseVida='moça'
            genero=='homem'?document.body.style.background='#fbc2b5':document.body.style.background='#7fa5bb'
        }else if(idade<=50){
            genero=='homem'?faseVida='homem adulto':faseVida='mulher adulta'
            genero=='homem'?document.body.style.background='#3f4438':document.body.style.background='#55622c'
        }else{
            genero=='homem'?faseVida='homem idoso':faseVida='mulher idosa'
            genero=='homem'?document.body.style.background='#45382f':document.body.style.background='#302525'
        }    

        //Constroi o caminho para achar a imagem certa
        var caminhoImg=`imagens/${faseVida+".png"}`

        //Atribui o caminho para achar a imagem
        img.setAttribute('src',caminhoImg)

        //Centraliza o conteudo do res
        res.style.textAlign='center'

        if(faseVida=='bebe'||faseVida=='crianca'){
            res.innerHTML=`Detectamos uma criança`
        }
        
        var idadeTxt=''

        if(idade==0){
            idadeTxt=genero=='homem'?'recem-nascido':'recem-nascida'
        }else if(idade<2){
            idadeTxt=`de 1 ano de idade`
        }else{
            idadeTxt=`de ${idade} anos de idade`
        }
        
        //Imprime uma frase no html
        res.innerHTML = `Detectamos ${artInd} ${faseVida} ${idadeTxt}`

        //Adiciona a imagem  no html
        res.appendChild(img)
    }
} 