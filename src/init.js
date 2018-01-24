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
      (810 - 80) * Math.random(),
      (1350 - 80) * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
  $('.addLineDanceButton').on('click', function(event) {

    if ($('.dancer').data('stopped') === 'true') {
      $('.dancer').data('stopped', 'false');
      var $dancers = $('.dancer');

      $('.dancer').each(function() {
        $(this).css('top', (810 - 80) * Math.random());
        $(this).css('left', (1350 - 80) * Math.random());
      });
      
      
      
    } else {
      $('.dancer').data('stopped', 'true');
      var bodyHeight = $('body').height();
      var bodyWidth = $('body').width();
      
      $('.dancer').each(function() {
        var left = $(this).css('left');
        var leftNum = Number(left.substring(0, left.length - 2));
        if ((leftNum > 350 && leftNum < 450) || (leftNum > 815 && leftNum < 920)) {
          $(this).animate({top: '270px'}, 2000).animate({top: '150px'}).animate({top: '270px'}, 1000);
        } else if (leftNum < 70 || leftNum > 1160) {
          $(this).animate({top: '720px'}, 3000).animate({opacity: '0'}, 1500);
          setTimeout($(this).remove.bind($(this)), 5000);
        } else {
          $(this).animate({top: '440px'}, 2000);
        }
      });
      
      // else do this $('.dancer').css('top', 500);

    }
    
  });
  

});



/*
var left = $('.dancer').css('left') ;
Number(left.substring(0, left.length - 2));



*/
