const pesquisarCep = async() =>{
    if(document.getElementById('cep').value != ""){
        const cep = document.getElementById('cep').value
        const url = `http://viacep.com.br/ws/${cep}/json/`
    
        const dados = await fetch(url)
        const endereco = await dados.json()
        preencherFormulario(endereco)
        console.log(endereco)
    }else{
        document.getElementById('resultado').style.display = "none"
    }
}

const preencherFormulario = (endereco) => {
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('ibge').value = endereco.ibge
    document.getElementById('ddd').value = endereco.ddd
    document.getElementById('uf').value = endereco.uf
    document.getElementById('complemento').value = endereco.complemento
    document.getElementById('resultado').style.display = "block"
}
