document.querySelector(".btnConfirmar").click();
document.querySelector(".btnConfirmar").addEventListener("click", function() {
    location.reload();
});

document.querySelector(".btnMenu").click();
document.querySelector(".btnMenu").addEventListener("click", function() {
    location.reload();
});

document.querySelector(".btnConfirmar").addEventListener("click", function() {
    var inputs = document.querySelectorAll(".form-control");
    var allFilled = true;
    inputs.forEach(function(input) {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });
    if (!allFilled) {
        alert("Preencha todos os campos");
    }
});

document.querySelector(".btnConfirmar").addEventListener("click", function() {
    var inputs = document.querySelectorAll(".form-control");
    var allFilled = true;
    inputs.forEach(function(input) {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });
    if (allFilled) {
        alert("Cadastro feito com sucesso!");
    }
});

function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = {
            contatos: [{
                nome: "Amanda",
                sobrenome: "Silva",
                cpf: "12345678925",
                data: "02/06/2005",
                endereco: "Rua A",
                email: "Amanda.12@gmail.com",
                telefone: "96647136",
                crm: "1235",
                senha: "Amanda0206"
            }]
        };
    }

    return objDados;
}

function salvaDados(objDados) {
    localStorage.setItem('db', JSON.stringify(objDados));
}

function incluirContato() {
    let objDados = leDados();

    let strNome = document.getElementById('campoNome').value;
    let strSobrenome = document.getElementById('campoSobrenome').value;
    let strCpf = document.getElementById('campoCPF').value;
    let strData = document.getElementById('campoData').value;
    let strEndereco = document.getElementById('campoEndereco').value;
    let strEmail = document.getElementById('campoEmail').value;
    let strTelefone = document.getElementById('campoTelefone').value;
    let strCrm = document.getElementById('campoCRM').value;
    let strSenha = document.getElementById('campoSenha').value;

    let novoContato = {
        nome: strNome,
        sobrenome: strSobrenome,
        cpf: strCpf,
        data: strData,
        endereco: strEndereco,
        email: strEmail,
        telefone: strTelefone,
        crm: strCrm,
        senha: strSenha
    };

    objDados.contatos.push(novoContato);
    salvaDados(objDados); // Salva os dados no banco de dados
    imprimeDados(); // Atualiza a exibição na tela
}


function imprimeDados() {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados();

    for (let i = 0; i < objDados.contatos.length; i++) {
        strHtml += `<p>${objDados.contatos[i].nome} - ${objDados.contatos[i].sobrenome} - 
    ${objDados.contatos[i].cpf} - 
    ${objDados.contatos[i].data} - 
    ${objDados.contatos[i].endereco} - 
    ${objDados.contatos[i].email} - 
    ${objDados.contatos[i].telefone} -
    ${objDados.contatos[i].crm} - 
    ${objDados.contatos[i].senha}<p>`;
    }

    tela.innerHTML = strHtml;
}

// Configura os botões
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);
  document.getElementById ('btnIncluirContato').addEventListener ('click', incluirContato);
