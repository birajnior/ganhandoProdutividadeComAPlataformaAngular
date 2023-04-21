"use strict";
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "felipe";
let idade = 30;
// tipos especiais null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = false;
// Objeto - sem previsibilidade
let produto = {
    name: "Júnior",
    cidade: "SP",
    idade: 28,
};
let meuProduto = {
    name: "Tênis",
    preco: 89.99,
    unidades: 5,
};
// Arays
let dados = ["felipe", "júnior", "ana"];
let dados2 = ["felipe", "júnior", "ana"];
let infos = ["júnior", 28, "casado"];
// Tuplas
let boleto = ["Água conta", 199.9, 35231923];
// Arrays métodos
dados.pop();
// Datas
let aniversario = new Date("2023-04-21 10:30");
console.log(aniversario.toString());
