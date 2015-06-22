$(document).ready(function() {
    //toggle `popup` / `inline` mode
    // $.fn.editable.defaults.mode = 'popup';     
    $.fn.editable.defaults.mode = 'inline';     
    
    //make username editable
    $('#box').editable();
    //$('#box').tooltip('show')

    $('#enable').click(function() {
       $('#box').editable('toggleDisabled');
   }); 

    
// Validating Text box
    $('#box').editable({
        validate: function(value) {
           if($.trim(value) == '') return 'This field is required';
        }
    });
    
    //make status editable
    $('#status').editable({
        type: 'select',
        title: 'Select status',
        placement: 'right',
        value: 2,
        source: [
            {value: 1, text: 'status 1'},
            {value: 2, text: 'status 2'},
            {value: 3, text: 'status 3'}
        ]
        /*
        //uncomment these lines to send data on server
        ,pk: 1
        ,url: '/post'
        */
    });
});