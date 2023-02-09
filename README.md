# Cartão de Crédito Válido
 
-> Resumo do projeto

Neste projeto, pensei em um aplicativo da Web que permita ao usuário validar o número de um cartão de crédito, tipo fidelidade para uso exclusivo na EssentialsLab, em que o usuario compre e acumule pontos para resgate em brindes. Além disso, ele tem a funcionalidade de ocultar todos os dígitos do cartão, exceto os quatro últimos.
Nesse projeto foi utilizado os fundamentos do JavaScript, incluindo conceitos como variáveis, condicionais e funções, bem como eventos e manipulação básica de DOM, fundamentos HTML e CSS. 


🤖 Inicio

Utilizando o algoritmo de Luhn, também chamado de módulo 10, é um método de soma de verificação, usado para validar números de identificação, como o IMEI de telefones celulares, cartões de crédito etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem ser multiplicados por dois; se esse número for maior ou igual a 10, devemos adicionar os dígitos do resultado; o número a verificar será válido se a soma de seus dígitos finais for um múltiplo de 10, onde o resto deverá ser 0.

🎨 O projeto contém

 -> Uma interface que permite ao usuário:
 
O usuário insere o número que deseja validar. Usando apenas caracteres numéricos (dígitos) no cartão para validar [0-9] e retorna ao mesmo se o número é válido ou não. Oculta todos os dígitos do número do cartão, menos os últimos 4 caracteres e não pode deixar um campo vazio ou inserir letras(apenas números). E não consegue digitar acima de 16 números, já que é a quantidade máxima de números que os mesmos pode ter. 

 -> Testes unitários dos métodos. Os métodos validator (isValid e maskify) são cobertos por testes unitários.
    Os principais usuários do produto são pessoas que pretendem ter um cartão fidelidade para adquirir óleos essenciais 
    Os objetivos desses usuários em relação ao meu produto é a fidelidade na qual terá retorno em benefícios exclusivos, como óleos no pré lançamento, descontos progressivos e resgates de pontuação acumulada. 
    O meu produto resolve os problemas e ainda ajuda o usuário a repassar a incrível idéia de uma vida mais saudavel e com o minimo de produtos sintéticos, já que com o novo cartão validado o usuário terá isso e muitos outros beneficios.

💻 Acesso ao projeto -> https://acarlamelo.github.io/SAP009-card-validation/







