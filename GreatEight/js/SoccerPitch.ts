


class SoccerPitch {
    constructor(scene: THREE.Scene) {
        // FLOOR
        //var floorTexture = new THREE.TextureLoader().load('images/checkerboard.jpg');
        //floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
        //floorTexture.repeat.set(10, 10);
        //var floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture, side: THREE.DoubleSide });
        //var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
        //var floor = new THREE.Mesh(floorGeometry, floorMaterial);
        //floor.position.y = -0.5;
        //floor.rotation.x = Math.PI / 2;
        //scene.add(floor);


        var planeGeo = new THREE.PlaneGeometry(700, 600); // 幅20、高さ10の平面
        var greenMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var plane = new THREE.Mesh(planeGeo, greenMaterial);
        plane.rotation.x = -Math.PI / 2;
        scene.add(plane);

        //GridHelper(大きさ, １マスの大きさ)
        var grid = new THREE.GridHelper(1000, 100);

        //シーンオブジェクトに追加
        scene.add(grid);
    }
}