// 1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla
function calcularSuma(num1,num2){

    let suma;

    suma=num1+num2;

    console.log(`La suma de ${num1} + ${num2} nos da ${suma}.`);

}

calcularSuma(10,20);

/*---------------------------------------------------------------------------------------------------------------------*/

// 2. Un estudiante realiza 4 exámenes, calcular el promedio de estos 
function calcularPromedio(nota1,nota2,nota3,nota4){

    let promedio;

    promedio=(nota1+nota2+nota3+nota4)/calcularPromedio.length;

    console.log(`El promedio de las notas ${nota1}, ${nota2}, ${nota3}, ${nota4} es ${promedio}.`);

}

calcularPromedio(10,20,15,14);

/*---------------------------------------------------------------------------------------------------------------------*/

// 3. Calcular el área de un rectángulo 
function calcularAreaRectangulo(base,altura){

    let area;

    area=base*altura;

    console.log(`El area del rectángulo con base ${base} y altura ${altura} es ${area}.`);

}

calcularAreaRectangulo(10,20);

/*---------------------------------------------------------------------------------------------------------------------*/

// 4. Calcular el área de un triángulo 
function calcularAreaTriangulo(base,altura){

    let area;

    area=(base*altura)/2;

    console.log(`El area del triángulo con base ${base} y altura ${altura} es ${area}.`);

}

calcularAreaTriangulo(10,20);

/*---------------------------------------------------------------------------------------------------------------------*/

// 5. Calcular el área de una circunferencia 
function calcularAreaCir(diametro){

    const pi = 3.14;

    let area;

    area=diametro*pi;

    console.log(`El area de la circunferencia con diametro ${diametro} es ${area.toFixed(2)}.`);

}

calcularAreaCir(10);

/*---------------------------------------------------------------------------------------------------------------------*/

// 6. Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre 
function calcularSueldoSemanal(horasTrabajadas, salarioPorHora){

    const diasDeTrabajoSemanal  = 6;

    let sueldoSemanal;

    sueldoSemanal=horasTrabajadas*salarioPorHora*diasDeTrabajoSemanal;

    console.log(`El sueldo semanal de un trabajandor laborando ${diasDeTrabajoSemanal} días a la semana, con una paga de $${salarioPorHora} por ${horasTrabajadas} horas trabajadas, es de $${sueldoSemanal}.`);

}

calcularSueldoSemanal(8, 20);

/*---------------------------------------------------------------------------------------------------------------------*/

// 7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m).
function calcularPulgadasPorMetro(cantidadMetros){

    const pulgadasAmetros= 0.0254;

    let medidaFinal;

    medidaFinal=(cantidadMetros*1)/pulgadasAmetros;

    console.log(`La cantidad de pulgadas es de ${medidaFinal.toFixed(3)} por ${cantidadMetros} metros solicitados.`);

}

calcularPulgadasPorMetro(8);

/*---------------------------------------------------------------------------------------------------------------------*/

// 8. Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano 
function calcularSolesADolares(cantidadSoles){

    const conversionDolares= 0.2745;

    let cantidadFinal;

    cantidadFinal=cantidadSoles*conversionDolares;

    console.log(`La cantidad de ${cantidadSoles} soles equivale a ${cantidadFinal.toFixed(2)} dolares.`);

}

calcularSolesADolares(300);

/*---------------------------------------------------------------------------------------------------------------------*/

// 9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron 
function calcularEdad(añoNac){

    const añoActual = 2021;

    let edad;

    edad=añoActual-añoNac;

    console.log(`Si la persona nació en ${añoNac}, entonces tiene ${edad} años.`);

}

calcularEdad(1998);

/*---------------------------------------------------------------------------------------------------------------------*/

// 10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad 
function conocerEdadyNombre(){

    nombre1='Moises';
    edad1=23;
    nombre2='Jesus';
    edad2=27;
    nombre3='Monica';
    edad3=13;

    if(edad1<edad2){
        if(edad1<edad3){
            console.log(`La edad menor es de: ${nombre1} con ${edad1}.`);
        }
        else{
            console.log(`La edad menor es de: ${nombre3} con ${edad3}.`);
        }
    }
    else if(edad2<edad3){
        console.log(`La edad menor es de: ${nombre2} con ${edad2}.`);
    }
    else{
        console.log(`La edad menor es de: ${nombre3} con ${edad3}.`);
    }
}

conocerEdadyNombre();

/*---------------------------------------------------------------------------------------------------------------------*/

// 11. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador

function calcularBono(añosDeServicio){

    let bono;

    if(añosDeServicio==1){
        bono=100;
    }
    else if(añosDeServicio==2){
        bono=200;
    }
    else if(añosDeServicio==3){
        bono=300;
    }
    else if(añosDeServicio==4){
        bono=400;
    }
    else if(añosDeServicio==5){
        bono=500;
    }
    else{
        bono=1000;
    }
    console.log(`Si el trabajador a estado ${añosDeServicio} años trabajando, le corresponde un bono de $${bono}.`);
}

calcularBono(8);

/*---------------------------------------------------------------------------------------------------------------------*/

// 12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado.

function calcularSalario(){

  let salario=1500;
  
  for(let i = 1; i <= 6; i++){

    salario = salario + (salario *.10);
    console.log(`El salario en el año ${i} es $${salario.toFixed(2)}`);
  }

}

calcularSalario();

/*---------------------------------------------------------------------------------------------------------------------*/

// 13. Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados
function calcularAprobYReprob(cantAlumnos){

  let aprobados = 0;

  let reprobados = 0;

  let calificacion;
  let mostrarCali=[];

  while(cantAlumnos>0){
    calificacion=Number(prompt('Ingresa la calificación'));
    if(calificacion>=10.5){
      aprobados = aprobados+1;
    }
    else{
      reprobados = reprobados+1;
    }
    cantAlumnos=cantAlumnos-1;
    mostrarCali[cantAlumnos] = calificacion;
  }
  console.log(`Las calificaciones son ${mostrarCali}`);
  console.log(`El total de alumnos aprobados es ${aprobados}`);
  console.log(`El total de alumnos reprobados es ${reprobados}`);
}

// calcularAprobYReprob(5);

/*---------------------------------------------------------------------------------------------------------------------*/

// 14. Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia 
function calcularFocos(n) {

    let color;

    let verde = 0;
    let blanco = 0;
    let rojo = 0;


    function crearInput() {
        
        var input1 = document.createElement("input");
        input1.setAttribute("type", "radio");
        input1.setAttribute("name", "color");
        input1.setAttribute("id", "1");
        input1.setAttribute("checked", "checked");
        input1.setAttribute("value", "1");
        input1.setAttribute("style", "visibility:hidden");
        document.body.appendChild(input1);

        var input2 = document.createElement("input");
        input2.setAttribute("type", "radio");
        input2.setAttribute("name", "color");
        input2.setAttribute("id", "2");
        input2.setAttribute("value", "2");
        input2.setAttribute("style", "visibility:hidden");
        document.body.appendChild(input2);

        var input3 = document.createElement("input");
        input3.setAttribute("type", "radio");
        input3.setAttribute("name", "color");
        input3.setAttribute("id", "3");
        input3.setAttribute("value", "3");
        input3.setAttribute("style", "visibility:hidden");
        document.body.appendChild(input3);
    }

    while (n > 0) {
        crearInput();


        color = document.querySelector('input[name=color]:checked').value;


        if (color >= 1 && color <= 3) {
            if (color == 1) {
                verde = verde + 1;
            }
            else if (color == 2) {
                blanco = blanco + 1;
            }
            else {
                rojo = rojo + 1;
            }
            n = n - 1;
        }
        else {
            console.log("Ingresa un color correcto");
        }
    }



    console.log(`El total de focos verdes es ${verde}`);
    console.log(`El total de focos blancos es ${blanco}`);
    console.log(`El total de focos rojos es ${rojo}`);
}

calcularFocos(3);

/*---------------------------------------------------------------------------------------------------------------------*/

// 15. Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones

function conocerSiVota(edad) {

    const edadApta = 18;

    if (edad >= edadApta) {
        console.log(`La persona tiene ${edad} años y puede votar.`);
    }
    else {
        console.log(`La persona tiene ${edad} años y aún no puede votar.`);
    }

}

conocerSiVota(15);
  