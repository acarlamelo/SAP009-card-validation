import validator from './validator.js';
const botao = document.getElementById("validar");
function validandmask() {
  const creditCardNumber = document.getElementById("entradanumero").value;
  const valid = validator.isValid(creditCardNumber)
  const numberMask = validator.maskify(creditCardNumber)
  const mensagemResultado = document.getElementById("mensagem")

  if (creditCardNumber === "") {

    return mensagemResultado.textContent = "Campo vazio, Digite o número do Cartão"

  }
  if (valid) {

    mensagemResultado.textContent =  "Parabéns!!!!!" + "   Cartão Validado"

  } else {

    mensagemResultado.textContent = "Cartão Inválido," + "Verifique os números digitados"

  }
  document.getElementById("entradanumero").value = numberMask;
}

botao.addEventListener("click", validandmask);



