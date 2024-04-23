$(function(){
    $("#botonCrear").click(function(){
        const tarea = $("#inputTarea").val();
        if (tarea !== '') { //si el valor no esta vacio se ejecuta
            const nuevaTarea = $("<h4>").text(tarea).addClass("tarea");
            const botonPapelera = $("<button>").html('<img src="p.gif" height="30" srcset="">').addClass("botonPapelera")
            const botonRechazar = $("<button>").html('<img src="x.gif" height="30" srcset="">').addClass("botonRechazar");
            const botonCompletar = $("<button>").html('<img src="l.gif" height="30" srcset="">').addClass("botonCompletar");
            nuevaTarea.append(botonCompletar);
            nuevaTarea.append(botonRechazar);
            nuevaTarea.append(botonPapelera);
            $("#tareas").append(nuevaTarea);
            $("#inputTarea").val(''); 
        }
    });

    $(document).on('click', '.botonCompletar', function() {
        $(this).parent().toggleClass('completada');
    });
    $(document).on('click', '.botonRechazar', function() {
        $(this).parent().toggleClass('rechazada');
    });
    $(document).on('click', '.botonPapelera', function() {
        $(this).parent().hide()
    });
});
