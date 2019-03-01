$('#link-2').on("click", function(e){
    e.preventDefault();

    $(".video").show("video");

    $(".description").hide("description");
    $(".size").hide("size");
    $(".delivery").hide("delivery");
});

$('#link-3').on("click", function(e){
    e.preventDefault();
    $(".size").show("size");

    $(".description").hide("description");
    $(".video").hide("video");
    $(".delivery").hide("delivery");
});

$('#link-4').on("click", function(e){
    e.preventDefault();

    $(".delivery").show("delivery");

    $('.description').hide("description");
    $(".video").hide("video");
    $(".size").hide("size");
});
$("#link-1").click(function(e){
    e.preventDefault();

    $(".description").show("description");

    $(".video").hide("video");
    $(".size").hide("size");
    $(".delivery").hide("delivery");
});










