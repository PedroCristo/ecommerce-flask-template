// Script for carousel shop_single page

$('#carousel-related-product').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3
            }
        }
    ]
});

// Script to get the current year
$("#date").text(new Date().getFullYear());

// Add fixed class in the navbar
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("fixed");
            $('.nav-link').addClass("fixed");
            $('.nav-icon i').addClass("fixed");
       
        } else {
            $('.navbar').removeClass("fixed");
            $('.nav-link').removeClass("fixed");
            $('.nav-icon i').removeClass("fixed");
        }
});
