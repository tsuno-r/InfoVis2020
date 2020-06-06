function Isosurfaces( volume, isovalue, vert_shader, frag_shader, reflection_model, target_dom, screen )
{

    if ( reflection_model === undefined )
    {
        reflection_model = "Lambert";
    }

    if ( target_dom === undefined )
    {
        target_dom = document.body;
    }

    var geometry = new THREE.Geometry();
    // var material = new THREE.MeshLambertMaterial();


    var material = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: vert_shader,
        fragmentShader: frag_shader,
        defines: {
            Lambert: reflection_model == "Lambert",
            Phong: reflection_model == "Phong",
            BlinnPhong: reflection_model == "BlinnPhong",
            CookTrrance: reflection_model == "CookTrrance"
        },
        uniforms: {
            light_position: { type: 'v3', value: screen.light.position },
            camera_position: { type: 'v3', value: screen.camera.position},
        }
    });



    var smin = volume.min_value;
    var smax = volume.max_value;
    isovalue = KVS.Clamp( isovalue, smin, smax );

    var lut = new KVS.MarchingCubesTable();
    var cell_index = 0;
    var counter = 0;
    var nfaces = 0;

    // Create color map
    var cmap = [];
    for ( var i = 0; i < 256; i++ )
    {
        var S = i / 255.0; // [0,1]
        var R = Math.max( Math.cos( ( S - 1.0 ) * Math.PI ), 0.0 );
        var G = Math.max( Math.cos( ( S - 0.5 ) * Math.PI ), 0.0 );
        var B = Math.max( Math.cos( S * Math.PI ), 0.0 );
        var color = new THREE.Color( R, G, B );
        cmap.push( [ S, '0x' + color.getHexString() ] );
    }

    material.vertexColors = THREE.VertexColors;



    for ( var z = 0; z < volume.resolution.z - 1; z++ )
    {
        for ( var y = 0; y < volume.resolution.y - 1; y++ )
        {
            for ( var x = 0; x < volume.resolution.x - 1; x++ )
            {
                var indices = cell_node_indices( cell_index++ );
                // console.log(indices);
                // console.log(x, y, z);
                // console.log(indices[0]);

                var index = table_index( indices );

                // console.log(index);
                // console.log(volume.values.length)

                if ( index == 0 ) { continue; }
                if ( index == 255 ) { continue; }

                for ( var j = 0; lut.edgeID[index][j] != -1; j += 3 )
                {
                    var eid0 = lut.edgeID[index][j];
                    var eid1 = lut.edgeID[index][j+2];
                    var eid2 = lut.edgeID[index][j+1];

                    // console.log(lut.edgeID[index]);
                    // console.log(index);
                    // console.log(eid0);
                    // console.log(eid1);
                    // console.log(eid2);

                    var vid0 = lut.vertexID[eid0][0];
                    var vid1 = lut.vertexID[eid0][1];
                    var vid2 = lut.vertexID[eid1][0];
                    var vid3 = lut.vertexID[eid1][1];
                    var vid4 = lut.vertexID[eid2][0];
                    var vid5 = lut.vertexID[eid2][1];

                    // console.log(vid0);
                    // console.log(vid1);
                    // console.log(vid2);
                    // console.log(vid3);
                    // console.log(vid4);
                    // console.log(vid5);



                    // return; 
                    var v0 = new THREE.Vector3( x + vid0[0], y + vid0[1], z + vid0[2] );
                    var v1 = new THREE.Vector3( x + vid1[0], y + vid1[1], z + vid1[2] );
                    var v2 = new THREE.Vector3( x + vid2[0], y + vid2[1], z + vid2[2] );
                    var v3 = new THREE.Vector3( x + vid3[0], y + vid3[1], z + vid3[2] );
                    var v4 = new THREE.Vector3( x + vid4[0], y + vid4[1], z + vid4[2] );
                    var v5 = new THREE.Vector3( x + vid5[0], y + vid5[1], z + vid5[2] );


                    var s0 = get_scalar(indices[0], vid0);
                    var s1 = get_scalar(indices[0], vid1);
                    var s2 = get_scalar(indices[0], vid2);
                    var s3 = get_scalar(indices[0], vid3);
                    var s4 = get_scalar(indices[0], vid4);
                    var s5 = get_scalar(indices[0], vid5);
                    // var si = index;

                    var v01 = interpolated_vertex( v0, v1, s0, s1, isovalue);
                    var v23 = interpolated_vertex( v2, v3, s2, s3, isovalue);
                    var v45 = interpolated_vertex( v4, v5, s4, s5, isovalue);
                    
                    // console.log("si:",si);
                    // console.log(s0);
                    // console.log(s1);
                    // console.log(s2);
                    // console.log(s3);
                    // console.log(s4);
                    // console.log(s5);

                    // console.log(v01);
                    // console.log(v23);
                    // console.log(v45);

                    // return;

                    geometry.vertices.push( v01 );
                    geometry.vertices.push( v23 );
                    geometry.vertices.push( v45 );

                    var id0 = counter++;
                    var id1 = counter++;
                    var id2 = counter++;
                    geometry.faces.push( new THREE.Face3( id0, id1, id2 ) );
                    

                    // カラーの設定
                    var C0 = new THREE.Color().setHex( cmap[ isovalue ][1] ); // cmap[v01のスカラー値][1]
                    var C1 = new THREE.Color().setHex( cmap[ isovalue ][1] );
                    var C2 = new THREE.Color().setHex( cmap[ isovalue ][1] );
                    geometry.faces[nfaces].vertexColors.push( C0 );
                    geometry.faces[nfaces].vertexColors.push( C1 );
                    geometry.faces[nfaces].vertexColors.push( C2 );

                    nfaces++;

                }
            }
            cell_index++;
        }
        cell_index += volume.resolution.x;
    }

    geometry.computeVertexNormals();

    // material.color = new THREE.Color( "white" );


    return new THREE.Mesh( geometry, material );


    function cell_node_indices( cell_index )
    {
        var lines = volume.resolution.x;
        var slices = volume.resolution.x * volume.resolution.y;

        var id0 = cell_index;
        var id1 = id0 + 1;
        var id2 = id1 + lines;
        var id3 = id0 + lines;
        var id4 = id0 + slices;
        var id5 = id1 + slices;
        var id6 = id2 + slices;
        var id7 = id3 + slices;

        return [ id0, id1, id2, id3, id4, id5, id6, id7 ];
    }

    function table_index( indices )
    {
        var s0 = volume.values[ indices[0] ][0];
        var s1 = volume.values[ indices[1] ][0];
        var s2 = volume.values[ indices[2] ][0];
        var s3 = volume.values[ indices[3] ][0];
        var s4 = volume.values[ indices[4] ][0];
        var s5 = volume.values[ indices[5] ][0];
        var s6 = volume.values[ indices[6] ][0];
        var s7 = volume.values[ indices[7] ][0];

        var index = 0;
        if ( s0 > isovalue ) { index |=   1; }
        if ( s1 > isovalue ) { index |=   2; }
        if ( s2 > isovalue ) { index |=   4; }
        if ( s3 > isovalue ) { index |=   8; }
        if ( s4 > isovalue ) { index |=  16; }
        if ( s5 > isovalue ) { index |=  32; }
        if ( s6 > isovalue ) { index |=  64; }
        if ( s7 > isovalue ) { index |= 128; }

        return index;
    }

    function interpolated_vertex( v0, v1, s0, s1, si )
    {

        var t = (si - s0) / (s1 - s0);
        var v1_0 = new THREE.Vector3().subVectors(v1, v0);
        var vi = new THREE.Vector3().addVectors( v0, new THREE.Vector3().addScaledVector( v1_0, t ) )


        return vi;
    }

    function get_scalar(org_id, vid) 
    {
        var idx = org_id;
        var lines = volume.resolution.x;
        var slices = volume.resolution.x * volume.resolution.y;

        if(vid[0] == 1) {
            idx += 1;
        }
        if(vid[1] == 1) {
            idx += lines;
        }
        if(vid[2] == 1) {
            idx += slices;
        }

        return volume.values[ idx ][0];
    }
}
