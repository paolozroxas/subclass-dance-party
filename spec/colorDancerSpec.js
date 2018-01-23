describe('colorDancer', function() {

  var colorDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorDancer = new makeColorDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(colorDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a color that changes', function() {
    var oldColor = colorDancer.$node.css('background-color');
    colorDancer.step();
    var newColor = colorDancer.$node.css('background-color');
    expect(oldColor === newColor).to.be.false;
  });

  describe('changes', function() {
    it('should call step at least once per second', function() {
      sinon.spy(colorDancer, 'step');
      expect(colorDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(colorDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(colorDancer.step.callCount).to.be.equal(2);
    });
  });
});
