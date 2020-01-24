src="js/three.js"


function Agent( name, model, collisionRadius ) {
    this.name = name;
    this.model = model;
    this.collisionRadius = collisionRadius;

    this.getPosition = function() {
        return model.position;
    }

    this.getRotation = function() {
        return model.rotation;
    }

    this.setPosition = function( newPosition ) {
        model.position = newPosition;
    }

    this.setRotation = function( newRotation ) {
        model.rotation = newRotation;
    }

    this.onCollision = function( collision ) {

    }

    this.detectCollision = function(other) {
        var pos = this.getPosition();
        var otherPos = other.getPosition();
        var colDist = this.collisionRadius + other.collisionRadius;
        var dir = [ pos[0] - otherPos[0], pos[1] - otherPos[1] ];
        var dist = Math.sqrt( (dir[0] * dir[0]) + (dir[1] * dir[1]) );
        var collision = false;
        
        if(dist <= colDist) {
            collision = true;
        }

        return collision;
    }

    this.update = function() {

    }
}

function Boid( name, model, collisionRadius ) {
    Agent.call( name, model, collisionRadius );

    this.simulate = function() {

    }

    this.update = function() {
        simulate();
    }
}

class Scene {
    constructor() {
        this.length = 0;
        this.elements = {};
    }

    push(newElement) {
        this.elements[this.length] = newElement;
        this.length++;
        return this.elements[this.length-1];
    }

    pop() {
        var item = this.elements[this.length-1];
        delete this.elements[this.length-1];
        this.length--
        return item;
    }

    insertAt(item, index) { 
        for(let i=this.length;i>=index;i--) { 
          this.elements[i]=this.elements[i-1]; 
        } 
        this.elements[index]=item; 
        this.length++;  
        return this.elements[index]; 
    } 

    deleteAt(index) {
        var toDelete = elements[index];
        for(let i = index; i < this.length - 1; i++) { 
          this.elements[i] = this.elements[i+1]; 
        } 
        delete this.elements[this.length-1]; 
        this.length--; 
        return toDelete;
    } 

    update() {
        this.elements.forEach(element => {
            Agent a = (Agent) element;
        });
    }
}


