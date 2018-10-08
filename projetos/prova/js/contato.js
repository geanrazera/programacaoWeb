function validaForm() {
    if (document.contato.nome.value == "")
        alert("Preencha o nome!");
    else if (document.contato.email.value == "")
        alert("Preencha o e-mail!");
    else if (document.contato.mensagem.value == "")
        alert("Preencha a quilometragem!");
    else
        document.anunciar.submit();
}