
$('#click-btn-1').on("click", function(e){
    e.preventDefault();
    $('.stories-card').removeClass("stories-card")
        .css('display', 'none');
    $('.stories-london').addClass("stories-london_active");
    $('.stories-york').removeClass("stories-york_active");
    $('.stories-paris').removeClass("stories-paris_active");

});
$('#click-btn-2').on("click", function(e){
    e.preventDefault();
    $('.stories-card').removeClass("stories-card")
        .css('display', 'none');
    $('.stories-york').addClass("stories-york_active");
    $('.stories-paris').removeClass("stories-paris_active");
    $('.stories-london').removeClass("stories-london_active");
});

$('#click-btn-3').on("click", function(e){
    e.preventDefault();
    $('.stories-card').removeClass("stories-card")
        .css('display', 'none');

    $('.stories-paris').addClass("stories-paris_active");
    $('.stories-london').removeClass("stories-london_active");
    $('.stories-york').removeClass("stories-york_active");
});



