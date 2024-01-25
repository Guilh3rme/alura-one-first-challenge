function criptografar(texto) {
  texto = texto.toLowerCase();

  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");

  return texto;
}

function descriptografar(texto) {
  texto = texto.toLowerCase();

  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");

  return texto;
}
function criptografarTexto() {
  var textoInput = document.getElementById("textoInput").value;
  var resultadoTextArea = document.getElementById("resultado");

  resultadoTextArea.value = criptografar(textoInput);
  document.getElementById("textoInput").value = "";
}

function descriptografarTexto() {
  var textoInput = document.getElementById("textoInput").value;
  var resultadoTextArea = document.getElementById("resultado");

  resultadoTextArea.value = descriptografar(textoInput);
  document.getElementById("textoInput").value = "";
}
