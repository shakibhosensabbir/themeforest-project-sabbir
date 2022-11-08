(function($) {
      // Sticky Header 
      $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $(".header__sticky").removeClass("sticky");
        } else {
            $(".header__sticky").addClass("sticky");
        }
    });

    // Section Scroll Nav
         $('#nav').onePageNav();
    

    // Type Js
        const typed = new Typed('.typed__text', {

            strings: ['Sabbir Hosen', ' Web Desinger', ' Web Developer', 'WordPress Expert', ],
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 100,
            loop: true,
            });

   // Home Slider 
        $('.owl-carousel.home__slider').owlCarousel({
            items: 1,      
            loop:true,
            margin:10,
            autoplay: true,
            autoplayTimeout: 2000, 
        });
  // Background Image
        $("[data-background]").each(function() {

            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    // toggle menu/navbar script
        $('.menu-btn').click(function () {
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });



    //TESTIMONIALS
        $('.owl-carousel.testimonials').owlCarousel({
            loop:true,
            margin:10,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: false,
            responsiveClass:true,
            nav: false,
            responsive:{
                0:{
                    items:1,
                
                },
                600:{
                    items:1,
                
                },
                1000:{
                    items:2,
                
                }
            }
        })

  

    // Isotope Porfolio
        var $grid = $('.portfolio__active').isotope({
            itemSelector: '.grid-item',
        });
    
        $('.porfolio__menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        $('.porfolio__menu button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    
        //Counter js
          $('.count').counterUp({
                delay: 10,
                time: 3000
            });


    // ASO Animation 
        AOS.init({
            duration:800,
        });

    // Contact From
        jQuery(".contact_form #send_message").on('click', function(){
		
            var name 		= jQuery(".contact_form #name").val();
            var email 		= jQuery(".contact_form #email").val();
            var message 	= jQuery(".contact_form #message").val();
            var subject 	= jQuery(".contact_form #subject").val();
            var success     = jQuery(".contact_form .returnmessage").data('success');
        
            jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
            //checking for blank fields	
            if(name===''||email===''||message===''){
                
                jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
            }
            else{
                // Returns successful data submission message when the entered information is stored in database.
                jQuery.post("contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
                    
                    jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
                    
                    
                    if(jQuery(".contact_form .returnmessage span.contact_error").length){
                        jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
                    }else{
                        jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
                        jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
                    }
                    
                    if(data===""){
                        jQuery("#contact_form")[0].reset();//To reset form fields on success
                    }
                    
                });
            }
            return false; 
        });


        // function Filaous_Color_Options(){
        //     "use-strict";
        
            var toggleLinkTag = $('#theme-color-toggle');
            var colorOptionsSidebarToggle = $('#colorOptionsSidebarToggle');
            var rtlSidebar = $('#rtlSidebar');
            var rtlToggle = $('#rtlToggle');
            var colorOptions = $('.color-options-list');
            var colorOptionsWrap = $('.color-options-wrap');
            var optionsItem = colorOptions.find('span');
        
            optionsItem.first().addClass("active");
        
            colorOptionsSidebarToggle.on("click",function(){
                colorOptionsWrap.toggleClass("active");
            });
        
            optionsItem.each(function(){
                var itemBgData = $(this).attr("data-bg-color");
                $(this).css('background-color', itemBgData);
            });
        
            optionsItem.on('click',function(){
                var bgActiveColor = $(this).css("background-color");
                var itemSrcData = $(this).attr("data-skins-css-path");
                optionsItem.removeClass("active");
                $(this).addClass("active");
                colorOptionsSidebarToggle.css("background-color",bgActiveColor);
                rtlToggle.css("background-color",bgActiveColor);
                toggleLinkTag.attr("href", itemSrcData);
            });
        
            var activeBgColor = optionsItem.first().css("background-color");
        
            rtlToggle.css("background-color", activeBgColor);
        

})(jQuery);