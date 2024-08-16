function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'morning-250.png'
        document.body.style.background = '#d5d8d1'
        msg2.innerHTML = 'Bom dia!'
    }else if (hora >=12 && hora < 18){
        //BOA TARDE!
        img.src = 'tarde250.png'
        document.body.style.background = '#fcc86a'
        msg2.innerHTML = 'Boa Tarde!'
    }else{
        //BOA NOITE!
        img.src = 'noite250.png'
        document.body.style.background = '#005f93'
        msg2.innerHTML = 'Boa Noite!'
    }
    
}
