var Billboard = (function () {
    function Billboard() {
        var texture = new THREE.TextureLoader().load('images/run.png');
        this.textureAnimator = new TextureAnimator(texture, 10, 1, 10, 75); // texture, #horiz, #vert, #total, duration.
        var material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
        var geometry = new THREE.PlaneGeometry(50, 50, 1, 1);
        this.mesh = new THREE.Mesh(geometry, material);
        var mesh = this.mesh;
        mesh.position.set(-50, 25, 0);
        scene.add(mesh);
    }
    Billboard.prototype.quaternion = function (q) {
        var mesh = this.mesh;
        mesh.quaternion.copy(q);
    };
    Billboard.prototype.update = function (milliSec) {
        this.textureAnimator.update(milliSec);
    };
    return Billboard;
}());
//# sourceMappingURL=Billboard.js.map