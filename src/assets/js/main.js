$(document).ready(function(){
  activeNav.init();
  productStyles.init();

  
});

var activeNav = {
  init: function () {

    // when user clicks a franchise text turns yellow and background black.
    $('ul.nav + li').on('click', function(e) {
        e.preventDefault();
        $('ul.nav li').addClass('active');
        $('ul.nav li ').not(this).removeClass('active');

    });

  }
}


var productStyles = {
  init: function () {



}
}
