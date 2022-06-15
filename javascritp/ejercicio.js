//
let figure = prompt("Escribe el nombre de la figura que deseas calcular el area (minuscula): ")

let  base;
let  heigth;
let  lado;
let  apotema;
let  diagonal;
let  diagonalmayor;
let  perimetro;
let  basemayor;
let  basemenor;
let  lados;

switch(figure){
    case "cuadrado":
        lado = prompt("cuanto tiene sus lados")
        document.write(`El perimetro es ${(2*lado)+(2*lado)}<br>`)
        document.write(`El area del cuadrado es ${lado*lado}`)
        
        break
    
    case "rombo":
        lado= prompt("cuanto tiene de lado")
        diagonalMayor = prompt("cuando mide la Diagonal mayor")
        diagonal = prompt("cuanto mide la diagonal menor")
        document.write(`El ara del rombo es ${diagonalmayor*diagonal}<br>`)
        document.write(`El perimetro es ${(2*lado)+(2*lado)}`)
        break
    case "romboide":
        base = prompt("Cuanto tiene de base")
        heigth = prompt("Cuanto tiene de altura")
        document.write(`El area del romboide es ${base*heigth}<br>`)
        document.write(`El perimetro es ${(2*base)+(2*heigth)}`)
        break
    
    case"trapecio":
        lado=(`Cuanto tiene de lado `)
        heigth=prompt("Cuanto tiene de altura")
        basemayor= prompt("Cuanto tiene de basemayor")
        base= prompt("Cuanto tiene de basemenor")
        document.write(`El area del trapecio es  ${(heigth)*(basemayor*base)/2}<br>`)
        document.write(`El perimetro es ${(basemayor+base+lado)}`)
        break
    case "poligono":  
        lado=prompt("Cuanto tiene de lado")
        lados=prompt("Cuantos lados tienes ")
        apotema=prompt("Cuanto tiene de apotema")
        document.write(`El area del poligono es ${(lado*apotema)/2}<br>`)
        document.write(`El perimetro es ${lado*lados}`)
        break
    }