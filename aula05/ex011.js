var idade = 95
console.log(`Você tem ${idade} anos.`)
if (idade < 18) {
    console.log('Menor de idade não vota')
} else if (idade < 18 || idade > 65) {
        console.log('Voto opcional')    
} else {
    console.log('Voto obrigatório')
}