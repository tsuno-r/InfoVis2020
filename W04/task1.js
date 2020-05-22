function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var surface_num = 12;

    var vertices = [];
    var i = 0;
    
    vertices.push([
        [ -1,  1, 1 ], // v0
        [ -1, -1, 1 ], // v1
        [  1, -1, 1 ]  // v2
    ]);

    vertices.push([
        [ -1,  1, 1 ], // v0
        [  1, -1, 1 ], // v1
        [  1,  1, 1 ]  // v2
    ]);

    vertices.push([
        [ -1,  1, -1 ], // v0
        [  -1, 1, 1 ], // v1
        [  1,  1, 1 ]  // v2
    ]);

    vertices.push([
        [ -1,  1, -1 ], // v0
        [  1,  1, 1 ], // v1
        [  1,  1, -1 ]  // v2
    ]);

    vertices.push([
        [  1,  1,  1 ], // v0
        [  1, -1,  1 ], // v1
        [  1, -1, -1 ]  // v2
    ]);

    vertices.push([
        [  1,  1, 1 ], // v0
        [  1, -1, -1 ], // v1
        [  1,  1, -1 ]  // v2
    ]);

    vertices.push([
        [  -1,  1, -1 ], // v0
        [  -1, -1, -1 ], // v1
        [  -1,  -1, 1 ]  // v2
    ]);

    vertices.push([
        [  -1,  1, -1 ], // v0
        [  -1, -1, 1 ], // v1
        [  -1,  1, 1 ]  // v2
    ]);

    vertices.push([
        [  -1,  -1, 1 ], // v0
        [  -1, -1, -1 ], // v1
        [  1,  -1, -1 ]  // v2
    ]);

    vertices.push( [
        [  -1,  -1, 1 ], // v0
        [  1, -1, -1 ], // v1
        [  1,  -1, 1 ]  // v2
    ]);

    vertices.push( [
        [  1,  1, -1 ], // v0
        [  1, -1, -1 ], // v1
        [  -1,  -1, -1 ]  // v2
    ]);

    vertices.push( [
        [  1,  1, -1 ], // v0
        [  -1, -1, -1 ], // v1
        [  -1,  1, -1 ]  // v2
    ]);


    var faces = [];
    for (i = 0; i < surface_num * 3; i += 3) {
        faces.push([i, i+1, i+2]);
    }

    var v = [];
    var f = [];
    for (i = 0; i < surface_num; i++) {
        v.push([new THREE.Vector3().fromArray( vertices[i][0] ),
                new THREE.Vector3().fromArray( vertices[i][1] ),
                new THREE.Vector3().fromArray( vertices[i][2] )]);
        
        f.push(new THREE.Face3( faces[i][0], faces[i][1], faces[i][2] ));
    }

    var geometry = new THREE.Geometry();


    for (i = 0; i < surface_num; i++) {
        geometry.vertices.push( v[i][0] );
        geometry.vertices.push( v[i][1] );
        geometry.vertices.push( v[i][2] );
        geometry.faces.push(f[i]);
    }


    //    var material = new THREE.MeshBasicMaterial();
    var material = new THREE.MeshLambertMaterial();
    material.vertexColors = THREE.FaceColors;

    for(i = 0; i < surface_num; i++) {
        geometry.faces[i].color = new THREE.Color(1, 0, 0);
    }


    geometry.computeFaceNormals();
    material.side = THREE.FrontSide;
    // material.side = THREE.DoubleSide;

    var triangle = new THREE.Mesh( geometry, material );
    scene.add( triangle );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        triangle.rotation.x += 0.001;
        triangle.rotation.y += 0.001;
        renderer.render( scene, camera );
    }
}
