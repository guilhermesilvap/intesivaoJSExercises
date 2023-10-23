// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
 
alert("Hello world!!")

// 2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numberOne = 5
let numberTwo = 10
let sum = Number(numberOne) + Number(numberTwo)

alert(`A soma entre os número 1 e 2 é ${sum}`)
 

//3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let isNumber = 10

if(typeof isNumber === Number){
    alert("É um número")
}else{
    alert("Não é um número")
}

//4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let isString = "Palavra"

if(typeof isString === String){
    alert("É uma string")
}else{
    alert("Não é uma string")
}

//5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano"

let isBoolean = true

if(typeof isBoolean === Boolean){
    alert("É um booleano")
}else{
    alert("Não é um booleano")
}

//6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let firstNumber = 15
let secondNumber = 20
let sub = Number(numberOne) - Number(numberTwo)

alert(`A subtração entre os número 1 e 2 é ${sub}`)


//7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let numberA = 34
let numberB = 20
let mult = Number(numberOne) - Number(numberTwo)

alert(`A multiplicação entre os número 1 e 2 é ${mult}`)

//8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let numberC = 34
let numberD = 20
let div = Number(numberOne) - Number(numberTwo)

alert(`A divisão entre os número 1 e 2 é ${div}`)

//9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let number = 10

if(number %2 === 0){
    alert("É um número par")
}else{
    alert("Não é um número par")
}

//10 Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let number2 = 10

if(number2 %2 !== 0){
    alert("É um número par")
}else{
    alert("Não é um número par")
}
