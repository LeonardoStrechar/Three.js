const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshLambertMaterial({ color: 0x348feb })
);


const circle = new THREE.Mesh(
    new THREE.CircleBufferGeometry(0.5, 20),
    new THREE.MeshLambertMaterial({ color: 0x348feb })
);
circle.position.x = -2;
circle.rotation.x = THREE.MathUtils.degToRad(-90);


const cone = new THREE.Mesh(
    new THREE.ConeBufferGeometry(0.3, 0.5),
    new THREE.MeshLambertMaterial({ color: 0x348feb })
);
cone.position.x = -2;
cone.position.y = 2;


const cylinder = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(0.5, 0.5, 1),
    new THREE.MeshLambertMaterial({ color: 0x348feb })
);
cylinder.position.x = 2;
cylinder.position.y = 0;


const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1, 1),
    new THREE.MeshLambertMaterial({ color: 0x348feb })
);
plane.position.x = 2;
plane.position.y = 2;
plane.rotation.x = THREE.MathUtils.degToRad(-90);


const sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(0.3, 5, 5),
    new THREE.MeshLambertMaterial({ color: 0x348feb })
);
sphere.position.x = 0;
sphere.position.y = 2;

    
scene.add(cube);
scene.add(circle);
scene.add(cone);
scene.add(cylinder);
scene.add(plane);
scene.add(sphere);

x3.add(circle, { label: 'circle'})
x3.add(cube, { label: 'cube'})
x3.add(cone, { label: 'cone'})

renderer.setAnimationLoop(() => {
    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    })
})