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


    var vertices = []
    
    vertices.push([
        [ -1,  1, 1 ], // v0
        [ -1, -1, 1 ], // v1
        [  1, -1, 1 ]  // v2
    ]);

    console.log(vertices_)
    var vertices = [
        [ -1,  1, 1 ], // v0
        [ -1, -1, 1 ], // v1
        [  1, -1, 1 ]  // v2
    ];

    var vertices2 = [
        [ -1,  1, 1 ], // v0
        [  1, -1, 1 ], // v1
        [  1,  1, 1 ]  // v2
    ];

    var vertices3 = [
        [ -1,  1, -1 ], // v0
        [  -1, 1, 1 ], // v1
        [  1,  1, 1 ]  // v2
    ];

    var vertices4 = [
        [ -1,  1, -1 ], // v0
        [  1,  1, 1 ], // v1
        [  1,  1, -1 ]  // v2
    ];

    var vertices5 = [
        [  1,  1,  1 ], // v0
        [  1, -1,  1 ], // v1
        [  1, -1, -1 ]  // v2
    ];

    var vertices6 = [
        [  1,  1, 1 ], // v0
        [  1, -1, -1 ], // v1
        [  1,  1, -1 ]  // v2
    ];

    var vertices7 = [
        [  -1,  1, -1 ], // v0
        [  -1, -1, -1 ], // v1
        [  -1,  -1, 1 ]  // v2
    ];

    var vertices8 = [
        [  -1,  1, -1 ], // v0
        [  -1, -1, 1 ], // v1
        [  -1,  1, 1 ]  // v2
    ];

    var vertices9 = [
        [  -1,  -1, 1 ], // v0
        [  -1, -1, -1 ], // v1
        [  1,  -1, -1 ]  // v2
    ];

    var vertices10 = [
        [  -1,  -1, 1 ], // v0
        [  1, -1, -1 ], // v1
        [  1,  -1, 1 ]  // v2
    ];

    var vertices11 = [
        [  1,  1, -1 ], // v0
        [  1, -1, -1 ], // v1
        [  -1,  -1, -1 ]  // v2
    ];

    var vertices12 = [
        [  1,  1, -1 ], // v0
        [  -1, -1, -1 ], // v1
        [  -1,  1, -1 ]  // v2
    ];


    var faces = [
        [ 0, 1, 2],  // f0
        [ 3, 4, 5],  // f1
        [ 6, 7, 8],  // f2
        [ 9, 10, 11],  // f3
        [ 12, 13, 14],  // f4
        [ 15, 16, 17],  // f5
        [ 18, 19, 20],  // f6
        [ 21, 22, 23],  // f7
        [ 24, 25, 26],  // f8
        [ 27, 28, 29],  // f9
        [ 30, 31, 32],  // f10
        [ 33, 34, 35]  // f11
    ];


    // 1
    var v00 = new THREE.Vector3().fromArray( vertices[0] );
    var v01 = new THREE.Vector3().fromArray( vertices[1] );
    var v02 = new THREE.Vector3().fromArray( vertices[2] );
    var id = faces[0];
    var f0 = new THREE.Face3( id[0], id[1], id[2] );

    // 2
    var v10 = new THREE.Vector3().fromArray( vertices2[0] );
    var v11 = new THREE.Vector3().fromArray( vertices2[1] );
    var v12 = new THREE.Vector3().fromArray( vertices2[2] );
    var id = faces[1];
    var f1 = new THREE.Face3( id[0], id[1], id[2] );

    // 3
    var v20 = new THREE.Vector3().fromArray( vertices3[0] );
    var v21 = new THREE.Vector3().fromArray( vertices3[1] );
    var v22 = new THREE.Vector3().fromArray( vertices3[2] );
    var id = faces[2];
    var f2 = new THREE.Face3( id[0], id[1], id[2] );

    // 4
    var v30 = new THREE.Vector3().fromArray( vertices4[0] );
    var v31 = new THREE.Vector3().fromArray( vertices4[1] );
    var v32 = new THREE.Vector3().fromArray( vertices4[2] );
    var id = faces[3];
    var f3 = new THREE.Face3( id[0], id[1], id[2] );

    // 5
    var v40 = new THREE.Vector3().fromArray( vertices5[0] );
    var v41 = new THREE.Vector3().fromArray( vertices5[1] );
    var v42 = new THREE.Vector3().fromArray( vertices5[2] );
    var id = faces[4];
    var f4 = new THREE.Face3( id[0], id[1], id[2] );

    // 6
    var v50 = new THREE.Vector3().fromArray( vertices6[0] );
    var v51 = new THREE.Vector3().fromArray( vertices6[1] );
    var v52 = new THREE.Vector3().fromArray( vertices6[2] );
    var id = faces[5];
    var f5 = new THREE.Face3( id[0], id[1], id[2] );
    
    // 7
    var v60 = new THREE.Vector3().fromArray( vertices7[0] );
    var v61 = new THREE.Vector3().fromArray( vertices7[1] );
    var v62 = new THREE.Vector3().fromArray( vertices7[2] );
    var id = faces[6];
    var f6 = new THREE.Face3( id[0], id[1], id[2] );

    // 8
    var v70 = new THREE.Vector3().fromArray( vertices8[0] );
    var v71 = new THREE.Vector3().fromArray( vertices8[1] );
    var v72 = new THREE.Vector3().fromArray( vertices8[2] );
    var id = faces[7];
    var f7 = new THREE.Face3( id[0], id[1], id[2] );

    // 9
    var v80 = new THREE.Vector3().fromArray( vertices9[0] );
    var v81 = new THREE.Vector3().fromArray( vertices9[1] );
    var v82 = new THREE.Vector3().fromArray( vertices9[2] );
    var id = faces[8];
    var f8 = new THREE.Face3( id[0], id[1], id[2] );

    // 10
    var v90 = new THREE.Vector3().fromArray( vertices10[0] );
    var v91 = new THREE.Vector3().fromArray( vertices10[1] );
    var v92 = new THREE.Vector3().fromArray( vertices10[2] );
    var id = faces[9];
    var f9 = new THREE.Face3( id[0], id[1], id[2] );

    // 11
    var v100 = new THREE.Vector3().fromArray( vertices11[0] );
    var v101 = new THREE.Vector3().fromArray( vertices11[1] );
    var v102 = new THREE.Vector3().fromArray( vertices11[2] );
    var id = faces[10];
    var f10 = new THREE.Face3( id[0], id[1], id[2] );

    // 12
    var v110 = new THREE.Vector3().fromArray( vertices12[0] );
    var v111 = new THREE.Vector3().fromArray( vertices12[1] );
    var v112 = new THREE.Vector3().fromArray( vertices12[2] );
    var id = faces[11];
    var f11 = new THREE.Face3( id[0], id[1], id[2] );



    var geometry = new THREE.Geometry();
    // 1つ目
    geometry.vertices.push( v00 );
    geometry.vertices.push( v01 );
    geometry.vertices.push( v02 );
    geometry.faces.push( f0 );

    // 2つ目
    geometry.vertices.push( v10 );
    geometry.vertices.push( v11 );
    geometry.vertices.push( v12 );
    geometry.faces.push( f1 );

    // 3つ目
    geometry.vertices.push( v20 );
    geometry.vertices.push( v21 );
    geometry.vertices.push( v22 );
    geometry.faces.push( f2 );

    // 4つ目
    geometry.vertices.push( v30 );
    geometry.vertices.push( v31 );
    geometry.vertices.push( v32 );
    geometry.faces.push( f3 );

    // 5つ目
    geometry.vertices.push( v40 );
    geometry.vertices.push( v41 );
    geometry.vertices.push( v42 );
    geometry.faces.push( f4 );

    // 6つ目
    geometry.vertices.push( v50 );
    geometry.vertices.push( v51 );
    geometry.vertices.push( v52 );
    geometry.faces.push( f5 );

    // 7つ目
    geometry.vertices.push( v60 );
    geometry.vertices.push( v61 );
    geometry.vertices.push( v62 );
    geometry.faces.push( f6 );

    // 8つ目
    geometry.vertices.push( v70 );
    geometry.vertices.push( v71 );
    geometry.vertices.push( v72 );
    geometry.faces.push( f7 );

    // 9つ目
    geometry.vertices.push( v80 );
    geometry.vertices.push( v81 );
    geometry.vertices.push( v82 );
    geometry.faces.push( f8 );

    // 10つ目
    geometry.vertices.push( v90 );
    geometry.vertices.push( v91 );
    geometry.vertices.push( v92 );
    geometry.faces.push( f9 );

    // 11つ目
    geometry.vertices.push( v100 );
    geometry.vertices.push( v101 );
    geometry.vertices.push( v102 );
    geometry.faces.push( f10 );

    // 12つ目
    geometry.vertices.push( v110 );
    geometry.vertices.push( v111 );
    geometry.vertices.push( v112 );
    geometry.faces.push( f11 );

    //    var material = new THREE.MeshBasicMaterial();
    var material = new THREE.MeshLambertMaterial();
    material.vertexColors = THREE.FaceColors;
    geometry.faces[0].color = new THREE.Color( 1, 0, 0 );
    geometry.faces[1].color = new THREE.Color( 1, 0, 0 );
    geometry.faces[2].color = new THREE.Color( 1, 0, 0 );
    geometry.faces[3].color = new THREE.Color( 1, 0, 0 );
    geometry.faces[4].color = new THREE.Color( 1, 0, 0 );
    geometry.faces[5].color = new THREE.Color( 1, 0, 0 );
    geometry.faces[6].color = new THREE.Color( 1, 0, 0 );
    geometry.faces[7].color = new THREE.Color( 1, 0, 0 );
    geometry.faces[8].color = new THREE.Color( 1, 0, 0 );
    geometry.faces[9].color = new THREE.Color( 1, 0, 0 );
    geometry.faces[10].color = new THREE.Color( 1, 0, 0 );
    geometry.faces[11].color = new THREE.Color( 1, 0, 0 );

    geometry.computeFaceNormals();
    material.side = THREE.FrontSide;
    // material.side = THREE.DoubleSide;

    var triangle = new THREE.Mesh( geometry, material );
    scene.add( triangle );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        triangle.rotation.x += 0.01;
        triangle.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
}
