//
let ent;
let duration;
let easingFunc;

let done = true;
let phaseT = 0;
let label;


function init() {
	ent = this.entity();
	duration = this.attribute('Duration');
	easingFunc = EasingFunctions[this.attribute('Easing Function')];
	label = ent.component('Label');
}

function update(dt) {
	if (done) return;
	phaseT += dt / duration;
	phaseT = Math.min(phaseT, 1);

	let anim = easingFunc(phaseT);
	label.setOpacity(255-(255*anim));

	if (phaseT == 1) {
		done = true;
		this.emitSignal('Done', true);
	}
}


function signal(name, value) {
	if (value) {
		done = false;
		phaseT = 0;

	} else { // !value
		done = true; //stop animation
	}
}

	