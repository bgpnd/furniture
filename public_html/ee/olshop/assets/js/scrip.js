
$(document).ready(function () {
    $('.cbp-vm-details').hide();
    $('.list-right').hide();
    $(".cbp-vm-grid").click(function () {
        $('.cbp-vm-details').hide();
        $('.list-right').hide();
    });

    $(".cbp-vm-list").click(function () {
        $('.cbp-vm-details').show();
        $('.list-right').show();
    });
});



