function enviar(){
    const dbParam = JSON.stringify(
        {
            "nome": document.querySelector("#nome").value,
            "documento": document.querySelector("#documento").value,
            "celular": document.querySelector("#celular").value,
            "numero": document.querySelector("#numero").value,
            "cidade": document.querySelector("#cidade").value,
            "estado": document.querySelector("#estado").value,
            "bairro": document.querySelector("#bairro").value,
            "endereco": document.querySelector("#logradouro").value,
            "cep": document.querySelector("#cep").value
        }
    );
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        console.log(myObj);
        document.getElementById("demo").innerHTML = myObj;
    }
    xmlhttp.open("POST", "https://etec.fernandograciano.com.br/cadastrocliente.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("dados="+dbParam );
}