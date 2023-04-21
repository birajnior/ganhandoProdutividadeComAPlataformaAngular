
// Funções
function addNumber(x: number, y: number): number {
  return x + y;
}

function addToHelo(name: string): string {
  return `Hello ${name}`;
}

function callToPhone(phone: number | string) {
  return phone;
}

async function getDatabase(id: number): Promise<string> {
  return "Júnior";
}

let soma: number = addNumber(4, 5);

// type heroi ={
//   name: string;
//   vulgo: string;
// }

// function printaObjeto(pessoa: heroi) {
//   console.log(pessoa);
  
// }


// printaObjeto({
//   name: 'Bruce Wayne',
//   vulgo: 'Batman'
// })