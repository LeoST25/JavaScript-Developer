// 2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indecação sobre a condição de peso de uma pessoa adulta.Corporal

// Formula do IMC:
// IMC - peso / (altura * altura)

// Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.Corporal
// IMC em adultos Condição:
// - Abaixo de 18.5 Abaixo de peso;
// - Entre 18.5 e 25 Peso normal;
// - Entre 25 e 30 Acima do peso;
// - Entre 30 e 40 Obeso;
// - Acima de 40 Obesidade Grave;

const peso = 60.4;
const altura = 1.69;
const imc = peso / (altura * altura);

console.log(imc.toFixed(1));

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso");
} else if (imc >= 30 && imc <= 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade grave");
}
