
// evento de clique ao botão com ID soma
document.getElementById("soma").addEventListener("click", function aparecer() {

    // tira classe hidden elemento com a classe "soma" para exibi-lo
    document.querySelector(".soma").classList.remove("hidden");
    document.querySelector(".container").classList.add("hidden");
});

document.getElementById("btn-define").addEventListener("click", function definirmatrizes(soma) {

    // valores dos campos de entrada para o número de colunas e linhas das matrizes
    var colunaMatriz1 = document.getElementById("colmatriz1").value;
    var linhaMatriz1 = document.getElementById("linmatriz1").value;
    var colunaMatriz2 = document.getElementById("colmatriz2").value;
    var linhaMatriz2 = document.getElementById("linmatriz2").value;
    var input = document.createElement("input");
    var quebraLinha = document.createElement("br");

    if((colunaMatriz1 != colunaMatriz2 || linhaMatriz1 != linhaMatriz2) || (colunaMatriz1 <= 0 || colunaMatriz2 <=0 || linhaMatriz1 <= 0 || linhaMatriz2 <= 0)) {
        alert("MATRIZES DIFERENTES OU ALGUM CAMPO COM NÚMERO NULO OU NEGATIVO!!");
        location.reload();  // Nem sei se isso existe, mas o código parou de executar, então deixei :D
    }

    for (var aux1 = 1 ; aux1 <= linhaMatriz1 ; aux1++)
    {
        for (var aux2 = 1 ; aux2 <= colunaMatriz1 ; aux2++)
        {
            var input = document.createElement("input");
            input.setAttribute("id", "1c-"+aux2+"l-"+aux1); 
            document.getElementById("a").appendChild(input);
        }
        var quebraLinha = document.createElement("br");
        document.getElementById("a").appendChild(quebraLinha);
    }

    for (var aux1 = 1 ; aux1 <= linhaMatriz2 ; aux1++)
    {
        for (var aux2 = 1 ; aux2 <= colunaMatriz2 ; aux2++)
        {
            var input = document.createElement("input");
            input.setAttribute("id", "2c-"+aux2+"l-"+aux1);
            document.getElementById("b").appendChild(input);
        }
        var quebraLinha = document.createElement("br");
        document.getElementById("b").appendChild(quebraLinha);
    }
});

document.getElementById("btn-soma").addEventListener("click", function somar() {

    document.querySelector(".resultado").classList.remove("hidden");
    document.querySelector(".container").classList.add("hidden");
    document.querySelector(".soma").classList.add("hidden");

    var colunaMatriz3 = document.getElementById("colmatriz1").value;
    var linhaMatriz3 = document.getElementById("linmatriz1").value;

    for (var aux1 = 1 ; aux1 <= linhaMatriz3 ; aux1++)
    {
        for (var aux2 = 1 ; aux2 <= colunaMatriz3 ; aux2++)
        {
            var span = document.createElement("span");
            span.textContent = parseInt(document.getElementById("1c-"+aux2+"l-"+aux1).value) + parseInt(document.getElementById("2c-"+aux2+"l-"+aux1).value);
            span.setAttribute("id", "3c-"+aux2+"l-"+aux1);
            document.getElementById("c").appendChild(span);
        }
        var quebraLinha = document.createElement("br");
        document.getElementById("c").appendChild(quebraLinha);
    }
});

