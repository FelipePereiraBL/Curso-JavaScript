let amigo={nome:'Felipe',
sexo:'M',
peso:79.6,
engordar(p=0){
    console.log('Engordou')
    this.peso+=p
}}

amigo.engordar(2)

console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`)