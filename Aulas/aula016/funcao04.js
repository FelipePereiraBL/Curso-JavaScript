function fatorial(num){
    let fat=1

    for(let c=num; c>1;c--){
        fat*=c
    }

    return fat
}

let valor=5
console.log(fatorial(valor))