var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 2;

function Restart() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 2;
  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";
}

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto && tentativas >= 0) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 10 || (chute < 0 && tentativas >= 0)) {
    elementoResultado.innerHTML =
      "Vamos lá tu sabe que isso não vale. Digite um número de 0 a 10";
  } else if (tentativas > 0) {
    if (chute < numeroSecreto) {
      elementoResultado.innerHTML =
        "Quase...Tenta um número maior, tu tem " + tentativas + " tentativas";
      tentativas = tentativas - 1;
    }
    if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "Quase...Tenta um número menor, tu tem " + tentativas + " tentativas";
      tentativas = tentativas - 1;
    }
  } else {
    elementoResultado.innerHTML =
      "Suas tentativas acabaram o número secreto era " + numeroSecreto;
  }
  document.getElementById("valor").value = "";
}
