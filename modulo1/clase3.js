// Proyecto en GitHub (listo)

// TIpos de datos nulos e indefinidos
const constanteNula = null
var constanteINdefinida = undefined
constanteIndefinida = 0

// Terminar midificadores de listas y booleanos
var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 // copiar elemento de lista
 var prmerelemento = lista [0]
console.log(primerelemento)
// Agregar un elemento a una lista
lista.push(11)
console.log(lista)
//Sacar un elemento de una lista 
const UltimoEelento = lista.pop()
console.log(UltimoEelento)
//Modificadores booleanos
var verdadera = true
verdadera = !verdadera
var false = false
falsa = !falsa

// Objetos en javascript
var color = 'rojo'
var persona = {
    edad: 22,
    tienePeloLargo: false,
    numerosPreferidos: [1, 2, 3],
    nombre: {
        nombre: 'anderson'
        apellido: 'laverde'   
    },
    nacionalidad: 'colombiano'
    colorPreferido: 'negro'
}
// MOdificafores de objetos
//imprimir porpiedadesde un objeto 
console.log(persona.colorPreferido)
// Guardarlas
const nombrePersona = persona.nombre.apellido
console.log(nombrePersona)
// Agregar mas propiedades a un objeto 
persona.comidaPreferida = 'Hamburguesa'
//Eliminar propiedad de un objeto
delete persona.edad

// Comparadores (>, <> ===, !==, !)
// Mayor y menor que
4 > 3 // true
4 < 3 // false
// Igual
4 === 4 // true
100 === 99 // false
'hola' === 'hola' // true
true === false // false
// Diferencia 
4 !== 3 // true
4 !== 4 // false

// Operadores logicos (%% ||)
// And | Y | %%
// Para que un ANd sea verdadero(true) los valores de verdad que tiene a suderecha y a su izquierda deben ser verdaderos
true && true && true // true
4 > 3 && 5 < 2
// Or | ó
// Para que un Or sea verdadero(true) los valores de verdad que tiene a su derecha o izquierda, alguno de los dos deben ser true
true || false || false // true
4 < 3 || 5 > 2