
var cabecera = document.head;
var cuerpo = document.body;

/** LP ANTIGUOS **/
var lpAntiguo = document.getElementById("antiguo");
console.log(lpAntiguo);

var nodos = lpAntiguo.childNodes;
var aa = [];

for (var i=0; i<nodos.length; i++) {
    if (nodos[i].nodeType === document.ELEMENT_NODE) {
        aa.push(nodos[i].textContent);
    }
}

/** LP MODERNOS **/
var lpModerno = document.getElementById("moderno");

nodos = lpModerno.childNodes;
var am = [];

for (var i=0; i<nodos.length; i++) {
    if (nodos[i].nodeType === document.ELEMENT_NODE) {
        am.push(nodos[i].textContent);
    }
}

/*
var total = aa.concat(am)
document.getElementById("rpta2").innerHTML = total;
*/

/*
COSAS DIFÍCILES
*/

// No quiero Eliminar y quiero Agregar
/*
document.getElementById("rpta1").innerHTML=am;
am.splice(2,0,"Unlambda","Malbourg"); //el 0 es que no se va a borrar, el 1 es la pos donde se va a insertar
document.getElementById("rpta2").innerHTML=am;
*/

// Eliminar y Agregar
/*
document.getElementById("rpta1").innerHTML=am;
am.splice(3,1,"Ooaak!"); //se borra el elemento de la pos3 y ahí mismo se inserta Ooaak
am.splice(4,1); //eliminar sin agregar
document.getElementById("rpta2").innerHTML=am;
*/

// Puedo agregar al inicio 
document.getElementById("rpta1").innerHTML=am;
am.unshift("Zimbu")
// Puedo agregar al inicio 
am.push("Zimbu2")
document.getElementById("rpta2").innerHTML=am;

// Pilas - retir último elemento 
/*
document.getElementById("rpta1").innerHTML=am;
var x = am.pop();
document.getElementById("rpta1").innerHTML=am;
*/

// Colas - retirar primer elemento 
var x = am.shift();
document.getElementById("rpta2").innerHTML=am;
