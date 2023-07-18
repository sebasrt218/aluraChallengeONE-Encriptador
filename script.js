var encrypt_button = document.querySelector(".encrypt_button");
var dencrypt_button = document.querySelector(".dencrypt_button");

var encripter_logo_container = document.querySelector(".encripter_logo_container");
var result_alert_container = document.querySelector(".result_alert_container");
var result_text_container = document.querySelector(".result_text_container");
var encripter_box = document.querySelector(".encripter_box");

encrypt_button.onclick = encrypt;
dencrypt_button.onclick = dencrypt;

encripter_box.addEventListener("input", function() {
  if (encripter_box.value.trim() !== "") {
    encripter_logo_container.style.display = "none";
    result_alert_container.style.display = "none";
  } else {
    encripter_logo_container.style.display = "block";
    result_alert_container.style.display = "block";
  }
});

function encrypt() {
  hideElements();
  var cajatexto = getInputText();
  result_text_container.textContent = encryptText(cajatexto);
}

function dencrypt() {
  hideElements();
  var cajatexto = getInputText();
  result_text_container.textContent = dencryptText(cajatexto);
}

function getInputText() {
  var inputBox = document.querySelector(".encripter_box");
  return inputBox.value;
}


function hideElements() {
  encripter_logo_container.classList.add("ocultar");
  result_alert_container.classList.add("ocultar");
}

function encryptText(message) {
  var text = message;
  var finalText = "";

  for (var i = 0; i < text.length; i++) {
    if (text[i] == "a") {
      finalText = finalText + "ai";
    } else if (text[i] == "e") {
      finalText = finalText + "enter";
    } else if (text[i] == "i") {
      finalText = finalText + "imes";
    } else if (text[i] == "o") {
      finalText = finalText + "ober";
    } else if (text[i] == "u") {
      finalText = finalText + "ufat";
    } else {
      finalText = finalText + text[i];
    }
  }
  return finalText;
}

function dencryptText(message) {
  var text = message;
  var finalText = "";

  for (var i = 0; i < text.length; i++) {
    if (text[i] == "a") {
      finalText = finalText + "a";
      i = i + 1;
    } else if (text[i] == "e") {
      finalText = finalText + "e";
      i = i + 4;
    } else if (text[i] == "i") {
      finalText = finalText + "i";
      i = i + 3;
    } else if (text[i] == "o") {
      finalText = finalText + "o";
      i = i + 3;
    } else if (text[i] == "u") {
      finalText = finalText + "u";
      i = i + 3;
    } else {
      finalText = finalText + text[i];
    }
  }

  return finalText;
}

var copy_button = document.querySelector(".copy_button");
copy_button.addEventListener("click", copiar = () => {
  var contenido = document.querySelector(".result_text_container").textContent;
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(contenido)
      .then(() => {
        console.log("Texto copiado al portapapeles");
      })
      .catch((error) => {
        console.error("Error al copiar texto al portapapeles:", error);
      });
  } else {
    console.log("La función clipboard no está disponible en este navegador.");
  }
});
