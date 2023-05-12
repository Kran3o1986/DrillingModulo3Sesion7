Drilling Módulo 3 Sesión 7

CUE: ACTUALIZACIONES A ECMASCRIPT 
DRILLING: PEAKAUTO 
Para resolver este ejercicio, anteriormente debe haber revisado la lectura y los videos del CUE: 
Actualizaciones a ECMAScript. 
EJERCICIO: 
La marca de automóviles Peakauto, desea actualizar su sitio web para entregar una experiencia más llena 
de información a sus potenciales clientes. Una característica que la marca quiere destacar en su sitio, son 
las  especificaciones  técnicas  de  sus  últimos  vehículos.  El  trabajo  que  te  han  solicitado  consta  de  3 
objetivos principales:  
El primero, es almacenar los datos de uno de sus modelos más populares, el Goenx, y guardarlos en un 
objeto como se describe en el siguiente código: 

const vehiculo = { 
    marca: "", 
    modelo: "", 
    motor: { 
         
    } 
}  
 
Tal como se ve, la información que debe guardar es: la marca, el modelo, y las especificaciones del 
motor. Se describe a continuación: 
 
 
 
 
Si observas con atención, algunos atributos están en blanco, y esto sucede porque no están disponibles 
para ese modelo. Por lo tanto, si una característica no está incluida en el modelo, no debes agregarla dentro 
del atributo motor en el objeto del vehículo. 
El segundo objetivo, es extraer la información del objeto vehículo, y almacenarla en variables que luego 
mostrarás  a  través  de  la  consola  de  un  navegador.  Sin  embargo,  debes  tener  en  cuenta  que  usarás  el 
operador de asignación de fusión nula ??=, para evaluar si puedes asignar los valores a las variables, o no. 
Y luego, tu tercera tarea es mostrar todas las características de la ficha de especificaciones mediante la 
consola,  sea  que  estén  almacenadas  o  no.  Dado  que  algunas  propiedades  no  se  guardan  en  el  objeto, 
debes utilizar el operador de encadenamiento opcional, siempre que lo consideres oportuno, para mostrar 
el valor de una propiedad o el valor undefined, si es que no existe en el objeto.  
El objetivo final es poder mostrar todas las características en la hoja de especificaciones, a través de la 
consola, tal como se puede apreciar en la siguiente imagen: 
 
 
