function limparFormulario(endereco) {
    document.getElementById("endereco").value=""
    document.getElementById("bairro").value=""
    document.getElementById("cidade").value=""
    document.getElementById("estado").value=""
}

function preencherFormulario(endereco){
    document.getElementById("endereco").value= endereco.logradouro
    document.getElementById("bairro").value= endereco.bairro
    document.getElementById("cidade").value= endereco.localidade
    document.getElementById("estado").value= endereco.uf

}

async function pesquisarCep() {
    limparFormulario();
    if (cep.length ==8){
        const cep = document.getElementById("cep").value.replace("-","")
        const url = `https://viacep.com.br/ws/${cep}/json/`
        const dados = await fetch(url)
        const endereco = await dados.json();
        preencherFormulario(endereco)
    }
    else{
        alert("CEP Inválido, tente novamente")
    }

}

document.getElementById("cep").addEventListener("focusout", pesquisarCep)
