(() => {
	/**
	 * Created by Lance on 5/28/2016.
	 */
	AFRAME.registerComponent('click-listener', {
		init: function () {
			var el = this.el;
			window.addEventListener('click', function () {
				el.emit('trigger', null, false);
			});
		}
	});
})();
