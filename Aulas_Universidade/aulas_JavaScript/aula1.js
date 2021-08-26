/*
Como é um sistema web completo? 
Ele é formado por:
Js; (Cliente)
CSS; (Cliente)
PHP; (Servidor)
SQL; (Servidor)
HTML; (Cliente)
JavaScript sim, é linguagem de programação. 
Ele é a parte lógica de um frontend. 
JavaScript é uma linguagem de programação interpretada; 
Esse código consegue interagir com o usuário sem a necessidade de interação com o servidor; 
ELe não grava dados. 
Ela resolve problemas de front-end
*/
window.onload = function(){
    var valor = document.getElementById("nome").value;
    alert(valor+" foi digitado");
}

