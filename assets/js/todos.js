$(document).ready(function () {
    // Check off specific todos by clicking
    // when li inside ul is clicked
    $("ul").on("click", "li", function () {
        $(this).toggleClass("completed");
    });

    // Click on X to delete Todo
    $("ul").on("click", "span", function(event) {
       $(this).parent().fadeOut(500, function() {
           $(this).remove();
       });
       // stop bubbling up to other elements
       event.stopPropagation();
    })

    $("input[type='text']").keypress(function(event) {
        // enter key
        if (event.which === 13) {
            var todoText = $(this).val();
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
        }
    });

    $(".fa-plus").click(function() {
        $("input[type='text'").fadeToggle();
    });

});
