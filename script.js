
function validarMayus(){
    let texto = document.getElementById("original").value;
    let validador = texto.match(/^[a-z ]+$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function encriptar() {
    if(!validarMayus()){
        var frase = document.getElementById("original").value;
        var permuta = {
            a:"ai",
            e:"enter",
            i:"imes",
            o:"ober",
            u:"ufat"
        };
    
        frase = frase.replace(/a|e|i|o|u/g, function(matched){
                return permuta[matched];
            });
        document.getElementById("encriptado").value = frase;
        document.querySelector(".mensaje").style.display = "none";
        document.querySelector(".muneco").style.display = "none";
        document.querySelector(".copiar").style.display = "block";
    }
}

function desencriptar() {
    if(!validarMayus()){
        var frase = document.getElementById("original").value;
        var permuta = {
            ai:"a",
            enter:"e",
            imes:"i",
            ober:"o",
            ufat:"u"
        };
    
        frase = frase.replace(/ai|enter|imes|ober|ufat/g, function(matched){
                return permuta[matched];
            });
        document.getElementById("encriptado").value = frase;
        document.querySelector(".mensaje").style.display = "none";
        document.querySelector(".muneco").style.display = "none";
        document.querySelector(".copiar").style.display = "block";
    }
}

function copiar(){
    var copiado = document.getElementById("encriptado").value;
    navigator.clipboard.writeText(copiado)
        .then(() => {
            document.querySelector(".mensaje").style.display = "block";
            document.querySelector(".muneco").style.display = "block";
            alert("Texto Copiado")
            document.getElementById("encriptado").value = "";
            document.getElementById("original").value = "";
            document.getElementById("original").focus();
            document.querySelector(".copiar").style.display = "none";
    })
}