function seguir(){
alert(`você agora está seguindo GordinSalvador`)
}
//exercicio 1
function exe1(){
    //vamos usar DOM para recuperar dados do html
    //dom = document object model
    //converter texto para numero
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    //vamos fazer a subtração
    let sub = nro1 - nro2
    //vamos mostrar o resultado da subtração
    //alert("A subtração é " + sub)
document.getElementById("sub").innerText = "Resultado: " + sub
}