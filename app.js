const saida = document.getElementById("saida");
const calc = document.getElementById("calc");
let teclas = document.getElementsByClassName("teclas");

const eventos = ["click", "keydown"];

for (let n = 0; n < teclas.length; n++) {
  eventos.forEach((evento) => {
    teclas[n].addEventListener(evento, (event) => {
      const tecla = event.target.id;

      switch (tecla) {
        
        case "botao-divide":
          novaEntrada = true;
          let divisao;
          if (calc.innerText != "") {
            divisao = Divisao(calc, saida);
            calc.innerHTML = divisao + " / ";
            saida.innerText = divisao;
            break;
          }
          calc.innerHTML = saida.innerText + " / ";
          break;

        case "botao-times":
          novaEntrada = true;
          let multiplicacao;
          if (calc.innerText != "") {
            multiplicacao = Multiplicacao(calc, saida);
            calc.innerHTML = multiplicacao + " x ";
            saida.innerText = multiplicacao;
            break;
          }
          calc.innerHTML = saida.innerText + " x ";
          break;

        case "botao-minus":
          novaEntrada = true;
          let subtracao;
          if (calc.innerText != "") {
            subtracao = Subtracao(calc, saida);
            calc.innerHTML = subtracao + " - ";
            saida.innerText = subtracao;
            break;
          }
          calc.innerHTML = saida.innerText + " - ";
          break;

        case "botao-plus":
          novaEntrada = true;
          let soma;
          if (calc.innerText != "") {
            soma = Soma(calc, saida);
            calc.innerHTML = soma + " + ";
            saida.innerText = soma;
            break;
          }
          calc.innerHTML = saida.innerText + " + ";
          break;

        case "botao-equal":
          novaEntrada = true;

          if (calc.innerText.slice(-1) == "+") {
            const resultado = Soma(calc, saida);
            calc.innerHTML += saida.innerText + " = ";
            saida.innerText = resultado;
          } else if (calc.innerText.slice(-1) == "-") {
            const resultado = Subtracao(calc, saida);
            calc.innerHTML += saida.innerText + " = ";
            saida.innerText = resultado;
          } else if (calc.innerText.slice(-1) == "x") {
            const resultado = Multiplicacao(calc, saida);
            calc.innerHTML += saida.innerText + " = ";
            saida.innerText = resultado;
          } else if (calc.innerText.slice(-1) == "/") {
            const resultado = Divisao(calc, saida);
            calc.innerHTML += saida.innerText + " = ";
            saida.innerText = resultado;
          }
          break;
        case "botao-invert":
          calc.innerText = "";
          saida.innerText = -saida.innerText;
          break;
        case "botao-clear":
          calc.innerText = "";
          saida.innerText = 0;
          break;
        case "botao-clear-entry":
          saida.innerText = 0;
          break;
        case "botao-backspace":
          if (saida.innerText.length == 1) {
            saida.innerText = 0;
          } else {
            saida.innerText = saida.innerText.slice(0, -1);
          }
          break;
      }
    });
  });
}

var novaEntrada = true;

const AlteraValor = (valor) => {
  if (calc.innerText.indexOf("=") != -1) {
    calc.innerText = saida.innerText;
  }

  if (saida.innerText == 0 || (novaEntrada && calc.innerText != "")) {
    saida.innerText = valor;
    novaEntrada = false;
  } else {
    saida.innerText += valor;
  }
};

const Soma = (calc, saida) => {
  return Number(calc.innerText.slice(0, -2)) + Number(saida.innerText);
};

const Subtracao = (calc, saida) => {
  return Number(calc.innerText.slice(0, -2)) - Number(saida.innerText);
};

const Multiplicacao = (calc, saida) => {
  return Number(calc.innerText.slice(0, -2)) * Number(saida.innerText);
};

const Divisao = (calc, saida) => {
  return Number(calc.innerText.slice(0, -2)) / Number(saida.innerText);
};
