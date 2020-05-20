

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    //document.getElementById("mousermove").innerHTML = "<b>Obrigado por passar o mouser</b>";
    elemento.innerHTML = "Obrigado por passar o mouser"; 
    //alert("troca texto")
}

function voltar(elemento){
    //document.getElementById("mousermove").innerHTML = "<b>Passe mouser aqui</b>";
    elemento.innerHTML = "Passe mouser aqui";
}
 function load(){
     alert("pagina carregada");
 }

 function funcaoChange(elemento){
     console.log(elemento.value)
 }
/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);

*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*
var idade = prompt("Qual sua iade")

if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas.nome);
alert(frutas[1].nome);
*/
/*
var lista = ["maçã", "pêra","laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join("-"));
*/

/*
var nome = "Pedro Amorim";
var n1 = 4;
var n2 = 7;
var frase = "japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2)
console.log(nome);
console.log(n1 * n2);
//console.log(frase.replace("Japão","Brasil"));
alert(frase.toLowerCase());
*/