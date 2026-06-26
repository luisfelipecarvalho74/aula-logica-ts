const numero = prompt("Digite um número: ") ?? "0"
const num = Number(numero)

const antecessor = num - 1
const sucessor = num + 1
alert("Digitou " + `${num} ` + "antecessor: " + `${antecessor} ` + "sucessor: " + `${sucessor}`)
