const title = document.querySelector("h1")
const p1 = document.querySelector("p")
const header = document.querySelector("header")
let texto = document.querySelector("#text");
let body = document.querySelector("body");
const btnModo = document.querySelector("#modo")
const nav = document.querySelector("nav")
let palert = document.querySelector("#alert")
const Fhtml = document.querySelector("#fhtml")
   const Fpdf = document.querySelector("#fpdf")
const label = document.querySelector("label")
const label2 = document.querySelector("#label2")
let colorI = document.querySelector("#inColor").value
   const btcolorI = document.querySelector("#colorBt")
   btcolorI.style.backgroundColor = colorI
let footer = document.querySelector("footer")
let p2 = document.querySelector("#name");
//variables para acceder a elementos html
let modoBW = false//variable necesaria para que el boton de cambiar a modo oscuro y de oscuro a blanco funcione
function borrar() {
    texto.innerHTML = " "
};
function modo(){
   if (!modoBW) { 
    body.style.background = "black"
    texto.style.backgroundColor = "black"
    texto.style.color = "white"
    btnModo.style.backgroundColor = "white"
    btnModo.style.color = "black"
    btnModo.innerHTML = "modo: oscuro"
    title.style.color = "white"
    header.style.border = "solid 5px white"
      p1.style.color ="white"
    nav.style.border = " solid 5px white"
    nav.style.borderBottom= "0"
    label.style.color = "white"
    label2.style.color = "white"
    footer.style.border = "solid 5px white"
    modoBW = true
   }else{
      body.style.background = "white"
    texto.style.backgroundColor = "white"
    texto.style.color = "black"
    btnModo.style.backgroundColor = "black"
    btnModo.style.color = "white"
    btnModo.innerHTML = "modo: claro"
    title.style.color = "black"
    header.style.border = "solid 5px black"
    p1.style.color ="black"
    nav.style.border = "solid 5px black"
    nav.style.borderBottom= "0"
    label.style.color = "black"
    label2.style.color = "black"
    footer.style.border = "solid 5px black"
    modoBW = false
   }
}
function tituloFont(font){//letra grande
   let selecion = window.getSelection();
   if (selecion.rangeCount > 0) {
    let rango = selecion.getRangeAt(0)
    let span = document.createElement("span")
    span.style.fontSize = "30px"
    rango.surroundContents(span)
   }
}
function normalFont(){//letra normal
   let selecion2 = window.getSelection();
   if (selecion2.rangeCount > 0) {
    let rango = selecion2.getRangeAt(0)
    let span = document.createElement("span")
    span.style.fontSize = "15px"
    rango.surroundContents(span)
   }
}
function centrar(){//centrar texto selecionado
   let selecion3 = window.getSelection();
   if (selecion3.rangeCount > 0) {
    let rango = selecion3.getRangeAt(0)
    let span = document.createElement("span")
    span.style.display = "block";
    span.style.textAlign = "center"
    rango.surroundContents(span)
   }
}
function centrar2(){//poner en posicion normal texto selecionado
   let selecion4 = window.getSelection();
   if (selecion4.rangeCount > 0) {
    let rango = selecion4.getRangeAt(0)
    let span = document.createElement("span")
    span.style.display = "block";
    span.style.textAlign = "left"
    rango.surroundContents(span)
   }
}
function color(){//poner color a texto selecionado
   let color = document.querySelector("#inColor").value
   const btcolor = document.querySelector("#colorBt")
   btcolor.style.backgroundColor = color
   let selecion5 = window.getSelection();
   if (selecion5.rangeCount > 0) {
    let rango = selecion5.getRangeAt(0)
    let span = document.createElement("span")
    span.style.color = color
    rango.surroundContents(span)
   }
}
function guardar(){//guarda en formato html y pdf 
   let descargarTexto = document.querySelector("#text").innerHTML;
   let archivo = new Blob([descargarTexto],{type: "text/html"});
   let enlace = document.createElement("a");
   enlace.href = URL.createObjectURL(archivo);
   let name = document.querySelector("#nombreA").value
  if (name === "" || name.trim() === "") {
      palert.innerHTML = "debes de poner un nombre";
  }
  else{
   if(Fhtml.checked){
    enlace.download =  name + ".html";
   enlace.click();
   palert.innerHTML = ""
   }
  else if (Fpdf.checked) {
   let elemento = document.querySelector("#text");
     html2pdf().from(elemento).save(name + ".pdf");
     palert.innerHTML = ""
  }
  }
}