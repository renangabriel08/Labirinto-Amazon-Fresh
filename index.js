var clc = require("cli-color");
const prompt = require('prompt-sync');
var contProdutos = 0;
var chaves = 0;
var carrinho = 0;
var cesto = 0;
var limite = 5;
var saldo = prompt('Digite seu saldo: ')

function inicio() {
console.clear()
  contProdutos = 0;
  chaves = 0;
  carrinho = 0;
  cesto = 0;
  limite = 5;
  saldo = prompt('Digite seu saldo: ')
  entrada()
}

// 22 não posso andar
// 11 posso andar
// 33 posição atual
// 88 posição dos produtos
// 44 chaves
// 55 portas
// 100 estantes
// 66 teleporte próximo mapa
// 77 carrinho
// 99 cesto de compras
// 00 teleporte mapa anterior

function entrada() {
  var labirinto = [
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 33, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 11, 11, 11, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 11, 11, 11, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 66, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]

if(carrinho == 1 && cesto == 1){
  limite = 120
} else if (cesto == 1){
  limite = 20
} else if (carrinho == 1){
  limite = 100
}
  
function colorir(text) {
  if (text == 22) {
    return clc.bgCyan('  ');
  } else if (text == 11) {
    return clc.bgWhite('  ');
  } else if (text == 88) {
    return clc.bgWhite('📦');
  } else if (text == 44) {
    return clc.bgWhite('🔑');
  } else if (text == 55) {
    return clc.bgBlackBright('  ');
  } else if (text == 100) {
    return clc.bgBlackBright('  ')
  } else if (text == 66) {
    return clc.bgBlackBright('🚪')
  } else if (text == 99) {
    return clc.bgWhite('🧺')
  } else if (text == 77) {
    return clc.bgWhite('🛒')
  } else {
    return clc.bgWhite('😀');
  }
}

function mostrarLabirinto() {
  console.clear()
  for (let linha of labirinto) {
    var linhaFormatada = [];
    for (let item of linha) {
      linhaFormatada.push(colorir(item));
    }
    console.log(linhaFormatada.toString().replaceAll(',', ''));
  }
}

var x = 0;
var y = 15;

function desce() {
  if (labirinto[x + 1][y] == 66) {
    mapa1()
  } else if (labirinto[x + 1][y] == 99 && cesto < 1) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    cesto++
  } else if (labirinto[x + 1][y] == 77 && carrinho < 1) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    carrinho++
  } else if (labirinto[x + 1][y] !== 22 && y + 1 >= 0 && labirinto[x + 1][y] !== 55 && labirinto[x + 1][y] !== 100 && labirinto[x + 1][y] !== 77 && labirinto[x + 1][y] !== 99) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    contador++
  }
}

function sobe() {
  if (labirinto[x - 1][y] == 66) {
    mapa1()
  } else if (labirinto[x - 1][y] == 99 && cesto < 1) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    cesto++
  } else if (labirinto[x - 1][y] == 77 && carrinho < 1) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    carrinho++
  } else if (labirinto[x - 1][y] !== 22 && y - 1 >= 0 && labirinto[x - 1][y] !== 55 && labirinto[x - 1][y] !== 100 && labirinto[x - 1][y] !== 77 && labirinto[x - 1][y] !== 99) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    contador++
  }
}

function direita() {
  if (labirinto[x][y + 1] == 66) {
    mapa1()
  } else if (labirinto[x][y + 1] == 99 && cesto < 1) {
    labirinto[x][y] = 11;
    y = y + 1;
    labirinto[x][y] = 33;
    cesto++
  } else if (labirinto[x][y + 1] == 77 && carrinho < 1) {
    labirinto[x][y] = 11;
    y = y + 1;
    labirinto[x][y] = 33;
    carrinho++
  } else if (labirinto[x][y + 1] !== 22 && y + 1 >= 0 && labirinto[x][y + 1] !== 55 && labirinto[x][y + 1] !== 100 && labirinto[x][y + 1] !== 77 && labirinto[x][y + 1] !== 99) {
    labirinto[x][y] = 11;
    y = y + 1;
    labirinto[x][y] = 33;
    contador++
  }
}

function esquerda() {
  if (labirinto[x][y - 1] == 66) {
    mapa1()
  } else if (labirinto[x][y - 1] == 99 && cesto < 1) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    cesto++
  } else if (labirinto[x][y - 1] == 77 && carrinho < 1) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    carrinho++
  } else if (labirinto[x][y - 1] !== 22 && y - 1 >= 0 && labirinto[x][y - 1] !== 55 && labirinto[x][y - 1] !== 100 && labirinto[x][y - 1] !== 77 && labirinto[x][y - 1] !== 99) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    contador++
  }
}

var contador = 0;

while (true) {
  mostrarLabirinto();
  console.log(' ')
  console.log('ENTRADA, PEGUE SEU CARINHO')
  console.log(' ')
  console.log('Saldo disponível: R$', saldo)
  console.log('Contador de passos:', contador)
  console.log('Contador de produtos:', contProdutos)
  console.log('Contador de chaves:', chaves)
  console.log('Contador de carrinho:', carrinho)
  console.log('Contador de cesto:', cesto)
  console.log('Limite de produtos:', limite)
  console.log('--------')
  console.log(' ')
  var escolha = prompt('WASD para andar:');
  
  if (escolha == 'w' || escolha == 'W') {
    sobe();
  } else if (escolha == 'a' || escolha == 'A') {
    esquerda();
  } else if (escolha == 's' || escolha == 'S') {
    desce();
  } else if (escolha == 'd' || escolha == 'D') {
    direita();
  }
}
}

function mapa1() {
  var labirinto = [
  [22, 22, 22, 22, 11, 33, 11, 22, 22, 22, 22, 22, 22, 00, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
  [22, 44, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 88, 11, 11, 11, 11, 11, 11, 11, 11, 88, 44, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 55, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 22],
  [22, 88, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 88, 22, 22, 11, 11, 11, 22],
  [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 88, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 100, 100, 100, 11, 11, 100, 100, 11, 11, 100, 100, 100, 11, 11, 11, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 88, 22],
  [22, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 55, 11, 88, 22, 22, 11, 11, 11, 22, 22, 11, 88, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 88, 11, 22, 22, 11, 11, 22],
  [22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 22],
  [22, 11, 88, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 88, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 11, 22, 22, 88, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 22, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 22],
  [22, 22, 22, 22, 22, 66, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]

if(carrinho == 1 && cesto == 1){
  limite = 120
} else if (cesto == 1){
  limite = 20
} else if (carrinho == 1){
  limite = 100
}
 
function colorir(text) {
  if (text == 22) {
    return clc.bgCyan('  ');
  } else if (text == 11) {
    return clc.bgWhite('  ');
  } else if (text == 88) {
    return clc.bgWhite('📦');
  } else if (text == 44) {
    return clc.bgWhite('🔑');
  } else if (text == 55) {
    return clc.bgBlackBright('🚪');
  } else if (text == 100) {
    return clc.bgBlackBright('  ')
  } else if (text == 66) {
    return clc.bgBlackBright('🚪')
  } else if (text == 00) {
    return clc.bgBlackBright('🚪')
  } else {
    return clc.bgWhite('😎');
  }
}

function mostrarLabirinto() {
  console.clear()
  for (let linha of labirinto) {
    var linhaFormatada = [];
    for (let item of linha) {
      linhaFormatada.push(colorir(item));
    }
    console.log(linhaFormatada.toString().replaceAll(',', ''));
  }
}

var x = 0;
var y = 5;

function desce() {
  if (labirinto[x + 1][y] == 00) {
    entrada()
  }
  if (labirinto[x + 1][y] == 66) {
    mapa2()
  }
  if (labirinto[x + 1][y] == 55 && chaves > 0) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    chaves = chaves - 1;
  }
  if (labirinto[x + 1][y] == 44) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    chaves++
  }
  if (labirinto[x + 1][y] == 88 && limite > 0 && saldo > 9) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    limite = limite - 1;
    contProdutos++
    saldo = saldo - 10
  } 
  if (labirinto[x + 1][y] !== 22 && (x + 1) > 0 && labirinto[x + 1][y] !== 55 && labirinto[x + 1][y] !== 100 && labirinto[x + 1][y] !== 88) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    contador++
  }
}
  
function sobe() {
  if (labirinto[x - 1][y] == 00) {
    entrada()
  }
  if (labirinto[x - 1][y] == 66) {
    mapa2()
  }
  if (labirinto[x - 1][y] == 55 && chaves > 0) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    chaves = chaves - 1;
  }
  if (labirinto[x - 1][y] == 44) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    chaves++
  }
  if (labirinto[x - 1][y] == 88 && limite > 0 && saldo > 9) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    limite = limite - 1;
    contProdutos++
    saldo = saldo - 10
  } 
  if (labirinto[x - 1][y] !== 22 && (x - 1) > 0 && labirinto[x - 1][y] !== 55 && labirinto[x - 1][y] !== 100 && labirinto[x - 1][y] !== 88) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    contador++
  }
}

function direita() {
  if (labirinto[x][y + 1] == 00) {
    entrada()
  }
  if (labirinto[x][y + 1] == 66) {
    mapa2()
  }
  if (labirinto[x][y + 1] == 55 && chaves > 0) {
    labirinto[x][y] = 11;
    y = y + 1;
    labirinto[x][y] = 33;
    chaves = chaves - 1;
  }
  if (labirinto[x][y + 1] == 44) {
    labirinto[x][y] = 11;
    y = y + 1;
    labirinto[x][y] = 33;
    chaves++
  }
  if (labirinto[x][y + 1] == 88 && limite > 0 && saldo > 9) {
    labirinto[x][y] = 11;
    y = y + 1;
    labirinto[x][y] = 33;
    limite = limite - 1;
    contProdutos++
    saldo = saldo - 10
  } 
  if (labirinto[x][y + 1] !== 22 && y + 1 >= 0 && labirinto[x][y + 1] !== 55 && labirinto[x][y + 1] !== 100 && labirinto[x][y + 1] !== 88) {
    labirinto[x][y] = 11;
    y = y + 1
    labirinto[x][y] = 33;
    contador++
  }
}

function esquerda() {
  if (labirinto[x][y - 1] == 00) {
    entrada()
  }
  if (labirinto[x][y - 1] == 66) {
    mapa2()
  }
  if (labirinto[x][y - 1] == 55 && chaves > 0) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    chaves = chaves - 1;
  }
  if (labirinto[x][y - 1] == 44) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    chaves++
  }
  if (labirinto[x][y - 1] == 88 && limite > 0 && saldo > 9) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    limite = limite - 1;
    contProdutos++
    saldo = saldo - 10
  }
  if (labirinto[x][y - 1] !== 22 && y - 1 >= 0 && labirinto[x][y - 1] !== 55 && labirinto[x][y - 1] !== 100 && labirinto[x][y - 1] !== 88) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    contador++
  }
}

var contador = 0;

while (true) {
  mostrarLabirinto();
  console.log(' ')
  console.log('MAPA 1')
  console.log(' ')
  console.log('Saldo disponível: R$', saldo)
  console.log('Contador de passos:', contador)
  console.log('Contador de produtos:', contProdutos)
  console.log('Contador de chaves:', chaves)
  console.log('Contador de carrinho:', carrinho)
  console.log('Contador de cesto:', cesto)
  console.log('Limite de produtos:', limite)
  console.log('--------')
  console.log(' ')
  var escolha = prompt('WASD para andar. [Reset] para resetar:');
  
  if (escolha == 'w' || escolha == 'W') {
    sobe();
  } else if (escolha == 'a' || escolha == 'A') {
    esquerda();
  } else if (escolha == 's' || escolha == 'S') {
    desce();
  } else if (escolha == 'd' || escolha == 'D') {
    direita();
  } else if (escolha == 'Reset'){
    inicio()
  }
}
}

function mapa2() {
var labirinto = [
  [22, 22, 22, 22, 11, 33, 11, 22, 22, 22, 22, 22, 22, 00, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
  [22, 44, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 88, 11, 11, 11, 11, 11, 11, 11, 11, 88, 44, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 55, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 88, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 11, 11, 22, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 88, 11, 22, 22, 11, 11, 22],
  [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 22, 22, 22, 11, 88, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 22, 22, 22, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 11, 88, 22, 22, 11, 11, 22, 22, 22, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 11, 11, 22, 22, 11, 11, 22, 22, 22, 11, 11, 22],
  [22, 11, 11, 11, 100, 100, 100, 11, 11, 100, 100, 11, 11, 100, 100, 100, 11, 11, 11, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
  [22, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 55, 11, 88, 22, 22, 11, 11, 11, 22, 22, 11, 88, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 88, 11, 22, 22, 11, 11, 22],
  [22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 22],
  [22, 11, 88, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 88, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 22, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 11, 11, 22, 22, 11, 11, 11, 22, 22, 88, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 11, 11, 22, 22, 11, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 22, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 66, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]

if(carrinho == 1 && cesto == 1){
  limite = 120
} else if (cesto == 1){
  limite = 20
} else if (carrinho == 1){
  limite = 100
}
 
function colorir(text) {
  if (text == 22) {
    return clc.bgCyan('  ');
  } else if (text == 11) {
    return clc.bgWhite('  ');
  } else if (text == 88) {
    return clc.bgWhite('📦');
  } else if (text == 44) {
    return clc.bgWhite('🔑');
  } else if (text == 55) {
    return clc.bgBlackBright('🚪');
  } else if (text == 100) {
    return clc.bgBlackBright('  ')
  } else if (text == 66) {
    return clc.bgBlackBright('🚪')
  } else if (text == 00) {
    return clc.bgBlackBright('🚪')
  } else {
    return clc.bgWhite('😎');
  }
}

function mostrarLabirinto() {
  console.clear()
  for (let linha of labirinto) {
    var linhaFormatada = [];
    for (let item of linha) {
      linhaFormatada.push(colorir(item));
    }
    console.log(linhaFormatada.toString().replaceAll(',', ''));
  }
}

var x = 0;
var y = 5;

function desce() {
  if (labirinto[x + 1][y] == 00) {
    mapa1()
  }
  if (labirinto[x + 1][y] == 66) {
    mapa3()
  }
  if (labirinto[x + 1][y] == 55 && chaves > 0) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    chaves = chaves - 1;
  }
  if (labirinto[x + 1][y] == 44) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    chaves++
  }
  if (labirinto[x + 1][y] == 88 && limite > 0 && saldo > 9) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    limite = limite - 1;
    contProdutos++
    saldo = saldo - 10
  } 
  if (labirinto[x + 1][y] !== 22 && (x + 1) > 0 && labirinto[x + 1][y] !== 55 && labirinto[x + 1][y] !== 100 && labirinto[x + 1][y] !== 88) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    contador++
  }
}
  
function sobe() {
  if (labirinto[x - 1][y] == 00) {
    mapa1()
  }
  if (labirinto[x - 1][y] == 66) {
    mapa3()
  }
  if (labirinto[x - 1][y] == 55 && chaves > 0) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    chaves = chaves - 1;
  }
  if (labirinto[x - 1][y] == 44) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    chaves++
  }
  if (labirinto[x - 1][y] == 88 && limite > 0 && saldo > 9) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    limite = limite - 1;
    contProdutos++
    saldo = saldo - 10
  } 
  if (labirinto[x - 1][y] !== 22 && (x - 1) > 0 && labirinto[x - 1][y] !== 55 && labirinto[x - 1][y] !== 100 && labirinto[x - 1][y] !== 88) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    contador++
  }
}

function direita() {
  if (labirinto[x][y + 1] == 00) {
    mapa1()
  }
  if (labirinto[x][y + 1] == 66) {
    mapa3()
  }
  if (labirinto[x][y + 1] == 55 && chaves > 0) {
    labirinto[x][y] = 11;
    y = y + 1;
    labirinto[x][y] = 33;
    chaves = chaves - 1;
  }
  if (labirinto[x][y + 1] == 44) {
    labirinto[x][y] = 11;
    y = y + 1;
    labirinto[x][y] = 33;
    chaves++
  }
  if (labirinto[x][y + 1] == 88 && limite > 0 && saldo > 9) {
    labirinto[x][y] = 11;
    y = y + 1;
    labirinto[x][y] = 33;
    limite = limite - 1;
    contProdutos++
    saldo = saldo - 10
  } 
  if (labirinto[x][y + 1] !== 22 && y + 1 >= 0 && labirinto[x][y + 1] !== 55 && labirinto[x][y + 1] !== 100 && labirinto[x][y + 1] !== 88) {
    labirinto[x][y] = 11;
    y = y + 1
    labirinto[x][y] = 33;
    contador++
  }
}

function esquerda() {
  if (labirinto[x][y - 1] == 00) {
    mapa1()
  }
  if (labirinto[x][y - 1] == 66) {
    mapa3()
  }
  if (labirinto[x][y - 1] == 55 && chaves > 0) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    chaves = chaves - 1;
  }
  if (labirinto[x][y - 1] == 44) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    chaves++
  }
  if (labirinto[x][y - 1] == 88 && limite > 0 && saldo > 9) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    limite = limite - 1;
    contProdutos++
    saldo = saldo - 10
  }
  if (labirinto[x][y - 1] !== 22 && y - 1 >= 0 && labirinto[x][y - 1] !== 55 && labirinto[x][y - 1] !== 100 && labirinto[x][y - 1] !== 88) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    contador++
  }
}

var contador = 0;

while (true) {
  mostrarLabirinto();
  console.log(' ')
  console.log('MAPA 2')
  console.log(' ')
  console.log('Saldo disponível: R$', saldo)
  console.log('Contador de passos:', contador)
  console.log('Contador de produtos:', contProdutos)
  console.log('Contador de chaves:', chaves)
  console.log('Contador de carrinho:', carrinho)
  console.log('Contador de cesto:', cesto)
  console.log('Limite de produtos:', limite)
  console.log('--------')
  console.log(' ')
  var escolha = prompt('WASD para andar. [Reset] para resetar:');
  
  if (escolha == 'w' || escolha == 'W') {
    sobe();
  } else if (escolha == 'a' || escolha == 'A') {
    esquerda();
  } else if (escolha == 's' || escolha == 'S') {
    desce();
  } else if (escolha == 'd' || escolha == 'D') {
    direita();
  } else if (escolha == 'Reset'){
    inicio()
  }
}
}

function mapa3() {
  var labirinto = [
  [22, 22, 22, 22, 22, 00, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 33, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 44, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 88, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 55, 22, 55, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 22, 11, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 11, 22, 11, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 22, 11, 11, 11, 22, 22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 11, 22, 11, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 22, 11, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 22, 88, 11, 11, 22, 22, 88, 11, 22, 22, 11, 88, 22, 22, 11, 11, 22],
  [22, 44, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 66, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]

if(carrinho == 1 && cesto == 1){
  limite = 120
} else if (cesto == 1){
  limite = 20
} else if (carrinho == 1){
  limite = 100
}
 
function colorir(text) {
  if (text == 22) {
    return clc.bgCyan('  ');
  } else if (text == 11) {
    return clc.bgWhite('  ');
  } else if (text == 88) {
    return clc.bgWhite('📦');
  } else if (text == 44) {
    return clc.bgWhite('🔑');
  } else if (text == 55) {
    return clc.bgBlackBright('🚪');
  } else if (text == 100) {
    return clc.bgBlackBright('  ')
  } else if (text == 66) {
    return clc.bgBlackBright('🚪')
  } else if (text == 00) {
    return clc.bgBlackBright('🚪')
  } else {
    return clc.bgWhite('😎');
  }
}

function mostrarLabirinto() {
  console.clear()
  for (let linha of labirinto) {
    var linhaFormatada = [];
    for (let item of linha) {
      linhaFormatada.push(colorir(item));
    }
    console.log(linhaFormatada.toString().replaceAll(',', ''));
  }
}

var x = 0;
var y = 16;

function desce() {
  if (labirinto[x + 1][y] == 00) {
    mapa2()
  }
  if (labirinto[x + 1][y] == 66) {
    entrada()
  }
  if (labirinto[x + 1][y] == 55 && chaves > 0) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    chaves = chaves - 1;
  }
  if (labirinto[x + 1][y] == 44) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    chaves++
  }
  if (labirinto[x + 1][y] == 88 && limite > 0 && saldo > 9) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    limite = limite - 1;
    contProdutos++
    saldo = saldo - 10
  } 
  if (labirinto[x + 1][y] !== 22 && (x + 1) > 0 && labirinto[x + 1][y] !== 55 && labirinto[x + 1][y] !== 100 && labirinto[x + 1][y] !== 88) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    contador++
  }
}
  
function sobe() {
  if (labirinto[x - 1][y] == 00) {
    mapa2()
  }
  if (labirinto[x - 1][y] == 66) {
    entrada()
  }
  if (labirinto[x - 1][y] == 55 && chaves > 0) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    chaves = chaves - 1;
  }
  if (labirinto[x - 1][y] == 44) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    chaves++
  }
  if (labirinto[x - 1][y] == 88 && limite > 0 && saldo > 9) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    limite = limite - 1;
    contProdutos++
    saldo = saldo - 10
  } 
  if (labirinto[x - 1][y] !== 22 && (x - 1) > 0 && labirinto[x - 1][y] !== 55 && labirinto[x - 1][y] !== 100 && labirinto[x - 1][y] !== 88) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    contador++
  }
}

function direita() {
  if (labirinto[x][y + 1] == 00) {
    mapa2()
  }
  if (labirinto[x][y + 1] == 66) {
    entrada()
  }
  if (labirinto[x][y + 1] == 55 && chaves > 0) {
    labirinto[x][y] = 11;
    y = y + 1;
    labirinto[x][y] = 33;
    chaves = chaves - 1;
  }
  if (labirinto[x][y + 1] == 44) {
    labirinto[x][y] = 11;
    y = y + 1;
    labirinto[x][y] = 33;
    chaves++
  }
  if (labirinto[x][y + 1] == 88 && limite > 0 && saldo > 9) {
    labirinto[x][y] = 11;
    y = y + 1;
    labirinto[x][y] = 33;
    limite = limite - 1;
    contProdutos++
    saldo = saldo - 10
  } 
  if (labirinto[x][y + 1] !== 22 && y + 1 >= 0 && labirinto[x][y + 1] !== 55 && labirinto[x][y + 1] !== 100 && labirinto[x][y + 1] !== 88) {
    labirinto[x][y] = 11;
    y = y + 1
    labirinto[x][y] = 33;
    contador++
  }
}

function esquerda() {
  if (labirinto[x][y - 1] == 00) {
    mapa2()
  }
  if (labirinto[x][y - 1] == 66) {
    entrada()
  }
  if (labirinto[x][y - 1] == 55 && chaves > 0) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    chaves = chaves - 1;
  }
  if (labirinto[x][y - 1] == 44) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    chaves++
  }
  if (labirinto[x][y - 1] == 88 && limite > 0 && saldo > 9) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    limite = limite - 1;
    contProdutos++
    saldo = saldo - 10
  }
  if (labirinto[x][y - 1] !== 22 && y - 1 >= 0 && labirinto[x][y - 1] !== 55 && labirinto[x][y - 1] !== 100 && labirinto[x][y - 1] !== 88) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    contador++
  }
}

var contador = 0;

while (true) {
  mostrarLabirinto();
  console.log(' ')
  console.log('MAPA 3')
  console.log(' ')
  console.log('Saldo disponível: R$', saldo)
  console.log('Contador de passos:', contador)
  console.log('Contador de produtos:', contProdutos)
  console.log('Contador de chaves:', chaves)
  console.log('Contador de carrinho:', carrinho)
  console.log('Contador de cesto:', cesto)
  console.log('Limite de produtos:', limite)
  console.log('--------')
  console.log(' ')
  var escolha = prompt('WASD para andar. [Reset] para resetar:');
  
  if (escolha == 'w' || escolha == 'W') {
    sobe();
  } else if (escolha == 'a' || escolha == 'A') {
    esquerda();
  } else if (escolha == 's' || escolha == 'S') {
    desce();
  } else if (escolha == 'd' || escolha == 'D') {
    direita();
  } else if (escolha == 'Reset'){
    inicio()
  }
}
}

entrada()
