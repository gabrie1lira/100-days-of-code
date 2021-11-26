var nome = prompt('Qual seu nome?')
var altura = prompt("Sua altura em cm")
var peso = prompt("Seu Peso")
var imc = (peso / (altura / 100)**2).toFixed(2)

if (imc < 16){
	document.write("Baixo peso, muito grave!")
}
else if (imc >= 16 && imc <= 16.99){
	document.write("Baixo peso, grave!")
}
else if (imc >= 17 && imc <= 18.49){
	document.write("Baixo peso!")
}
else if (imc >= 18.50 && imc <= 24.99){
	document.write("Peso normal!")
}
else if (imc >= 25 && imc <= 29.99){
	document.write("Sobrepeso")
}
else if (imc >= 30 && imc <= 34.99){
	document.write("Obesidade grau I")
}
else if (imc >= 35 && imc <= 39.99){
	document.write("Obesidade grau II")
}
else if (imc >= 40){
	document.write("Obesidade grau III")
}

document.write("<br/>" + nome + ", seu imc é: " + imc);