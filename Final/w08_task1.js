function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth * 0.8,
        height: window.innerHeight,
        targetDom: document.getElementById('display'),
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
    });

    screen.loop();

    // Change Isovalue
    document.getElementById("change-isovalue-button").onclick = function() {
        isovalue = Math.round(document.getElementById("isovalue").value * 255);
        surfaces = Isosurfaces( volume, isovalue );
        for(i = 0; i < screen.scene.children.length; i++) {
            if(screen.scene.children[i].type == "Mesh") {
                screen.scene.children[i] = surfaces;
            }
        }
    }


    // Change Color Map
    document.getElementById("change-color-map-button").onclick = function() {
        isovalue = Math.round(document.getElementById("isovalue").value * 255);
        surfaces = Isosurfaces( volume, isovalue );
        for(i = 0; i < screen.scene.children.length; i++) {
            if(screen.scene.children[i].type == "Mesh") {
                screen.scene.children[i] = surfaces;
            }
        }
    }


}
