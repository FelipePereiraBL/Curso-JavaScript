let num =[5,8,2,9,3]

num[4]=6

num.push(7)

console.log(num)

console.log(`-----------------------------------`)

console.log(`Tamanho do vetor = ${num.length}`)

console.log(`-----------------------------------`)

console.log(`Vetor em ordem crescente [ ${num.sort()} ]`)

console.log(`-----------------------------------`)

console.log(`Vetor na posição 4= ${num[4]}`)

console.log(`-----------------------------------`)

for(x=0;x<num.length;x++){
    console.log(`Pos${x}= ${num[x]}`)
}

console.log(`-----------------------------------`)

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`-----------------------------------`)

let valor=69
let pos=num.indexOf(valor)

if(pos==-1){
    console.log(`O valor ${valor} não foi encontrado`)
}else{
    console.log(`O valor ${valor} está na posição ${pos}`)
}


