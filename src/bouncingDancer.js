var makeBouncingDancer = function(top, left, timeBetweenSteps) {
  timeBetweenSteps = 50;
  this.vectorx = (Math.random() * 50) - 25;
  this.vectory = (Math.random() * 50) - 25;
  if (top - 80 > 0) {
    top = top - 80;
  }
  if (left - 80 > 0) {
    left = left - 80;
  }
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.locationy = top;
  this.locationx = left;
};

makeBouncingDancer.prototype = Object.create(makeDancer.prototype);
makeBouncingDancer.prototype.constructor = makeBouncingDancer;

makeBouncingDancer.prototype.step = function(timeBetweenSteps) {
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this, timeBetweenSteps);
  
  if (this.locationx + this.vectorx > (window.innerWidth - 80)) {
    this.vectorx = (-1) * this.vectorx;
  }
  if (this.locationy + this.vectory > (window.innerHeight - 80)) {
    this.vectory = (-1) * this.vectory;
  }
  if (this.locationx + this.vectorx < 0) {
    this.vectorx = (-1) * this.vectorx;
  }
  if (this.locationy + this.vectory < 0) {
    this.vectory = (-1) * this.vectory;
  }
  
  var newX = this.locationx + this.vectorx;

  var newY = this.locationy + this.vectory;
  
  
  this.locationx = newX;
  this.locationy = newY;

  var stopped = this.$node.data('stopped') === 'true';
  if (!stopped) {
    this.setPosition(newY, newX);    
  }



  // var styleSettings = {
  //   top: newY,
  //   left: newX
  // };
  // this.$node.css(styleSettings);
};