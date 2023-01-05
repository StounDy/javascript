$('#btnCargar').click(function(){

    let esperar = 2000;
    $.ajax({

        url: "/contenido.html",
        beforeSend : function (){
            $('#contenido').text('Cargando...');
        } ,

        success : function(data){   
            setTimeout(function(){
                $('#contenido').html(data);
            },esperar
            );
        }
    });

});