$(document).ready(function() {
    $("a.js-link").click(function(event) {
        event.preventDefault();
        if (confirm('Are you sure?')) {
            window.location.href = $(this).attr('href');
        }
    });
    if ($('.datatable').size() != 0) {
        $('.datatable').dataTable({
            "sDom": "<'row'<'col-lg-6'l><'col-lg-6'f>r>t<'row'<'col-lg-12'i><'col-lg-12 center'p>>",
            "sPaginationType": "bootstrap",
            "oLanguage": {
                "sLengthMenu": "_MENU_ records per page"
            },
            "aoColumns": [{
                "bSortable": false
            }, {
                "bSortable": true
            }, {
                "bSortable": true
            }, {
                "bSortable": false
            }, {
                "bSortable": false
            }, {
                "bSortable": false
            }],
            "aaSorting": [[0,'asc']]
        });
    }
});

function onValidate() {
    if (!confirm('Are you sure?')) {
        return false;
    }
        
    if ($("input[name='name']").val() == '') {
        alert("Please enter name.");
        return false;
    }
    return true;
}