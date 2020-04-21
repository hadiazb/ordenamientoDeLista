window.onload = cargar;

function cargar() {
    document.getElementById('boton').addEventListener('click', newData, false);
    document.getElementById('boton').addEventListener('click', pintar, false);
}

var data = [
    {
      "nombre": null,
      "apellido": null,
      "edad": null,
      "carrera": null,
    }
  ];

function limpiar() {
    document.getElementById("nombre").value = '';
    document.getElementById("apellido").value = '';
    document.getElementById("edad").value = '';
    document.getElementById("carrera").value = '';
}

function pintar() {
    var cuerpoTabla = document.getElementById("cuerpoTabla");
    var completarTabla = "";
    var indice = 2;
    for (let i = 1; i < data.length; i++) {
        if (i % indice == 0) {
            completarTabla += `<tr class="table__filas uno"><td class="numero center">${i}</td><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td class="center">${data[i].edad}</td><td>${data[i].carrera}</td></tr>`;
        } else {
            completarTabla += `<tr class="table__filas"><td class="numero center">${i}</td><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td class="center">${data[i].edad}</td><td>${data[i].carrera}</td></tr>`;
        }
    }
    cuerpoTabla.innerHTML = completarTabla;
    
}

function newData(){
    var nombre    =   document.getElementById("nombre").value;
    var apellido  =   document.getElementById("apellido").value;
    var edad      =   parseInt(parseFloat(document.getElementById("edad").value));
    var carrera   =   document.getElementById("carrera").value;
    var newPerson = { "nombre": nombre, "apellido": apellido, "edad": edad, "carrera": carrera };
    if (nombre !== '') {
        data.push(newPerson);
    } 
    limpiar();

}