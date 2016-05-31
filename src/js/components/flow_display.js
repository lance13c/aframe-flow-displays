/**
 * Created by Lance on 5/29/2016.
 */


//const setupChildren =

const getPosition = (data) => {
	const radius = data.radius;
	const height = data.positionHeight;

};


const flowDisplay = AFRAME.registerComponent('flow-display', {
	schema: {
		type: {default: 'child'},       // Root or Child or Module
		childDisplays: {default: []},
		displayHeight: {default: .5},
		displayWidth: {default: .75},
		displayDepth: {default: .05},
		placement: {default: 'right'},             // Left, Right. Above, Below
		positionHeight: {default: '0 0 0'},
		color: {default: 0x00ff00},
		radius: {default:  3},
		layout: {default: {}} // Todo add internal display layout support later
	},

	init: function() {
		this.el.addEventListener('mouseenter', () => {
			console.log('Entered');
			this.el.setAttribute('height', this.data.height + .1);
		});

		// Set Children
		this.data.childDisplays = []; // Clears the childDisplays
		const children = this.el.querySelectorAll(':scope > [flow-display]');
		console.log(this.el.querySelector('[flow-display]'));


		for (let i = 0; i < children.length; i++){

			// Handle Flow Display Children
			if (children[i].getComputedAttribute('flow-display')){
				this.el.sceneEl.addEventListener('loaded', () => {
					this.data.childDisplays.push(children[i].getComputedAttribute('flow-display'));
				});
			}
			// Handle Other Types of Children ...
		}

		// Manipulate Children Position
		this.el.sceneEl.addEventListener('loaded', () => {
			console.log(this.data);
		});
		// If A Child, calculate and set position
		

		// If Root -> Setup the Layout for All Displays
		
	},

	update: function () {
		console.log(this.data);
		// Create Display Geometry
		let geometry = new THREE.BoxGeometry( this.data.displayWidth, this.data.displayHeight, this.data.displayDepth );
		let material = new THREE.MeshBasicMaterial( {color: this.data.color} );
		this.el.setObject3D('mesh', new THREE.Mesh( geometry, material ));
	}
});

// Use for Sphere Creation
//var geometry = new THREE.SphereGeometry( this.radius, 32, 32 );
//var material = new THREE.MeshBasicMaterial( {color: this.data.color} );

//this.el.setObject3D('mesh', new THREE.Mesh(geometry, material));

module.exports = flowDisplay;