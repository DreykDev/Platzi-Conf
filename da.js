let habitacion = {
  color : "white",
  cama : true
}

Object.getOwnPropertyNames(habitacion).forEach(function(val) {
  console.log(val + " -> " + habitacion[val]);
});
/*
El metodo Object.getOwnPropertyNames Es una forma de recorrer un objeto y devolverlo en
array con todas las propiedades, este recive como propiedad el objeto a recorrer y con
forEach crearemos una funcion para que por cada elemento que se devuelva en el array del objeto
se haga un console.log de este
*/