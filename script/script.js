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


function pintar() {
    var cuerpoTabla = document.getElementById("cuerpoTabla");
    console.log(cuerpoTabla);
    
    var completarTabla = "";

    for (let i = 1; i < data.length; i++) {
        completarTabla += `<tr class="table__filas"><td class="numero center">${i}</td><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td class="center">${data[i].edad}</td><td>${data[i].carrera}</td></tr>`;
    }
    cuerpoTabla.innerHTML = completarTabla;
    console.log(completarTabla);
    
}

function newData(){
    var nombre    =   document.getElementById("nombre").value;
    var apellido  =   document.getElementById("apellido").value;
    var edad      =   parseInt(parseFloat(document.getElementById("edad").value));
    var carrera   =   document.getElementById("carrera").value;
    var newPerson = { "nombre": nombre, "apellido": apellido, "edad": edad, "carrera": carrera };
    
    data.push(newPerson);
    console.log(data);

}