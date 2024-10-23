class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get diameter() {
    return this._radius * 2;
  }

  set diameter(diameter) {
    this._radius = diameter / 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  set circumference(circumference) {
    this._radius = circumference / (Math.PI * 2);
  }

 
  get area() {
    return Math.PI * Math.pow(this._radius, 2);
  }


  set area(area) {
    this._radius = Math.sqrt(area / Math.PI);
  }
}

let circle = new Circle(5); 

console.log(circle.radius);        
console.log(circle.diameter);       
console.log(circle.circumference);  
console.log(circle.area);           

circle.diameter = 20;
console.log(circle.radius);         

circle.circumference = 31.4159;
console.log(circle.radius);         

circle.area = 78.5398;
console.log(circle.radius);         
