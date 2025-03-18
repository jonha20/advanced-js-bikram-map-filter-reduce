//RESUELVE LOS EJERCICIOS AQUI
//1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que devuelva un array con el cuadrado de cada uno de los elementos.
const numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados() {
  return numbers.map((x) => x ** x);
}
console.log(elevados(numbers));
console.log(typeof elevados(numbers));

//2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
/*const arraycomida = [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
]*/

const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
const result2 = [];
foodList.forEach((comida) => {
  if (comida.includes("Pizza")) {
    result2.push("Como soy de Italia, amo comer Pizza");
  } else if (comida.includes("Ramen")) {
    result2.push("Como soy de Japón, amo comer Ramen");
  } else if (comida.includes("Paella")) {
    result2.push("Como soy de Valencia, amo comer Paella");
  } else if (comida.includes("Entrecot")) {
    result2.push("Aunque no como carne, el Entrecot es sabroso");
  }
});
/*foodList.splice(0,1,"Como soy de Italia, amo comer Pizza")
foodList.splice(1,2,"Como soy de Japón, amo comer Ramen")
foodList.splice(2,3,"Como soy de Valencia, amo comer Paella")
foodList.splice(3,4,"Aunque no como carne, el Entrecot es sabroso")
console.log(foodList.toString());*/
console.log(result2);

//Ejercicio 3. Dado el array staff, generar un segundo array staffDescriptions con el siguiente resultado [ 'Pepe es The Boss y le gusta leer y ver pelis', 'Ana es becaria y le gusta nadar y bailar', 'Luis es programador y le gusta dormir y comprar', 'Carlos es secretario y le gusta futbol y queso' ]

// Resultado esperado
/*
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const staffDescriptions = staff.map(
  (x) =>
    x.name +
    " es " +
    x.role +
    " y le gusta " +
    x.hobbies[0] +
    " y " +
    x.hobbies[1]
);
let result3 = staffDescriptions;
console.log(result3);

//4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter((impares) => impares % 2 !== 0);
console.log(result4);

//5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo
/*  ['Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!']*/
const foodList2 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];
/*const result5 = foodList2
  .filter((vegan) => vegan.isVeggie == true)
  .map((plato) => "Que rico " + plato.name + " me voy a comer!");*/
const result5 = foodList2
  .filter((vegan) => vegan.isVeggie == true)
  .map((plato) =>
    plato.name.includes("Tofu")
      ? "Que rica " + plato.name + " me voy a comer!"
      : "Que rico " + plato.name + " me voy a comer!"
  );
console.log(result5);
//Ejercicio 6 - Dado el array inventory, devolver un array result 6 con los nombres de los elementos que valgan más de 300 euros

/*
    [
      'TV Samsung,',
      'Viaje a Cancún'
    ]
  */

const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a Cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

const result6 = inventory
  .filter((precio) => precio.price > 300)
  .map(elm=>elm.name)
 /* .map((nombre) =>
    nombre.name.includes("TV") ? nombre.name + "," : nombre.name
  );*/
console.log(result6);

//Ejercicio 7 - Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array
const numeros3 = [39, 2, 4, 25, 62];
const result7 = numeros3.reduce(
  (accumulator, currentValue) => accumulator * currentValue
);
console.log(result7);

// 7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
  "Me",
  "llamo",
  "Jonathan",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
const result8 = sentenceElements.reduce(
  (accumulator, currentValue) => accumulator + " " + currentValue
);
console.log(result8);

//Ejercicio 9 - Obtener el monto total de los elementos que pertenecen a catergory "code" en la variable result9
// Resultado --> 60
const books = [
  {
    name: " JS for dummies",
    author: "Emily A. Vander Veer",
    price: 20,
    category: "code",
  },
  {
    name: "Don Quijote de la Mancha",
    author: "Cervantes",
    price: 14,
    category: "novel",
  },
  {
    name: "Juego de tronos",
    author: "George R. Martin",
    price: 32,
    category: "Fantasy",
  },
  {
    name: "javascript the good parts",
    author: "Douglas Crockford",
    price: 40,
    category: "code",
  },
];
const result9 = books.filter(category => category.category == "code").reduce((
    (accumulator, currentValue) => accumulator.price + currentValue.price
  ))
  console.log(result9);
  
