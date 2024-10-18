function contarLetra() {
    let letra = "a";
    let cadena = "javascript";
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === letra) {
            contador++;
        }
    }
    console.log(contador);
}
contarLetra();