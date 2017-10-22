var socket = io();


$( document ).ready(function() {

    //$('#add-alert').modal();
    $('#add-alert').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '2%', // Starting top style attribute
        endingTop: '30%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        },
        complete: function() { } // Callback for Modal close
      }
    );
    $('select').material_select();


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