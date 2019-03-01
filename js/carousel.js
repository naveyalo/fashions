$('#link-5').on("click", function(e){
    e.preventDefault();

    $(".img-1").show("img-1");

    $(".img-2").hide("img-2");
    $(".img-3").hide("img-3");
    $(".img-4").hide("img-4");
});

$('#link-6').on("click", function(e){
    e.preventDefault();
    $(".img-2").show("img-2");

    $(".img-1").hide("img-1");
    $(".img-3").hide("img-3");
    $(".img-4").hide("img-4");
});

$('#link-7').on("click", function(e){
    e.preventDefault();

    $(".img-3").show("img-3");

    $('.img-4').hide("img-4");
    $(".img-1").hide("img-1");
    $(".img-2").hide("img-2");
});
$("#link-8").click(function(e){
    e.preventDefault();

    $(".img-4").show("img-4");

    $(".img-1").hide("img-1");
    $(".img-2").hide("img-2");
    $(".img-3").hide("img-3");
});
