function mediaAritmetica(){
    //Promp sirve para preguntar algo
    const n1 = prompt("Dime un número: ");
    const n2 = prompt("Dime el segundo número: ");
    const n3 = prompt("Dime el tercer número");
    const n4 = prompt("Dime el cuarto número: ");

    const suma = Number(n1) + Number(n2) + Number(n3) + Number(n4);
    const media = suma/4;

    //Alert nos sirve para poder ver la media.
    alert("La media es " + media);
}

function validarDatos(){
    let n1;
    while(isNaN(n1) || n1){
        n1 = prompt("Dime el primer numero: ")
    }
    const n2 = prompt("Dime el segundo número: ");
    const n3 = prompt("Dime el tercer número");
    const n4 = prompt("Dime el cuarto número: ");

    let media = Number(n1) + Number(n2) + Number(n3) + Number(n4);
    alert("La media es: " + media);
}

function numeroMultiploDeSiete(){
    let n1 = prompt("Dime un número: ");
    if(n1 % 7 == 0){
        alert(n1 + " es multiplo de 7");
    } else {
        alert(n1 + " no es multiplo de 7");
    }
}

function mayorMenor(){
    const nombre1 = prompt("Dime el nombre del primero: ");
    const edad1 = prompt("Dime la edad del primero");
    const nombre2 = prompt("Dime el nombre del segundo");
    const edad2 = prompt("Dime la edad del segundo");

    if(edad1 > edad2){
        alert(nombre1 + " es mayor que " + nombre2);
    } else if(edad1 < edad2){
        alert(nombre2 + " es mayor que " + nombre1);
    } else{
        alert(nombre2 + " tiene la misma edad que " + nombre1);
    }
}