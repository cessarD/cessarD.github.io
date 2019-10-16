// JavaScript Document

document.getElementById("lunes").addEventListener("click",function() {
document.getElementById("lu").style.display= "block";
document.getElementById("Ma").style.display= "none";
document.getElementById("Mi").style.display= "none";
document.getElementById("Ju").style.display= "none";
document.getElementById("Vi").style.display= "none";
});
document.getElementById("martes").addEventListener("click",function() {
document.getElementById("lu").style.display= "none";
document.getElementById("Ma").style.display= "block";
document.getElementById("Mi").style.display= "none";
document.getElementById("Ju").style.display= "none";
document.getElementById("Vi").style.display= "none";
});
document.getElementById("miercoles").addEventListener("click",function() {
document.getElementById("lu").style.display= "none";
document.getElementById("Ma").style.display= "none";
document.getElementById("Mi").style.display= "block";
document.getElementById("Ju").style.display= "none";
document.getElementById("Vi").style.display= "none";
});
document.getElementById("jueves").addEventListener("click",function() {
document.getElementById("lu").style.display= "none";
document.getElementById("Ma").style.display= "none";
document.getElementById("Mi").style.display= "none";
document.getElementById("Ju").style.display= "block";
document.getElementById("Vi").style.display= "none";
});
document.getElementById("viernes").addEventListener("click",function() {
document.getElementById("lu").style.display= "none";
document.getElementById("Ma").style.display= "none";
document.getElementById("Mi").style.display= "none";
document.getElementById("Ju").style.display= "none";
document.getElementById("Vi").style.display= "block";
});