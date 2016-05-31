

	/**
	 * Created by Lance on 5/28/2016.
	 */

	const emittingEvent = 'trigger';
//a
		"use strict";
		const clickListener = AFRAME.registerComponent('click-listener', {
			init: function () {
				var el = this.el;
				window.addEventListener('click', function () {
					el.emit(emittingEvent, null, false);
				});
			}
		});

	module.exports = clickListener;

