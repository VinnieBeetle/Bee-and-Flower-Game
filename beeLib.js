/*
Vincent Ho
beeLib.js
11/5/21
Objects for the BEES.html
*/

function Flower(){
    tFlower = new Sprite(scene, "Flower.png", 20, 20);
    tFlower.setSpeed(5);
    tFlower.reset = function(){
        //set new random position
        newX = Math.random() * this.cWidth;
        newY = Math.random() * this.cHeight;
        this.setPosition(newX, newY);
    } // end reset
    tFlower.reset();
    return tFlower;
} // end Flower

function Bee(){
    tBee = new Sprite(scene, "Bee.png", 50, 50);
    tBee.maxSpeed = 10;
    tBee.minSpeed = -3;
    tBee.setSpeed(0);
    tBee.setAngle(0);
	
    tBee.checkKeys = function(){
        if (keysDown[K_LEFT]){
            this.changeAngleBy(-5);
        } // end if
        if (keysDown[K_RIGHT]){
            this.changeAngleBy(5);
        } // end if
        if (keysDown[K_UP]){
            this.changeSpeedBy(1);
            if (this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            } // end if
        } // end if
        if (keysDown[K_DOWN]){
            this.changeSpeedBy(-1);
            if (this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);
            } // end if
        } // end if
    } // end checkKeys
	
    return tBee;
} // end setupBee

function BeeJr(){
    tBee = new Sprite(scene, "BeeJr.png", 50, 50);
    tBee.maxSpeed = 10;
    tBee.minSpeed = -3;
    tBee.setSpeed(0);
    tBee.setAngle(0);
	
    tBee.checkKeys = function(){
        if (keysDown[K_A]){
            this.changeAngleBy(-5);
        } // end if
        if (keysDown[K_D]){
            this.changeAngleBy(5);
        } // end if
        if (keysDown[K_W]){
            this.changeSpeedBy(1);
            if (this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            } // end if
        } // end if
        if (keysDown[K_S]){
            this.changeSpeedBy(-1);
            if (this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);
            } // end if
        } // end if
    } // end checkKeys
	
    return tBee;
} // end setupBee