function soma(){
    const inputA = document.getElementById("a");
    const inputB = document.getElementById("b");
    const elementoResultado = document.getElementById("result");
    const numA = parseFloat(inputA.value);
    const numB = parseFloat(inputB.value);

    if (isNaN(numA) || isNaN(numB)) {
        elementoResultado.textContent = "Resultado: Digite números válidos...";
        return;
    }

    const resultadoSoma = numA + numB;

    elementoResultado.textContent = "Resultado: " + resultadoSoma;
}