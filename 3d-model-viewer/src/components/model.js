import React, { Component} from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

function init() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth, window.innerHeight, 1, 5000);
    const hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);

    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const loader = new GLTFLoader();
        loader.load('3d-model-viewer/models/car/scene.gltf', function(gltf){
            scene.add(gltf.scene);
            renderer.render(scene.camera);
        });

}

class Model extends Component{
    render() {
        init();
        return(
            <div>
            </div>
        )
    }
}

export default Model