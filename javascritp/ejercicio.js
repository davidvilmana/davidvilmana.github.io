let figure = prompt("Escribe el nombre de la figura que deseas calcular el área (MAYÚSCULAS)")

let base;
let side;
let diagonalmayor;
let diagonalmenor;
let basemayor;
let basemenor;
let diameter;
let apothem;
let heigth;
let raidus;

switch(figure){
    case "CUADRADO".toLocaleLowerCase ():
        side = prompt("Cuánto tiene de lado")
        side = prompt("Cuánto tiene del otro lado")
        document.write(`El área del cuadrado es  ${side*side}`)
        break

    case "RECTANGULO".toLocaleLowerCase (): 
        base = prompt("Cuánto tiene de base")
        heigth = prompt("Cuánto tiene de altura")
        document.write(`El área del rectángulo es ${base*heigth} `)
        break

    case "TRIANGULO".toLocaleLowerCase ():
        base = prompt("Cuánto tiene de base")
        heigth = prompt("Cuánto tiene de altura")
        document.write(`El área del triangulo es ${(base*heigth)/2}`)
        break

    case "ROMBO".toLocaleLowerCase ():
        diagonalmayor = prompt("Cuánto es el diagonal mayor que tiene:")
        diagonalmenor = prompt("Cuánto es el diagonal menor que tiene:")
        document.write(`El área del rombo es  ${diagonalmayor*diagonalmenor}`)
        break

    case "ROMBOIDE".toLocaleLowerCase ():
        base = prompt("Cuánto tiene de base")
        heigth = prompt("Cuánto tiene de altura")
        document.write(`El área del romboide es  ${base*heigth}`)
        break

    case "TRAPECIO".toLocaleLowerCase ():
        basemenor = prompt("Cuánto tiene de base menor")
        basemayor = prompt("Cuánto tiene de base mayor")
        heigth= prompt("Cuánto tiene de altura")
        document.write(`El área del trapecio es  ${(heigth*(basemayor+basemenor)/2)}`)//
        break

    case "CIRCULO".toLocaleLowerCase ():
        diameter = prompt("Cuánto tiene de diametro")
        raidus = prompt("Cuánto tiene de radio")
        document.write(`El área del círculo es  ${Math.PI * Math.pow(raidus,2)}`)
        break

    case "POLIGONO".toLocaleLowerCase ():
        side = prompt("Cuánto tiene de lado")
        apothem = prompt("Cuánto tiene de apotema")
        document.write(`El área del poligono es  ${(side*5)+(apothem)/2}`)        
        break
    default: document.write("La palabra que escribiste no es correcta")
}






// let figure = prompt("Escribe el nombre de la figura que deseas calcular el area (minuscula): ")

// let  base;
// let  heigth;
// let  lado;
// let  apotema;
// let  diagonal;
// let  diagonalmayor;
// let  perimetro;
// let  basemayor;
// let  basemenor;
// let  lados;

// switch(figure){
//     case "cuadrado":
//         lado = prompt("cuanto tiene sus lados")
//         document.write(`El perimetro es ${(2*lado)+(2*lado)}<br>`)
//         document.write(`El area del cuadrado es ${lado*lado}`)
        
//         break
    
//     case "rombo":
//         lado= prompt("cuanto tiene de lado")
//         diagonalMayor = prompt("cuando mide la Diagonal mayor")
//         diagonal = prompt("cuanto mide la diagonal menor")
//         document.write(`El ara del rombo es ${diagonalmayor*diagonal}<br>`)
//         document.write(`El perimetro es ${(2*lado)+(2*lado)}`)
//         break
//     case "romboide":
//         base = prompt("Cuanto tiene de base")
//         heigth = prompt("Cuanto tiene de altura")
//         document.write(`El area del romboide es ${base*heigth}<br>`)
//         document.write(`El perimetro es ${(2*base)+(2*heigth)}`)
//         break
    
//     case"trapecio":
//         lado=(`Cuanto tiene de lado `)
//         heigth=prompt("Cuanto tiene de altura")
//         basemayor= prompt("Cuanto tiene de basemayor")
//         base= prompt("Cuanto tiene de basemenor")
//         document.write(`El area del trapecio es  ${(heigth)*(basemayor*base)/2}<br>`)
//         document.write(`El perimetro es ${(basemayor+base+lado)}`)
//         break
//     case "poligono":  
//         lado=prompt("Cuanto tiene de lado")
//         lados=prompt("Cuantos lados tienes ")
//         apotema=prompt("Cuanto tiene de apotema")
//         document.write(`El area del poligono es ${(lado*apotema)/2}<br>`)
//         document.write(`El perimetro es ${lado*lados}`)
//         break
//     }