

class Billboard {
    private textureAnimator: TextureAnimator;
    private mesh: THREE.Mesh;
    constructor() {
        var texture = new THREE.TextureLoader().load('images/run.png');
        this.textureAnimator = new TextureAnimator(texture, 10, 1, 10, 75); // texture, #horiz, #vert, #total, duration.
        var material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
        var geometry = new THREE.PlaneGeometry(50, 50, 1, 1);
        this.mesh = new THREE.Mesh(geometry, material);
        let mesh = this.mesh;
        mesh.position.set(-50, 25, 0);
        scene.add(mesh);
    }

    public quaternion(q: THREE.Quaternion) {
        let mesh = this.mesh;
        mesh.quaternion.copy(q);
    }

    public update(milliSec: number) {
        this.textureAnimator.update(milliSec);
    }
}