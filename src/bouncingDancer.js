var makeBouncingDancer = function(top, left, timeBetweenSteps) {
  timeBetweenSteps = (Math.random() * 250) + 20;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.vectorx = (Math.random() * 50) - 25;
  this.vectory = (Math.random() * 50) - 25;
  this.locationy = top;
  this.locationx = left;
  
};

makeBouncingDancer.prototype = Object.create(makeDancer.prototype);
makeBouncingDancer.prototype.constructor = makeBouncingDancer;

makeBouncingDancer.prototype.step = function(timeBetweenSteps) {
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this, timeBetweenSteps);
  
  if (this.locationx + this.vectorx > window.innerWidth) {
    this.vectorx = (-1) * this.vectorx;
  }
  if (this.locationy + this.vectory > window.innerHeight) {
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
  
  this.setPosition(newY, newX);
  
  // var styleSettings = {
  //   top: newY,
  //   left: newX
  // };
  // this.$node.css(styleSettings);
};