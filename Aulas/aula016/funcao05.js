function fatorial(num){
    let fat

    num==1?fat=1:fat=num*fatorial(num-1)

    return fat
}

let valor=5

console.log(fatorial(valor))