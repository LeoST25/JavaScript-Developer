/*
faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar está viagem.
*/

// entrada
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const DistanciaEmKm = 100;

// calculando
const litrosConsumidos = DistanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

//imprimindo
console.log(valorGasto.toFixed(2));
