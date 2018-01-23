$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; 

    // make a dancer with a random position

    var dancer = new dancerMakerFunction( 
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
  $('.addLineDanceButton').on('click', function(event) {

    if ($('.dancer').data('stopped') === 'true') {
      $('.dancer').data('stopped', 'false');
      var $dancers = $('.dancer');

      $('.dancer').each(function() {
        $(this).css('top', $('body').height() * Math.random());
        $(this).css('left', $('body').width() * Math.random());
      });
      
      
      
    } else {
      $('.dancer').data('stopped', 'true');
      var bodyHeight = $('body').height();
      var bodyWidth = $('body').width();
      
      $('.dancer').each(function() {
        var left = $(this).css('left');
        var leftNum = Number(left.substring(0, left.length - 2));
        if ((leftNum > bodyWidth * 0.3 && leftNum < bodyWidth * 0.45) || (leftNum > bodyWidth * 0.65 && leftNum < bodyWidth * 0.8)) {
          $(this).css('top', '35%');
        } else {
          $(this).css('top', 500);
        }
      });
      
      // else do this $('.dancer').css('top', 500);

    }
    
  });
  

});

  $('.dancer').on('click', function() {
    console.log('yes')
    $('.dancer').animate({height: "20px"}, 500);
  });


/*
var left = $('.dancer').css('left') ;
Number(left.substring(0, left.length - 2));



*/
