src="js/three.js"


class Agent {
    constructor( name, model, collisionRadius, scene ) {
        this.name = name;
        this.model = model;
        this.collisionRadius = collisionRadius;
        this.collidingWith = {};
        this.scene = scene;
    }

    getPosition() {
        return model.position;
    }

    getRotation() {
        return model.rotation;
    }

    setPosition( newPosition ) {
        model.position = newPosition;
    }

    setRotation( newRotation ) {
        model.rotation = newRotation;
    }

    onCollision( collision ) {

    }

    detectCollision(other) {
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

    update() {
        if(collidingWith.length > 0) {
            collidingWith.forEach(element => {
                onCollision(element);
            });
        }
    }
}

class Boid extends Agent{
    constructor( name, model, collisionRadius ) {
        //Agent.call( name, model, collisionRadius );
        super( name, model, collisionRadius );
    }

    simulate() {

    }

    update() {
        super.update();
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
            element.update();
        });
    }

    exhaustiveCollision() {
        this.elements.forEach(elementA => {
            elementA.collidingWith = {};
            var collision = false;

            this.elements.forEach(elementB => {
                
                if(elementA != elementB
                    && elementA.detectCollision(elementB)) {
                        var len = elementA.collidingWith.length;
                        elementA.collidingWith[len] = elementB;
                        collision = true;
                }
            });
        });
    }
}


