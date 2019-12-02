(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-item-module"], {
        /***/ "./src/app/item/components/item/item.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/item/components/item/item.component.ts ***!
          \********************************************************/
        /*! exports provided: ItemComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function () { return ItemComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
            var _c0 = [3, "formGroup"];
            var _c1 = [1, "row"];
            var _c2 = [1, "col"];
            var _c3 = ["formControlName", "codigo", "matInput", "", "type", "text"];
            var _c4 = ["formControlName", "descripcion", "matInput", "", "type", "text"];
            var _c5 = ["formControlName", "unidad", "matInput", "", "type", "text"];
            var _c6 = ["formControlName", "cantidad", "matInput", "", "type", "number"];
            var ItemComponent = /** @class */ (function () {
                function ItemComponent(formBuilder) {
                    this.formBuilder = formBuilder;
                    this.buildForm();
                }
                ItemComponent.prototype.ngOnInit = function () {
                };
                ItemComponent.prototype.buildForm = function () {
                    this.form = this.formBuilder.group({
                        codigo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                        descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                        unidad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                        cantidad: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                        aporte: [0.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    });
                };
                return ItemComponent;
            }());
            ItemComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemComponent, selectors: [["app-item"]], factory: function ItemComponent_Factory(t) { return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); }, consts: 26, vars: 1, template: function ItemComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", _c0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Item ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", _c1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", _c3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", _c1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", _c4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", _c1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", _c5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", _c1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", _c6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", _c1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", _c6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
                    }
                }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                            selector: 'app-item',
                            templateUrl: './item.component.html',
                            styleUrls: ['./item.component.scss']
                        }]
                }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null);
            /***/ 
        }),
        /***/ "./src/app/item/item-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/item/item-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: ItemRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRoutingModule", function () { return ItemRoutingModule; });
            /* harmony import */ var _components_item_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/item/item.component */ "./src/app/item/components/item/item.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
            var routes = [
                {
                    path: 'item',
                    component: _components_item_item_component__WEBPACK_IMPORTED_MODULE_0__["ItemComponent"]
                }
            ];
            var ItemRoutingModule = /** @class */ (function () {
                function ItemRoutingModule() {
                }
                return ItemRoutingModule;
            }());
            ItemRoutingModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ItemRoutingModule });
            ItemRoutingModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ItemRoutingModule_Factory(t) { return new (t || ItemRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ItemRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ItemRoutingModule, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                    args: [{
                            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                        }]
                }], null, null);
            /***/ 
        }),
        /***/ "./src/app/item/item.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/item/item.module.ts ***!
          \*************************************/
        /*! exports provided: ItemModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemModule", function () { return ItemModule; });
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
            /* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../material/material.module */ "./src/app/material/material.module.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
            /* harmony import */ var _item_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-routing.module */ "./src/app/item/item-routing.module.ts");
            /* harmony import */ var _components_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/item/item.component */ "./src/app/item/components/item/item.component.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            var ItemModule = /** @class */ (function () {
                function ItemModule() {
                }
                return ItemModule;
            }());
            ItemModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ItemModule });
            ItemModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ItemModule_Factory(t) { return new (t || ItemModule)(); }, imports: [[
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _item_routing_module__WEBPACK_IMPORTED_MODULE_4__["ItemRoutingModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                        _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"]
                    ]] });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ItemModule, { declarations: [_components_item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _item_routing_module__WEBPACK_IMPORTED_MODULE_4__["ItemRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"]] });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ItemModule, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
                    args: [{
                            declarations: [_components_item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"]],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                                _item_routing_module__WEBPACK_IMPORTED_MODULE_4__["ItemRoutingModule"],
                                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                                _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"]
                            ]
                        }]
                }], null, null);
            /***/ 
        })
    }]);
//# sourceMappingURL=item-item-module-es2015.js.map
//# sourceMappingURL=item-item-module-es5.js.map
//# sourceMappingURL=item-item-module-es5.js.map