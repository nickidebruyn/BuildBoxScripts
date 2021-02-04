//On the Script Node add there attributes
//Input: Enabled
//Output: Down, Up, Move


let enabled;
let positionOffset;
let touchDown;

function init() {
    this.enableTouch();
    positionOffset = this.attribute('Position Offset');

}

function start(){
 
}

function update(dt) {	
	if (enabled && touchDown) {

	} 
 
}

function signal(name, value) {
	if (name == 'Enabled') {
        enabled = value; 
    }
 
}

function updateScreenToWorldPosition(scene, entity, point) {
	let wp = scene.screenToWorld(point.x, point.y);
    let vecWp = new Vec3(wp.x, wp.y, wp.z);   
	entity.setPosition(vecWp.x + positionOffset.x, vecWp.y + positionOffset.y, vecWp.z + positionOffset.z);

}

component.touchBegan = function touchBegan(point) {

	if (enabled) {
		updateScreenToWorldPosition(this.scene(), this.entity(), point);						
	    this.emitSignal('Down', true);
	} 

}

component.touchMove = function touchMove(point) {
	if (enabled) {
		updateScreenToWorldPosition(this.scene(), this.entity(), point);						
	    this.emitSignal('Move', true);
	} 
   
}

component.touchEnded = function touchEnded(point) {
	if (enabled) {
		this.emitSignal('Up', true);
	}
	

}
