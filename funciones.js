/*  Poder Dibujar */

var canvas = document.getElementById("canvas");

var context = canvas.getContext('2d');
context.lineWidth = 5; 

var con = false;

function dibujar(e){
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;

    if(con == true){
        context.lineTo(x, y);
        context.stroke();
    }
}

canvas.addEventListener("mousemove", dibujar);

canvas.addEventListener("mousedown", function(){
    con = true;
    context.beginPath();
    context.moveTo(x, y);
    canvas.addEventListener("mousemove", dibujar);
});

canvas.addEventListener("mouseup" , function(){
    con = false;
})

/*Fin de poder dibujar */

/*Agregar Color*/

function color(valor){
    context.strokeStyle = valor.value;
}

/*Fin de cambiar color */

/**Valores del grosor */

function linea(valor){
    context.lineWidth = valor.value;
}


/*limpiar la paleta */

function limpiar(){
    context.clearRect(0, 0, canvas.width, canvas.height)
}
