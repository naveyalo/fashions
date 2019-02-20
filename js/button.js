
        $('.toggle-1').on("click", function(e){
            e.preventDefault();
            $('#btn-header-1').addClass("btn-header_active");
            $('#btn-header-2').removeClass("btn-header_active");

        });

        $('.toggle-2').on("click", function(e){
            e.preventDefault();
            $('#btn-header-2').addClass("btn-header_active");
            $('#btn-header-1').removeClass("btn-header_active");

        });

        $('.toggle').on("click", function(e){
            e.preventDefault();

            $('#btn-header-1, #btn-header-2').removeClass("btn-header_active");
        });


