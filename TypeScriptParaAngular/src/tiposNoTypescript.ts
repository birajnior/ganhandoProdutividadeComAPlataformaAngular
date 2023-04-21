//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "felipe";
let idade: number = 30;

// tipos especiais null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

// Objeto - sem previsibilidade
let produto: object = {
  name: "Júnior",
  cidade: "SP",
  idade: 28,
};

// Objeto tipado - com previsibilidade
type ProdutoLoja = {
  name: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  name: "Tênis",
  preco: 89.99,
  unidades: 5,
};

// Arays
let dados: string[] = ["felipe", "júnior", "ana"];
let dados2: Array<string> = ["felipe", "júnior", "ana"];
let infos: (string | number)[] = ["júnior", 28, "casado"];

// Tuplas
let boleto: [string, number, number] = ["Água conta", 199.9, 35231923];

// Arrays métodos
dados.pop();

// Datas
let aniversario: Date = new Date("2023-04-21 10:30");
console.log(aniversario.toString());
