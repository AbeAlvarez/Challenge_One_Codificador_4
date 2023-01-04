function encriptar(){
    var texto = document.getElementById("textIn").value.toLowerCase();

    var txtEncriptado = texto.replace(/e/igm,"enter");
    var txtEncriptado = txtEncriptado.replace(/i/igm,"ines");
    var txtEncriptado = txtEncriptado.replace(/a/igm,"ai");
    var txtEncriptado = txtEncriptado.replace(/o/igm,"ober");
    var txtEncriptado = txtEncriptado.replace(/u/igm,"ufat");

    document.getElementById("imagen").style.display = "none";
    document.getElementById("aviso").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("textOut").innerHTML = txtEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
};

function desencriptar(){
    var texto = document.getElementById("textIn").value.toLowerCase();

    var txtEncriptado = texto.replace(/enter/igm,"e");
    var txtEncriptado = txtEncriptado.replace(/ines/igm,"i");
    var txtEncriptado = txtEncriptado.replace(/ai/igm,"a");
    var txtEncriptado = txtEncriptado.replace(/ober/igm,"o");
    var txtEncriptado = txtEncriptado.replace(/ufat/igm,"u");

    document.getElementById("imagen").style.display = "none";
    document.getElementById("aviso").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("textOut").innerHTML = txtEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
};

function copiar(){
    var contenido = document.querySelector("#textOut");
    contenido.select();
    document.execCommand("copy");
    alert("El texto ha sido copiado");
};