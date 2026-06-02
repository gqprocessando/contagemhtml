function acionarBotao() {
    let token = 145879987456

    let senha = document.getElementById('senha').value;
    let grupo = document.getElementById('grupo').value;

    if (senha == 145879987456)
    {
        console.log("Senha:", senha);
        console.log("Grupo:", grupo);
    }
    else{alert('Senha não confere');}
    
}