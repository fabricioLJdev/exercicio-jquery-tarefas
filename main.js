$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const inputTarefa = $('#tarefas').val();
        const novaTarefa = $(`<li>${inputTarefa}</li>`);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(200);
        $("#cancelar").slideDown(300);
        $("#tarefas").val('');  
    });

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('lis-completa');
    });

    $("#cancelar").on('click', function(){
        $("li").slideUp(300, function(){
            $(this).remove(400);
            $("#cancelar").fadeOut(300)
        })

    })
})