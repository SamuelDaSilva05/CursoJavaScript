function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()/* <<<NÃO É NECESSÁRIO!!!!! */
msg.innerHTML = `Agora são ${hora} horas ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        //console.log('Bom Dia!')
        alert('Bom Dia!')
        document.body.style.background = '#e2cdg4'
    } else if (hora >= 12 && hora <= 18) {
        //(console.log('Boa Tarde!')
        alert('Boa Tarde!')
        document.body.style.background = '#b9845d'
    } else {
        //console.log('Boa Noite!')
        alert('Boa Noite!')
        document.body.style.background = '#515156'
    }
}
