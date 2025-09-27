const saida = document.getElementById("saida");
let teclas = document.getElementsByClassName("teclas");

const eventos = ["click", "keydown"];

for (let n = 0; n < teclas.length; n++) {
    
    eventos.forEach(evento => {

        teclas[n].addEventListener(evento, event => {
            console.log(event);
            const tecla = event.target.id;
    
            switch(tecla){
                case "botao-clear-entry":
                    saida.innerText = 0;
                    break;
                case "botao-1":
                    alteraValor(1);
                    break;
                case "botao-2":
                    alteraValor(2);
                    break;
                case "botao-3":
                    alteraValor(3);
                    break;
                case "botao-4":
                    alteraValor(4);
                    break;
                case "botao-5":
                    alteraValor(5);
                    break;
                case "botao-6":
                    alteraValor(6);
                    break;
                case "botao-7":
                    alteraValor(7);
                    break;
                case "botao-8":
                    alteraValor(8);
                    break;
                case "botao-9":
                    alteraValor(9);
                    break;
                case "botao-0":
                    alteraValor(0);
                    break;
            }
        })
    })
}

const alteraValor = (saida, valor) => {
    saida.innerText == 0 ? saida.innerText = valor : saida.innerText += valor;
}

const teclaPressionada = (event, tecla, saida, valor) => {
    if (event.key == tecla || event.target){
        alteraValor(saida, valor);
    }
}