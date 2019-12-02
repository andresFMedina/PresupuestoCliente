(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
        /***/ "./src/app/core/services/capitulo/capitulo.service.ts": 
        /*!************************************************************!*\
          !*** ./src/app/core/services/capitulo/capitulo.service.ts ***!
          \************************************************************/
        /*! exports provided: CapituloService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapituloService", function () { return CapituloService; });
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
            var CapituloService = /** @class */ (function () {
                function CapituloService(http) {
                    this.http = http;
                    this.urlApi = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].urlApi + "/Capitulo";
                }
                CapituloService.prototype.getCapitulosByProyectoId = function (proyectoId) {
                    return this.http.get(this.urlApi + "?proyectoId=" + proyectoId);
                };
                CapituloService.prototype.getCapituloById = function (id) {
                    return this.http.get(this.urlApi + "/" + id);
                };
                CapituloService.prototype.postCapitulo = function (capitulo) {
                    return this.http.post(this.urlApi, capitulo);
                };
                CapituloService.prototype.putCapitulo = function (capitulo) {
                    return this.http.put(this.urlApi + "/" + capitulo.id, capitulo);
                };
                return CapituloService;
            }());
            CapituloService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CapituloService, factory: function CapituloService_Factory(t) { return new (t || CapituloService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); }, providedIn: 'root' });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CapituloService, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
                    args: [{
                            providedIn: 'root'
                        }]
                }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null);
            /***/ 
        })
    }]);
//# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map
//# sourceMappingURL=common-es5.js.map