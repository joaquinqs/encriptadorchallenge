function encriptar(){
    let text = document.getElementById("text").value;
    let texto = document.getElementById("texto").value;

    let textoencriptado = text
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")
    if (document.getElementById("text").value.length != 0){
        document.getElementById("texto").value = textoencriptado;
    } else {
        document.getElementById("texto").value = ""
        }
}
function desencriptar(){
    let text = document.getElementById("text").value;

    let textodesencriptado = text
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")
    if (document.getElementById("text").value.length != 0){
        document.getElementById("text").value = textodesencriptado;
    } else {
        document.getElementById("text").value = "Ingrese texto"
        }
}

function copiar(){
    var cont = document.getElementById("texto");
    cont.select();
    document.execCommand("copy");
}