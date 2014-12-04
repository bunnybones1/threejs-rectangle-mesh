function RectangleMesh(material) {
	var color = new THREE.Color();
	color.setHSL(0, 1, .25);
	material = material || new THREE.MeshBasicMaterial({
		color: color,
		side: THREE.DoubleSide,
		// wireframe: true
	})
	var geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
	THREE.Mesh.call(this, geometry, material);
}

RectangleMesh.prototype = Object.create(THREE.Mesh.prototype);

RectangleMesh.prototype.setRect = function(rect) {
	this.position.x = rect.x + rect.width * .5;
	this.position.y = rect.y + rect.height * .5;
	this.scale.x = rect.width;
	this.scale.y = rect.height;
}

module.exports = RectangleMesh;