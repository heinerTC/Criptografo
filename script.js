
// Función para encriptar el mensaje utilizando el cifrado César
function encriptar() {
    console.log("Encripta");

    const mensajeOriginal = document.getElementById("mensaje").value;
    const desplazamiento = 3; // Puedes ajustar el valor del desplazamiento

    let resultado = "";

    for (let i = 0; i < mensajeOriginal.length; i++) {
        let caracter = mensajeOriginal[i];

        if (caracter.match(/[a-z]/i)) {
            let codigoAscii = mensajeOriginal.charCodeAt(i);

            if (codigoAscii >= 65 && codigoAscii <= 90) {
                caracter = String.fromCharCode(((codigoAscii - 65 + desplazamiento) % 26) + 65);
            } else if (codigoAscii >= 97 && codigoAscii <= 122) {
                caracter = String.fromCharCode(((codigoAscii - 97 + desplazamiento) % 26) + 97);
            }
        }

        resultado += caracter;
    }

    document.getElementById("resultado").value = resultado;

}

// Función para desencriptar el mensaje utilizando el cifrado César
function desencriptar() {

        const mensajeEncriptado = document.getElementById("mensaje").value;
    const desplazamiento = 3; // Puedes ajustar el valor del desplazamiento

    let resultado = "";

    for (let i = 0; i < mensajeEncriptado.length; i++) {
        let caracter = mensajeEncriptado[i];

        if (caracter.match(/[a-z]/i)) {
            let codigoAscii = mensajeEncriptado.charCodeAt(i);

            if (codigoAscii >= 65 && codigoAscii <= 90) {
                caracter = String.fromCharCode(((codigoAscii - 65 + 26 - desplazamiento) % 26) + 65);
            } else if (codigoAscii >= 97 && codigoAscii <= 122) {
                caracter = String.fromCharCode(((codigoAscii - 97 + 26 - desplazamiento) % 26) + 97);
            }
        }

        resultado += caracter;
    }

    document.getElementById("resultado").value = resultado;

}

function copiarTexto() {    
    const mensaje = document.querySelector(".dato");
    const copia = document.querySelector(".copiar");
    copia.style.display = "none"
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
