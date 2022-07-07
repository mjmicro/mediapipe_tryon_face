import * as THREE from "three";
import { PUBLIC_PATH } from "../public_path";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { scaleLandmark } from "../facemesh/landmarks_helpers";

function loadModel(file) {
  return new Promise((res, rej) => {
    const loader = new GLTFLoader();
    loader.load(
      file,
      function (gltf) {
        res(gltf.scene);
      },
      undefined,
      function (error) {
        rej(error);
      }
    );
  });
}

export class Glasses {
  constructor(scene, width, height) {
    this.scene = scene;
    this.width = width;
    this.height = height;
    this.needsUpdate = false;
    this.landmarks = null;
    this.size = 0;
    this.loadGlasses();
  }

  async loadGlasses() {
    this.glasses = await loadModel(
      `${PUBLIC_PATH}/3d/black-glasses/scene.gltf`
    );
    this.glasses.name = "glasses";

    // calculate width(size) of glasses
    let boundingBox = new THREE.Box3().setFromObject(this.glasses);
    this.size = boundingBox.getSize(new THREE.Vector3());
    console.log(this.size);
  }

  updateDimensions(width, height) {
    this.width = width;
    this.height = height;
    this.needsUpdate = true;
  }

  updateLandmarks(landmarks) {
    this.landmarks = landmarks;
    this.needsUpdate = true;
  }

  updateGlasses() {
    let midEyes = scaleLandmark(this.landmarks[168], this.width, this.height);
    let leftEyeInnerCorner = scaleLandmark(
      this.landmarks[463],
      this.width,
      this.height
    );
    let rightEyeInnerCorner = scaleLandmark(
      this.landmarks[243],
      this.width,
      this.height
    );
    let noseBottom = scaleLandmark(this.landmarks[2], this.width, this.height);
    let leftEyeUpper1 = scaleLandmark(
      this.landmarks[446],
      this.width,
      this.height
    );
    let rightEyeUpper1 = scaleLandmark(
      this.landmarks[226],
      this.width,
      this.height
    );

    if (this.glasses) {
      // position
      this.glasses.position.set(midEyes.x, midEyes.y, midEyes.z);

      // scale to make glasses
      // as wide as distance between 
      // face left side and right side
      const eyeDist = Math.sqrt(
        (scaleLandmark(this.landmarks[234], this.width, this.height).x -
          scaleLandmark(this.landmarks[454], this.width, this.height).x) **
          2 +
          (scaleLandmark(this.landmarks[234], this.width, this.height).y -
            scaleLandmark(this.landmarks[454], this.width, this.height).y) **
            2 +
          (scaleLandmark(this.landmarks[234], this.width, this.height).z -
            scaleLandmark(this.landmarks[454], this.width, this.height).z) **
            2
      );

      // 1.4 is width of 3d model of default glasses
      let scale = eyeDist / this.size.x;
      console.log(eyeDist, this.size.x, scale);
      this.glasses.scale.set(scale, scale, scale);

      // use two vectors to rotate glasses
      // Vertical Vector from midEyes to noseBottom
      // is used for calculating rotation around x and z axis
      // Horizontal Vector from leftEyeCorner to rightEyeCorner
      // us use to calculate rotation around y axis
      let upVector = new THREE.Vector3(
        midEyes.x - noseBottom.x,
        midEyes.y - noseBottom.y,
        midEyes.z - noseBottom.z
      ).normalize();

      let sideVector = new THREE.Vector3(
        leftEyeInnerCorner.x - rightEyeInnerCorner.x,
        leftEyeInnerCorner.y - rightEyeInnerCorner.y,
        leftEyeInnerCorner.z - rightEyeInnerCorner.z
      ).normalize();

      let zRot =
        new THREE.Vector3(1, 0, 0).angleTo(
          upVector.clone().projectOnPlane(new THREE.Vector3(0, 0, 1))
        ) -
        Math.PI / 2;

      let xRot =
        Math.PI / 2 -
        new THREE.Vector3(0, 0, 1).angleTo(
          upVector.clone().projectOnPlane(new THREE.Vector3(1, 0, 0))
        );

      let yRot =
        new THREE.Vector3(sideVector.x, 0, sideVector.z).angleTo(
          new THREE.Vector3(0, 0, 1)
        ) -
        Math.PI / 2;
      console.log(zRot, xRot, yRot);
      this.glasses.rotation.set(xRot, yRot, zRot);
    }
  }

  addGlasses() {
    if (this.glasses) {
      this.scene.add(this.glasses);
    }
  }

  removeGlasses() {
    this.scene.remove(this.glasses);
  }

  update() {
    if (this.needsUpdate) {
      let inScene = !!this.scene.getObjectByName("glasses");
      let shouldShow = !!this.landmarks;
      if (inScene) {
        shouldShow ? this.updateGlasses() : this.removeGlasses();
      } else {
        if (shouldShow) {
          this.addGlasses();
        }
      }
    }
  }
}
