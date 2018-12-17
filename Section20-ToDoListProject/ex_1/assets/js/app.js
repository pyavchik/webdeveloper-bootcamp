// check off Secific Todos by clicking

$("li").click(function () {
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("span").click(function (e) {
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    event.stopPropagation();
});

