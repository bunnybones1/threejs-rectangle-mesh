var onReady = function() {
	var View = require('threejs-managed-view').View,
		RectangleMesh = require('./');

	var view = new View({
		camera: new THREE.OrthographicCamera(0, window.innerWidth, -window.innerHeight, 0, 100, -100),
		stats: true,
	});

	var totalCells = 10;
	var rectangleMeshesPoolSize = 120;

	var fullRectangle = {
		x: 10,
		y: 10,
		width: window.innerWidth-20,
		height: window.innerHeight-20
	};

	var fullRectangleMesh = new RectangleMesh();
	fullRectangleMesh.setRect(fullRectangle);
	view.scene.add(fullRectangleMesh);

	view.renderManager.onEnterFrame.add(function() {
		var time = (new Date()).getTime() * .001;
		fullRectangle.width = ((Math.cos(time) * .5 + .5) * .35 + .5) * window.innerWidth;
		fullRectangle.height = ((Math.sin(time) * .5 + .5) * .35 + .5) * window.innerHeight;
		fullRectangleMesh.setRect(fullRectangle);
	});

}

var loadAndRunScripts = require('loadandrunscripts');
loadAndRunScripts(
	[
		'bower_components/three.js/three.js',
		'lib/stats.min.js',
		'lib/threex.rendererstats.js',
	],
	onReady
);
