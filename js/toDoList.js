// Check off specific ToDos By Clicking
$("li").click(function () {
    $(this).toggleClass("completed");
});
// Click on X to delete ToDo
$("span").click(function (event) {
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
    // grabing new to do text from input
    var todoText =$(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-tarsh'></i></span>" + todoText + "</li>")
    }

});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});