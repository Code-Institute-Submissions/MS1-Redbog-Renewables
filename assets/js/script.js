mymap = L.map('mapid').setView([53.5267, -6.5488], 13);

                            L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=zbyC3NxJZISl7AmrhZwq', {
                                attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                            }).addTo(mymap);

                            var marker = L.marker([53.5267613,-6.5488573]).addTo(mymap);


// https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-4-navbar-on-click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


//https://gist.github.com/ambitstream/e69f9937fc0f2e22688425f8ecfe5a19
 
//scrollSpy function
    function scrollSpy() {
      var sections = ['head','services', 'technology', 'about', 'contact'];
      var current;

      for (var i = 0; i < sections.length; i++) {
        if ( $('#'+sections[i]).offset().top <= $(window).scrollTop() ) {
          current = sections[i];
        }
      }

      $("nav a[href='#"+current+"']").addClass('active');
      $("nav a").not("a[href='#"+current+"']").removeClass('active');      
    }

// smooth scrolling navigation
    $("nav li a").click( function() {
      var target = $(this).attr("href");
      $("body, html").animate({
        scrollTop: $(target).offset().top
      }, 300);
      return false;
    });

    //scrollSpy call
    $(document).ready( function() {
      scrollSpy();
    });

    $(window).scroll( function() {
      scrollSpy();
    });
