function exibirMensagem() {
        
    const nomeAluno = document.getElementById("nomeAluno").value;
    const Cidade = document.getElementById("Cidade").value;
    const MoraNaCidade = document.querySelector('input[name="mora"]:checked').value;
    let valorSelecionado = "";


    const mensagem = `Bem-vindo ${nomeAluno}, a cidade escolhida foi ${cidade}, Você mora na cidade: ${moraNaCidade}`;


    document.getElementById("mensagem").innerText = mensagem;
    alert(  +" ,a cidade escolhida foi" + valorSelecionado);
}
