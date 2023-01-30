import validator from './validator.js';
const botao = document.getElementById("validar");
function validandmask() {
  let creditCardNumber = document.getElementById("entradanumero").value;
  let valid = validator.isValid(creditCardNumber)
  let numberMask = validator.maskify(creditCardNumber)
  let mensagemResultado = document.getElementById("mensagem")

  if (creditCardNumber === "") {
    return mensagemResultado.textContent = "Digite o número do Cartão"

  }
  if (valid) {
    mensagemResultado.textContent = numberMask + "Cartão Válido"

  } else {
    mensagemResultado.textContent = "Cartão Inválido"

  }
  document.getElementById("entradanumero").value = ""
}

botao.addEventListener("click", validandmask);



