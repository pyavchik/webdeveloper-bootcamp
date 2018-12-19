// check off Secific Todos by clicking

$("ul").on("click","li", function () {
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
    if(e.which === 13){
        //grabbing new todo text frome input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});
