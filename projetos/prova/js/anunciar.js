function validaForm() {
    if (document.anunciar.titulo.value == "")
        alert("Preencha o título!");
    else if (document.anunciar.ano.value == "")
        alert("Preencha o ano!");
    else if (document.anunciar.km.value == "")
        alert("Preencha a quilometragem!");
    else if (document.anunciar.valor.value == "")
        alert("Preencha o valor!");
    else if (document.anunciar.combustivel.value == "")
        alert("Preencha o combustível!");
    else if (document.anunciar.imagem.value == "")
        alert("Preencha a imagem!");
    else
        document.anunciar.submit();
}