var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    //peso
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //altura
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //imc
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true
    var alturaEhValido = true

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");

    }
    if (altura <= 0 || altura >= 3.00) {
        alturaEhValido = false
        tdImc.textContent = "Altura inválida!"
        paciente.classList.add("paciente-invalido");
    }
    if (alturaEhValido && pesoEhValido) {
        var imc = calculaIMC(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaIMC(peso,altura) {
    var imc = 0;
    
    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}