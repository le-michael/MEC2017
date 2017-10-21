var socket = io();


$( document ).ready(function() {
    $('#login-button').click(function(){
        code = $('#code').val();
        $('#code').val('');
        console.log(code);
        socket.emit('confirm-code',{
            region_code: code
        });
    });
});

socket.on('valid-login',function(data){
    if(data){
        console.log("Valid login");
        Materialize.toast('Welcome', 3000, 'green')
        $('#login-card').fadeOut("slow",function(){
            $('#mapid').fadeIn();
        });

    }
    else{
        console.log("Invalid Login");
        Materialize.toast('Invalid Login', 1000, 'red')
    }

});