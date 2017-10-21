(function ($) {
    $(function () {
        var $toastContent = $('<span>New Alert!</span>').add($('<button class="btn-flat toast-action" onclick="$(&#39#modal1&#39).modal(&#39open&#39);">Open</button>'));
        Materialize.toast($toastContent, 10000, 'red');

    //initialize all modals           
    $('.modal').modal();
    $('.trigger-modal').modal();

    }); // end of document ready
    })(jQuery);

    $.getJSON( "./Data/testdata.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
    items.push( "<p><b>" + key + "</b>: " +  val + "</p>" );
    });
 
    $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
    }).appendTo( ".modal-content" );
    });