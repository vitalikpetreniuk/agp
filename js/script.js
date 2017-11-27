$(function () {
    $('.agk-slick').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        fade: true,
        arrows: true,
        autoplay:true
    });
    $('.sidebar .slider').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        arrows: true
    });
    $('.apart-slider').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        arrows: true
    });
    $('.agk-objects .slider').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        arrows: true,
        // autoplay:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    fade: true
                }
            }
        ]
    });

    $('.agk-arrows .arrow-left').on('click',function () {
        event.preventDefault();
        $('.agk-slick .slick-prev').trigger('click');
    });
    $('.agk-arrows .arrow-right').on('click',function () {
        event.preventDefault();
        $('.agk-slick .slick-next').trigger('click');
    });
    $('.agk-dd-menu .agk-dd-open').on('click',function () {
        $('.dd-cont').fadeToggle();
        $('.agk-dd-menu').toggleClass('active');
        $('header').toggleClass('active');
    });

    // Єтот скрипт работает и все в порядке, если стоит перед скриптами с плагином ползунков, сейчас не работает
    if ($( "input, select" ).length) {
        $('input, select').styler();
    }

    if ($( "#slider-range-max" ).length) {
        $( "#slider-range-max" ).slider({
            range: "max",
            min: 0,
            max: 150000000,
            step: 1000,
            value: 0,
            slide: function( event, ui ) {
                $( "#amount-max" ).val( ui.value );
            }
        });
        $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
    }

    if ($("#slider-range-max-first").length) {
        $("#slider-range-max-first").slider({
            range: "max",
            min: 0,
            max: 150000000,
            step: 1000,
            value: 0,
            slide: function (event, ui) {
                $("#amount-max-first").val(ui.value);
            }
        });
        $("#aamount-max-first").val($("#slider-range-max-first").slider("values", 0));
    }


    if ($( "#slider-range-max-year" ).length) {
        $("#slider-range-max-year").slider({
            range: "max",
            min: 0,
            max: 30,
            step: 1,
            value: 1,
            slide: function (event, ui) {
                if ((ui.value%100 > 4 && ui.value%100 <= 20) || (ui.value > 24 || ui.value === 0)){
                    $("#amount-max-year").attr("placeholder", ui.value + ' лет');
                }
                else if (ui.value%10 === 1)
                {
                    $("#amount-max-year").attr("placeholder", ui.value + ' год');
                }
                else{
                  $("#amount-max-year").attr("placeholder", ui.value + ' года');
                }
            }
        });

        $("#slider-range-max-year").append('<span class="start">3</span><span class="midel">15</span><span class="end">30</span>');

    }

    if ($( "#slider-range-flor" ).length) {
        $("#slider-range-flor").slider({
            range: true,
            min: 1,
            max: 17,
            values: [1, 6],
            slide: function (event, ui) {
                $("#amount-flor").attr("placeholder", ui.values[0] + "                  " + ui.values[1]);
            }
        });
        $("#amount-flor").val($("#slider-range-flor").slider("values", 0) + "                  " + $("#slider-range-flor").slider("values", 1));
    }

    if ($( "#slider-range-sq" ).length) {
        $("#slider-range-sq").slider({
            range: true,
            min: 15,
            max: 300,
            values: [15, 100],
            slide: function (event, ui) {
                $("#amount-sq").attr("placeholder", ui.values[0] + "                  " + ui.values[1]);
            }
        });
        $("#amount-sq").val($("#slider-range-sq").slider("values", 0) + "                  " + $("#slider-range-sq").slider("values", 1));
    }

    if ($( "#slider-range-sum" ).length) {
        $( "#slider-range-sum" ).slider({
            range: true,
            min: 1000000,
            max: 15000000,
            values: [100000, 5000000],
            slide: function( event, ui ) {
                $( "#amount-sum" ).attr( "placeholder", ui.values[ 0 ] +  "                  " + ui.values[ 1 ] );
            }
        });
        $( "#amount-sum" ).val(  $( "#slider-range-sum" ).slider( "values", 0 )+  "                  " +  $( "#slider-range-sum" ).slider( "values", 1 ) );
    }

});
