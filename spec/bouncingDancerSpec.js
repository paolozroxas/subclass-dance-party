describe('bouncingDancer', function() {

  var bouncingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncingDancer = new makeBouncingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a horizontal location that changes', function() {
    
    var oldLeft = bouncingDancer.$node.css('left');
    bouncingDancer.step();
   
    var newLeft = bouncingDancer.$node.css('left');
    expect(oldLeft === newLeft).to.be.false;
  });

  it('should have a vertical location that changes', function() {
    var oldTop = bouncingDancer.$node.css('top');
    
    bouncingDancer.step();
    var newTop = bouncingDancer.$node.css('top');

    expect(oldTop === newTop).to.be.false;
  });


});
