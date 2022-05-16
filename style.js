$(document).ready(function(){
    // $('.list-logo').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     dots: true,
    // });
    $('.cmts').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        responsive: [
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $(".accordion").on("click", function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle(200);
    });
    $(".accordion .icon").html("<div class='btn flex items-center justify-center'><i class='fas fa-angle-down primary-blue1'></i></div>")
  });