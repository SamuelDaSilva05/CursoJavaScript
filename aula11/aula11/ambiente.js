let num = [5, 3, 8, 2]
num.push(7)
num.sort()
console.log(num)
console.log(`Vetor é ${num.length}`)
console.log(`O primeiro valor é ${num[2]}`)

/*for(let pos = 0; pos<num.length; pos++) {
    console.log(num[pos])
}*/

let pos = num.indexOf(8)
if (pos == 1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}


/*for( let pos in num) {
    console.log(num[pos])
}*/
