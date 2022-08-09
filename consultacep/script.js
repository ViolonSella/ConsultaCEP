const cep = document.getElementById('cep')
let endereco = document.getElementById('endereco')
let bairro = document.getElementById('bairro')
let cidade = document.getElementById('cidade')
let estado = document.getElementById('estado')

cep.addEventListener('focusout', () =>{
    if (cep.value.length == 8){
        let link = `https://viacep.com.br/ws/${cep.value}/json/`
        $.getJSON(link, function(result){
            endereco.value = result.logradouro
            bairro.value = result.bairro
            cidade.value = result.localidade
            estado.value = result.uf
        })
    } else (
        alert('CEP Inválido')
    )
})