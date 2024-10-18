function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
  }
  
  let texto = "Hola";
  let textoInvertido = invertirCadena(texto);
  console.log(textoInvertido);