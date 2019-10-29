var socket = io();
        
        // Escuchar eventos del socket
        socket.on('connect',function(){
            console.log('Conectado al servidor');
        });


        socket.on('disconnect', function(){
            console.log('Se perdio la conexion con el servidor');
        });

        // enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Toni',
            mensaje: 'Hola mundo'
        }, function( resp ){
            console.log('respuesta server:',resp);
        });

        //Escuchar informacion
        socket.on('enviarMensaje',function(mensaje){
            console.log('Servidor:',mensaje);
        });