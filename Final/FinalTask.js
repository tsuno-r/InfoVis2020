function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth * 0.6,
        height: window.innerHeight * 0.8,
        targetDom: document.getElementById('display'),
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue, screen.camera, screen.light );
    surfaces.name = "lobster";
    screen.scene.add( surfaces );

    var x = ( volume.max_coord.x + volume.min_coord.x ) * 0;
    var y = ( volume.max_coord.y + volume.min_coord.y ) * 0;
    var z = ( volume.max_coord.z + volume.min_coord.z ) * 0;
    var point = new THREE.Vector3( x, y, z );
    var normal = new THREE.Vector3( 0, 0, 0 );
    var slice = SlicePlane( volume, point, normal );
    slice.name = "slice";
    screen.scene.add( slice );


    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
    });

    screen.loop();

    // Change Parameter
    document.getElementById("change-button").onclick = function() {

        if(document.getElementById("slice").checked) {
            x = ( volume.max_coord.x + volume.min_coord.x ) * document.getElementById("para_px").value;
            y = ( volume.max_coord.y + volume.min_coord.y ) * document.getElementById("para_py").value;
            z = ( volume.max_coord.z + volume.min_coord.z ) * document.getElementById("para_pz").value;
            point = new THREE.Vector3( x, y, z );
            normal = new THREE.Vector3( document.getElementById("para_nx").value, document.getElementById("para_ny").value, document.getElementById("para_nz").value);
            slice = SlicePlane( volume, point, normal );
            slice.name = "slice";
            for(i = 0; i < screen.scene.children.length; i++) {
                if(screen.scene.children[i].name == "slice") {
                    screen.scene.children[i] = slice;
                }
                if(screen.scene.children[i].name == "lobster") {
                    screen.scene.children[i].visible = false;
                }
            }
        }else {
            isovalue = Math.round(document.getElementById("isovalue").value * 255);
            surfaces = Isosurfaces( volume, isovalue, screen.camera, screen.light );
            surfaces.name = "lobster";
            for(i = 0; i < screen.scene.children.length; i++) {
                if(screen.scene.children[i].name == "lobster") {
                    screen.scene.children[i] = surfaces;
                }
                if(screen.scene.children[i].name == "slice") {
                    screen.scene.children[i].visible = false;
                }
            }
        }
    }
}
