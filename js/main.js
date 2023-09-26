const buscador = document.getElementById(`busqueda`)

const frutas = {
    amarillo: "banana",
    rojo: "manzana",
    verde: "palta"
}

let color = `verde`;

console.log(frutas[color] || `dooou`)


let edad = 2;

if (edad > 18){
    console.log('Usted es mayor de edad')
}
else if(edad === true){
    console.log(`Pusiste true`)
}
else if (edad = 0){
    console.log(`Pusiste false`)
}

//Otra forma de else if, aunque poco usada...
/* switch(edad){
    case 2: console.log(`Tiene ` + edad, ` años`)
    break;

    case 3: console.log(`Tiene 3 años`);
    break;

    default:
        console.log(`lol`)
        break
} */

// TERNARIOS

let esMayor = true;

esMayor  = true
? console.log(`Es mayor`)
: console.log(`Es menor`)

// Bucles e Iteración

for (let index = 15; index >= 1; index--){
    console.log(`Estamos en la iteración número: ${index}`)
    if(index==10){
        continue
    }
}

const miArray = [
    edad = 10,
    precio = 20000,
    color = `blanco`,
    vacunado = true,

    perro = {
        fuerza: 200,
        peso: 500,
        nombre: `Firu`
    }
]


//Para usar continue tenes que marcar que es lo que mostraría el indice de lo que querés saltear.
for (let i = 0; i<6; i++){
    if (miArray[i] == `blanco`){
        continue;
    }
    console.log(miArray[i])
}


let dou = 0;

while (dou < 10){
    dou ++;
    console.log(dou)
}