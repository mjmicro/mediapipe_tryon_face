"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemediapipe_facemesh_effects"]("main",{

/***/ "./src/js/three_components/scene_manager.js":
/*!**************************************************!*\
  !*** ./src/js/three_components/scene_manager.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SceneManager\": () => (/* binding */ SceneManager)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _face_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./face_mask */ \"./src/js/three_components/face_mask.js\");\n/* harmony import */ var _glasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glasses */ \"./src/js/three_components/glasses.js\");\n/* harmony import */ var _video_bg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video_bg */ \"./src/js/three_components/video_bg.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n\n/**\n * \n * Finds distance to position perspective camera\n * \n * @param {Number} height height of video \n * @param {Number} fov fov of perspective camera\n */\n\nvar cameraDistance = function cameraDistance(height, fov) {\n  return height / 2 / Math.tan(fov / 2 * Math.PI / 180);\n};\n/**\n * \n * Call these methods.\n * \n * 1) animate inside request animation frame\n * 2) resize inside request animation frame\n * 3) onLandmarks on recieving new face landmarks\n * \n */\n\n\nvar SceneManager = /*#__PURE__*/function () {\n  function SceneManager(canvas) {\n    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    var useOrtho = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n\n    _classCallCheck(this, SceneManager);\n\n    this.canvas = canvas;\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_5__.Scene();\n    this.debug = debug;\n    this.useOrtho = useOrtho;\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n      canvas: this.canvas,\n      devicePixelRation: window.devicePixelRatio || 1\n    });\n    this.fov = 63;\n    this.buildCamera();\n    this.buildControls();\n    this.buildVideoBg();\n    this.buildFaceMask();\n    this.buildGlasses();\n  }\n\n  _createClass(SceneManager, [{\n    key: \"buildVideoBg\",\n    value: function buildVideoBg() {\n      // video background for canvas\n      this.videoBg = new _video_bg__WEBPACK_IMPORTED_MODULE_3__.VideoBackground(this.scene, this.renderer.domElement.width, this.renderer.domElement.height);\n    }\n  }, {\n    key: \"buildFaceMask\",\n    value: function buildFaceMask() {\n      // this component draws faces\n      this.faceMask = new _face_mask__WEBPACK_IMPORTED_MODULE_1__.FaceMask(this.scene, this.renderer.domElement.width, this.renderer.domElement.height);\n    }\n  }, {\n    key: \"buildGlasses\",\n    value: function buildGlasses() {\n      this.glasses = new _glasses__WEBPACK_IMPORTED_MODULE_2__.Glasses(this.scene, this.renderer.domElement.width, this.renderer.domElement.height);\n    }\n  }, {\n    key: \"buildControls\",\n    value: function buildControls() {\n      if (this.debug) {\n        this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__.OrbitControls(this.camera, this.renderer.domElement);\n        this.controls.update();\n      }\n    }\n  }, {\n    key: \"buildCamera\",\n    value: function buildCamera() {\n      this.useOrtho ? this.buildOrthoCamera() : this.buildPerspectiveCamera();\n    }\n  }, {\n    key: \"buildOrthoCamera\",\n    value: function buildOrthoCamera() {\n      this.camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-this.renderer.domElement.width / 2, this.renderer.domElement.width / 2, this.renderer.domElement.height / 2, -this.renderer.domElement.height / 2, -2000, 2000);\n      this.camera.position.z = 1;\n    }\n  }, {\n    key: \"buildPerspectiveCamera\",\n    value: function buildPerspectiveCamera() {\n      this.camera = new three__WEBPACK_IMPORTED_MODULE_5__.PerspectiveCamera(this.fov, this.renderer.domElement.width / this.renderer.domElement.height, 1.0, // near\n      10000);\n      this.camera.position.z = cameraDistance(this.renderer.domElement.height, this.fov);\n      console.log(this.camera.position.z);\n    } // we need to resize canvas rendering dimensions\n    // when canvas sytling dimensions change\n\n  }, {\n    key: \"resizeRendererToDisplaySize\",\n    value: function resizeRendererToDisplaySize() {\n      var canvas = this.renderer.domElement; // match dimension of canvas with\n      // dimension of video\n\n      if (this.videoWidth != canvas.clientWidth || this.videoHeight != canvas.clientHeight) {\n        var _width = this.videoWidth;\n        var _height = this.videoHeight;\n        canvas.style.width = \"\".concat(_width, \"px\");\n        canvas.style.height = \"\".concat(_height, \"px\");\n      } // canvas has 2 width\n      // 1) style width set with style attribute\n      // 2) rendering width set with width and height attribute\n      // update rendering width to match styling width.\n\n\n      var width = canvas.clientWidth | 0;\n      var height = canvas.clientHeight | 0;\n      var needResize = canvas.width !== width || canvas.height !== height;\n\n      if (needResize) {\n        this.renderer.setSize(width, height, false);\n      }\n\n      return needResize;\n    }\n  }, {\n    key: \"updateCamera\",\n    value: function updateCamera() {\n      console.log(); // camera need to be adjusted according to\n      // renderer dimensions\n\n      this.camera.aspect = this.videoWidth / this.videoHeight;\n\n      if (this.camera.type == 'OrthographicCamera') {\n        this.camera.top = this.videoHeight / 2;\n        this.camera.bottom = -this.videoHeight / 2;\n        this.camera.left = -this.videoWidth / 2;\n        this.camera.right = this.videoWidth / 2;\n      } else {\n        this.camera.position.z = cameraDistance(this.videoHeight, this.fov);\n      }\n\n      this.camera.updateProjectionMatrix();\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      if (this.controls) {\n        this.controls.update();\n      }\n\n      if (this.resizeRendererToDisplaySize()) {\n        // facemask needs to scale faces according to \n        // renderer dimensions\n        this.faceMask.updateDimensions(this.renderer.domElement.width, this.renderer.domElement.height);\n        this.glasses.updateDimensions(this.renderer.domElement.width, this.renderer.domElement.height); // update video width and height\n\n        this.videoBg.updateDimensions(this.renderer.domElement.width, this.renderer.domElement.height);\n        this.updateCamera();\n      } // update video background\n\n\n      this.videoBg.update(); // update glasses\n\n      this.glasses.update(); // update faces mask\n\n      this.faceMask.update(); // render scene\n\n      this.renderer.render(this.scene, this.camera);\n    }\n  }, {\n    key: \"resize\",\n    value: function resize(videoWidth, videoHeight) {\n      this.videoWidth = videoWidth;\n      this.videoHeight = videoHeight;\n    }\n  }, {\n    key: \"onLandmarks\",\n    value: function onLandmarks(image, landmarks) {\n      if (image && landmarks) {\n        this.videoBg.setImage(image);\n        this.faceMask.updateLandmarks(landmarks);\n        this.glasses.updateLandmarks(landmarks);\n      }\n    }\n  }]);\n\n  return SceneManager;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGhyZWVfY29tcG9uZW50cy9zY2VuZV9tYW5hZ2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxNQUFELEVBQVNDLEdBQVQsRUFBaUI7QUFDdEMsU0FBUUQsTUFBTSxHQUFHLENBQVYsR0FBZUUsSUFBSSxDQUFDQyxHQUFMLENBQVVGLEdBQUcsR0FBQyxDQUFMLEdBQVVDLElBQUksQ0FBQ0UsRUFBZixHQUFvQixHQUE3QixDQUF0QjtBQUNELENBRkQ7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLFlBQWI7QUFDRSx3QkFBWUMsTUFBWixFQUFnRDtBQUFBLFFBQTVCQyxLQUE0Qix1RUFBdEIsS0FBc0I7QUFBQSxRQUFmQyxRQUFlLHVFQUFOLElBQU07O0FBQUE7O0FBQzlDLFNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtHLEtBQUwsR0FBYSxJQUFJZix3Q0FBSixFQUFiO0FBQ0EsU0FBS2EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLRyxRQUFMLEdBQWdCLElBQUlqQixnREFBSixDQUF3QjtBQUN0Q1ksTUFBQUEsTUFBTSxFQUFFLEtBQUtBLE1BRHlCO0FBRXRDTyxNQUFBQSxpQkFBaUIsRUFBRUMsTUFBTSxDQUFDQyxnQkFBUCxJQUEyQjtBQUZSLEtBQXhCLENBQWhCO0FBSUEsU0FBS2QsR0FBTCxHQUFXLEVBQVg7QUFDQSxTQUFLZSxXQUFMO0FBQ0EsU0FBS0MsYUFBTDtBQUNBLFNBQUtDLFlBQUw7QUFDQSxTQUFLQyxhQUFMO0FBQ0EsU0FBS0MsWUFBTDtBQUNEOztBQWhCSDtBQUFBO0FBQUEsV0FrQkUsd0JBQWU7QUFD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LEVBQWdDO0FBQzlCLFdBQUtGLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsV0FBS0UsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDtBQTdLSDtBQUFBO0FBQUEsV0ErS0UscUJBQVlnQixLQUFaLEVBQW1CQyxTQUFuQixFQUE4QjtBQUM1QixVQUFJRCxLQUFLLElBQUlDLFNBQWIsRUFBd0I7QUFDdEIsYUFBS25DLE9BQUwsQ0FBYW9DLFFBQWIsQ0FBc0JGLEtBQXRCO0FBQ0EsYUFBSy9CLFFBQUwsQ0FBY2tDLGVBQWQsQ0FBOEJGLFNBQTlCO0FBQ0EsYUFBSy9CLE9BQUwsQ0FBYWlDLGVBQWIsQ0FBNkJGLFNBQTdCO0FBQ0Q7QUFDRjtBQXJMSDs7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaWFwaXBlLWZhY2VtZXNoLWVmZmVjdHMvLi9zcmMvanMvdGhyZWVfY29tcG9uZW50cy9zY2VuZV9tYW5hZ2VyLmpzPzdmOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgRmFjZU1hc2sgfSBmcm9tICcuL2ZhY2VfbWFzayc7XG5pbXBvcnQgeyBHbGFzc2VzIH0gZnJvbSAnLi9nbGFzc2VzJztcbmltcG9ydCB7IFZpZGVvQmFja2dyb3VuZCB9IGZyb20gJy4vdmlkZW9fYmcnO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xuXG4vKipcbiAqIFxuICogRmluZHMgZGlzdGFuY2UgdG8gcG9zaXRpb24gcGVyc3BlY3RpdmUgY2FtZXJhXG4gKiBcbiAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgaGVpZ2h0IG9mIHZpZGVvIFxuICogQHBhcmFtIHtOdW1iZXJ9IGZvdiBmb3Ygb2YgcGVyc3BlY3RpdmUgY2FtZXJhXG4gKi9cbmNvbnN0IGNhbWVyYURpc3RhbmNlID0gKGhlaWdodCwgZm92KSA9PiB7XG4gIHJldHVybiAoaGVpZ2h0IC8gMikgLyBNYXRoLnRhbigoZm92LzIpICogTWF0aC5QSSAvIDE4MCk7XG59XG5cbi8qKlxuICogXG4gKiBDYWxsIHRoZXNlIG1ldGhvZHMuXG4gKiBcbiAqIDEpIGFuaW1hdGUgaW5zaWRlIHJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lXG4gKiAyKSByZXNpemUgaW5zaWRlIHJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lXG4gKiAzKSBvbkxhbmRtYXJrcyBvbiByZWNpZXZpbmcgbmV3IGZhY2UgbGFuZG1hcmtzXG4gKiBcbiAqL1xuZXhwb3J0IGNsYXNzIFNjZW5lTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgZGVidWc9ZmFsc2UsIHVzZU9ydGhvPXRydWUpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICAgIHRoaXMudXNlT3J0aG8gPSB1c2VPcnRobztcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcbiAgICAgIGRldmljZVBpeGVsUmF0aW9uOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG4gICAgfSk7XG4gICAgdGhpcy5mb3YgPSA2MztcbiAgICB0aGlzLmJ1aWxkQ2FtZXJhKCk7XG4gICAgdGhpcy5idWlsZENvbnRyb2xzKCk7XG4gICAgdGhpcy5idWlsZFZpZGVvQmcoKTtcbiAgICB0aGlzLmJ1aWxkRmFjZU1hc2soKTtcbiAgICB0aGlzLmJ1aWxkR2xhc3NlcygpO1xuICB9XG5cbiAgYnVpbGRWaWRlb0JnKCkge1xuICAgIC8vIHZpZGVvIGJhY2tncm91bmQgZm9yIGNhbnZhc1xuICAgIHRoaXMudmlkZW9CZyA9IG5ldyBWaWRlb0JhY2tncm91bmQodGhpcy5zY2VuZSwgXG4gICAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGgsIFxuICAgICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LmhlaWdodFxuICAgICk7XG4gIH1cblxuICBidWlsZEZhY2VNYXNrKCkge1xuICAgIC8vIHRoaXMgY29tcG9uZW50IGRyYXdzIGZhY2VzXG4gICAgdGhpcy5mYWNlTWFzayA9IG5ldyBGYWNlTWFzayh0aGlzLnNjZW5lLCBcbiAgICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC53aWR0aCwgXG4gICAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgYnVpbGRHbGFzc2VzKCkge1xuICAgIHRoaXMuZ2xhc3NlcyA9IG5ldyBHbGFzc2VzKHRoaXMuc2NlbmUsXG4gICAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGgsXG4gICAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgYnVpbGRDb250cm9scygpIHtcbiAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKFxuICAgICAgICB0aGlzLmNhbWVyYSwgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50IFxuICAgICAgKTtcbiAgICAgIHRoaXMuY29udHJvbHMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYnVpbGRDYW1lcmEoKSB7XG4gICAgdGhpcy51c2VPcnRobyA/IHRoaXMuYnVpbGRPcnRob0NhbWVyYSgpIDogdGhpcy5idWlsZFBlcnNwZWN0aXZlQ2FtZXJhKCk7XG4gIH1cblxuICBidWlsZE9ydGhvQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgIC0gdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LndpZHRoIC8gMixcbiAgICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC53aWR0aCAvIDIsXG4gICAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuaGVpZ2h0IC8gMixcbiAgICAgIC0gdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LmhlaWdodCAvIDIsXG4gICAgICAtMjAwMCwgXG4gICAgICAyMDAwXG4gICAgKVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxXG4gIH1cblxuICBidWlsZFBlcnNwZWN0aXZlQ2FtZXJhKCkge1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICB0aGlzLmZvdixcbiAgICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC53aWR0aCAvIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQsXG4gICAgICAxLjAsIC8vIG5lYXJcbiAgICAgIDEwMDAwLCAvLyBmYXJcbiAgICApXG5cbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gY2FtZXJhRGlzdGFuY2UoXG4gICAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuaGVpZ2h0LCBcbiAgICAgIHRoaXMuZm92XG4gICAgKTsgXG4gICAgY29uc29sZS5sb2codGhpcy5jYW1lcmEucG9zaXRpb24ueik7XG4gIH1cblxuICAvLyB3ZSBuZWVkIHRvIHJlc2l6ZSBjYW52YXMgcmVuZGVyaW5nIGRpbWVuc2lvbnNcbiAgLy8gd2hlbiBjYW52YXMgc3l0bGluZyBkaW1lbnNpb25zIGNoYW5nZVxuICByZXNpemVSZW5kZXJlclRvRGlzcGxheVNpemUoKSB7XG5cbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQ7XG5cbiAgICAvLyBtYXRjaCBkaW1lbnNpb24gb2YgY2FudmFzIHdpdGhcbiAgICAvLyBkaW1lbnNpb24gb2YgdmlkZW9cbiAgICBpZiAodGhpcy52aWRlb1dpZHRoICE9IGNhbnZhcy5jbGllbnRXaWR0aFxuICAgICAgfHwgdGhpcy52aWRlb0hlaWdodCAhPSBjYW52YXMuY2xpZW50SGVpZ2h0KSB7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMudmlkZW9XaWR0aDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMudmlkZW9IZWlnaHQ7XG4gICAgICBjYW52YXMuc3R5bGUud2lkdGggPSAgYCR7d2lkdGh9cHhgO1xuICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgfVxuXG4gICAgLy8gY2FudmFzIGhhcyAyIHdpZHRoXG4gICAgLy8gMSkgc3R5bGUgd2lkdGggc2V0IHdpdGggc3R5bGUgYXR0cmlidXRlXG4gICAgLy8gMikgcmVuZGVyaW5nIHdpZHRoIHNldCB3aXRoIHdpZHRoIGFuZCBoZWlnaHQgYXR0cmlidXRlXG4gICAgLy8gdXBkYXRlIHJlbmRlcmluZyB3aWR0aCB0byBtYXRjaCBzdHlsaW5nIHdpZHRoLlxuICAgIGNvbnN0IHdpZHRoICA9IGNhbnZhcy5jbGllbnRXaWR0aCB8IDA7XG4gICAgY29uc3QgaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodCB8IDA7XG4gICAgY29uc3QgbmVlZFJlc2l6ZSA9IGNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0O1xuICAgIGlmIChuZWVkUmVzaXplKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCwgZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gbmVlZFJlc2l6ZTtcbiAgfVxuXG4gIHVwZGF0ZUNhbWVyYSgpIHtcbiAgICBjb25zb2xlLmxvZygpXG4gICAgLy8gY2FtZXJhIG5lZWQgdG8gYmUgYWRqdXN0ZWQgYWNjb3JkaW5nIHRvXG4gICAgLy8gcmVuZGVyZXIgZGltZW5zaW9uc1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHRoaXMudmlkZW9XaWR0aCAvIHRoaXMudmlkZW9IZWlnaHQ7XG4gICAgaWYgKHRoaXMuY2FtZXJhLnR5cGUgPT0gJ09ydGhvZ3JhcGhpY0NhbWVyYScpIHtcbiAgICAgIHRoaXMuY2FtZXJhLnRvcCA9IHRoaXMudmlkZW9IZWlnaHQgLyAyXG4gICAgICB0aGlzLmNhbWVyYS5ib3R0b20gPSAtdGhpcy52aWRlb0hlaWdodCAvIDJcbiAgICAgIHRoaXMuY2FtZXJhLmxlZnQgPSAtdGhpcy52aWRlb1dpZHRoIC8gMlxuICAgICAgdGhpcy5jYW1lcmEucmlnaHQgPSB0aGlzLnZpZGVvV2lkdGggLyAyICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IGNhbWVyYURpc3RhbmNlKHRoaXMudmlkZW9IZWlnaHQsIHRoaXMuZm92KTtcbiAgICB9XG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBpZiAodGhpcy5jb250cm9scykge1xuICAgICAgdGhpcy5jb250cm9scy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZXNpemVSZW5kZXJlclRvRGlzcGxheVNpemUoKSkge1xuICAgICAgXG4gICAgICAvLyBmYWNlbWFzayBuZWVkcyB0byBzY2FsZSBmYWNlcyBhY2NvcmRpbmcgdG8gXG4gICAgICAvLyByZW5kZXJlciBkaW1lbnNpb25zXG4gICAgICB0aGlzLmZhY2VNYXNrLnVwZGF0ZURpbWVuc2lvbnMoXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC53aWR0aCwgXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHRcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuZ2xhc3Nlcy51cGRhdGVEaW1lbnNpb25zKFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGgsXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQsXG4gICAgICApXG5cbiAgICAgIC8vIHVwZGF0ZSB2aWRlbyB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICB0aGlzLnZpZGVvQmcudXBkYXRlRGltZW5zaW9ucyhcbiAgICAgICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LndpZHRoLCBcbiAgICAgICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LmhlaWdodFxuICAgICAgKTtcblxuICAgICAgdGhpcy51cGRhdGVDYW1lcmEoKTtcbiAgICAgIFxuICAgIH1cblxuXG4gICAgLy8gdXBkYXRlIHZpZGVvIGJhY2tncm91bmRcbiAgICB0aGlzLnZpZGVvQmcudXBkYXRlKCk7XG4vLyB1cGRhdGUgZ2xhc3Nlc1xuICAgIHRoaXMuZ2xhc3Nlcy51cGRhdGUoKTtcbiAgICAvLyB1cGRhdGUgZmFjZXMgbWFza1xuICAgIHRoaXMuZmFjZU1hc2sudXBkYXRlKCk7XG5cbiAgICBcblxuICAgIC8vIHJlbmRlciBzY2VuZVxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgfVxuXG4gIHJlc2l6ZSh2aWRlb1dpZHRoLCB2aWRlb0hlaWdodCkge1xuICAgIHRoaXMudmlkZW9XaWR0aCA9IHZpZGVvV2lkdGg7XG4gICAgdGhpcy52aWRlb0hlaWdodCA9IHZpZGVvSGVpZ2h0O1xuICB9XG5cbiAgb25MYW5kbWFya3MoaW1hZ2UsIGxhbmRtYXJrcykge1xuICAgIGlmIChpbWFnZSAmJiBsYW5kbWFya3MpIHtcbiAgICAgIHRoaXMudmlkZW9CZy5zZXRJbWFnZShpbWFnZSk7XG4gICAgICB0aGlzLmZhY2VNYXNrLnVwZGF0ZUxhbmRtYXJrcyhsYW5kbWFya3MpO1xuICAgICAgdGhpcy5nbGFzc2VzLnVwZGF0ZUxhbmRtYXJrcyhsYW5kbWFya3MpO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJUSFJFRSIsIkZhY2VNYXNrIiwiR2xhc3NlcyIsIlZpZGVvQmFja2dyb3VuZCIsIk9yYml0Q29udHJvbHMiLCJjYW1lcmFEaXN0YW5jZSIsImhlaWdodCIsImZvdiIsIk1hdGgiLCJ0YW4iLCJQSSIsIlNjZW5lTWFuYWdlciIsImNhbnZhcyIsImRlYnVnIiwidXNlT3J0aG8iLCJzY2VuZSIsIlNjZW5lIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiZGV2aWNlUGl4ZWxSYXRpb24iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiYnVpbGRDYW1lcmEiLCJidWlsZENvbnRyb2xzIiwiYnVpbGRWaWRlb0JnIiwiYnVpbGRGYWNlTWFzayIsImJ1aWxkR2xhc3NlcyIsInZpZGVvQmciLCJkb21FbGVtZW50Iiwid2lkdGgiLCJmYWNlTWFzayIsImdsYXNzZXMiLCJjb250cm9scyIsImNhbWVyYSIsInVwZGF0ZSIsImJ1aWxkT3J0aG9DYW1lcmEiLCJidWlsZFBlcnNwZWN0aXZlQ2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJ6IiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJjb25zb2xlIiwibG9nIiwidmlkZW9XaWR0aCIsImNsaWVudFdpZHRoIiwidmlkZW9IZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsIm5lZWRSZXNpemUiLCJzZXRTaXplIiwiYXNwZWN0IiwidHlwZSIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJyZXNpemVSZW5kZXJlclRvRGlzcGxheVNpemUiLCJ1cGRhdGVEaW1lbnNpb25zIiwidXBkYXRlQ2FtZXJhIiwicmVuZGVyIiwiaW1hZ2UiLCJsYW5kbWFya3MiLCJzZXRJbWFnZSIsInVwZGF0ZUxhbmRtYXJrcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/three_components/scene_manager.js\n");

/***/ })

});