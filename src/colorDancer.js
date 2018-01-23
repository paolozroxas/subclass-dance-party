var makeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.r = Math.random() * 255;
  this.g = Math.random() * 255;
  this.b = Math.random() * 255;
  this.rChange = Math.random() * 50;
  this.gChange = Math.random() * 50;
  this.bChange = Math.random() * 50;
  // this.$node.css('border-color', 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')');

};
makeColorDancer.prototype = Object.create(makeDancer.prototype);
makeColorDancer.prototype.constructor = makeColorDancer;

makeColorDancer.prototype.step = function (timeBetweenSteps) {
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this, timeBetweenSteps);
  
  // var styleSettings = {
  //   background-color: 
  // };

  
  if (this.r + this.rChange > 255) {
    this.rChange = (-1) * this.rChange;
  }
  if (this.r + this.rChange < 0) {
    this.rChange = (-1) * this.rChange;
  }
  
  var newR = this.r + this.rChange;
  
  if (this.g + this.gChange > 255) {
    this.gChange = (-1) * this.gChange;
  }
  if (this.g + this.gChange < 0) {
    this.gChange = (-1) * this.gChange;
  }
  
  var newG = this.g + this.gChange;
  
  if (this.b + this.bChange > 255) {
    this.bChange = (-1) * this.bChange;
  }
  if (this.b + this.bChange < 0) {
    this.bChange = (-1) * this.bChange;
  }
  
  var newB = this.b + this.bChange;
  
  this.r = Math.floor(newR);
  this.g = Math.floor(newG);
  this.b = Math.floor(newB);

  var randomColor = 'rgb(' + (this.r || 10) + ',' + (this.g || 150) + ',' + (this.b || 200) + ')';

  this.$node.css('background-color', randomColor); 

};
