function esPalindromo(palabra) {
    let palabraInvertida = palabra.split('').reverse().join('');
    return palabra === palabraInvertida;
  }
  
  let palabra = "ana";
  let resultado = esPalindromo(palabra);
  console.log(resultado);