(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
        /***/ "./src/app/home/components/aiu/aiu.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/home/components/aiu/aiu.component.ts ***!
          \******************************************************/
        /*! exports provided: AiuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AiuComponent", function () { return AiuComponent; });
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var _core_services_costo_indirecto_costo_indirecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core/services/costo-indirecto/costo-indirecto.service */ "./src/app/core/services/costo-indirecto/costo-indirecto.service.ts");
            /* harmony import */ var src_app_core_services_proyecto_proyecto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/proyecto/proyecto.service */ "./src/app/core/services/proyecto/proyecto.service.ts");
            /* harmony import */ var src_app_core_services_item_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/item/item.service */ "./src/app/core/services/item/item.service.ts");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/menu.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
            var _c0 = ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "more-button", 3, "matMenuTriggerFor"];
            var _c1 = ["xPosition", "before"];
            var _c2 = ["menu", "matMenu"];
            var _c3 = ["mat-menu-item", ""];
            var _c4 = [1, "dashboard-card-content"];
            var _c5 = ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"];
            var _c6 = ["matColumnDef", "item"];
            var _c7 = ["mat-header-cell", "", 4, "matHeaderCellDef"];
            var _c8 = ["mat-cell", "", 4, "matCellDef"];
            var _c9 = ["mat-footer-cell", "", 4, "matFooterCellDef"];
            var _c10 = ["matColumnDef", "percent"];
            var _c11 = ["matColumnDef", "cost"];
            var _c12 = ["mat-header-row", "", 4, "matHeaderRowDef"];
            var _c13 = ["mat-row", "", 4, "matRowDef", "matRowDefColumns"];
            var _c14 = ["mat-footer-row", "", 4, "matFooterRowDef"];
            var _c15 = ["mat-header-cell", ""];
            function AiuComponent_th_16_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", _c15);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Item ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }
            var _c16 = ["mat-cell", ""];
            function AiuComponent_td_17_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", _c16);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    var transaction_r159 = ctx.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", transaction_r159.item, " ");
                }
            }
            var _c17 = ["mat-footer-cell", ""];
            function AiuComponent_td_18_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", _c17);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Total ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }
            function AiuComponent_th_20_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", _c15);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Porcentaje ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }
            function AiuComponent_td_21_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", _c16);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "percent");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    var transaction_r160 = ctx.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, transaction_r160.percent), " ");
                }
            }
            function AiuComponent_td_22_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", _c17);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "percent");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r152.getTotalPercent()), " ");
                }
            }
            function AiuComponent_th_24_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", _c15);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cost ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }
            function AiuComponent_td_25_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", _c16);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    var transaction_r161 = ctx.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, transaction_r161.cost), " ");
                }
            }
            function AiuComponent_td_26_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", _c17);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r155.getTotalCost()), " ");
                }
            }
            var _c18 = ["mat-header-row", ""];
            function AiuComponent_tr_27_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", _c18);
                }
            }
            var _c19 = ["mat-row", ""];
            function AiuComponent_tr_28_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", _c19);
                }
            }
            var _c20 = ["mat-footer-row", ""];
            function AiuComponent_tr_29_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", _c20);
                }
            }
            var AiuComponent = /** @class */ (function () {
                function AiuComponent(costoIndirectoService, proyectoService, itemService) {
                    this.costoIndirectoService = costoIndirectoService;
                    this.proyectoService = proyectoService;
                    this.itemService = itemService;
                    this.displayedColumns = ['item', 'percent', 'cost'];
                    this.transactions = [];
                }
                /** Gets the total cost of all transactions. */
                AiuComponent.prototype.getTotalCost = function () {
                    return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
                };
                AiuComponent.prototype.getTotalPercent = function () {
                    return this.transactions.map(function (t) { return t.percent; }).reduce(function (acc, value) { return acc + value; }, 0);
                };
                AiuComponent.prototype.ngOnInit = function () {
                };
                AiuComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.proyectoService.project$
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (proyecto) {
                        _this.proyecto = proyecto;
                        return _this.costoIndirectoService.getCostoIndirectoByProyectoId(proyecto.id);
                    }))
                        .subscribe(function (costosIndirectos) {
                        _this.itemService.getCostoDirecto(_this.proyecto.id).subscribe(function (costo) {
                            _this.costoDirecto = costo;
                            _this.costosIndirectos = costosIndirectos;
                            costosIndirectos.forEach(function (c) {
                                var transaction = {
                                    item: c.descripcion,
                                    percent: c.porcentaje,
                                    cost: _this.costoDirecto * c.porcentaje
                                };
                                _this.transactions.push(transaction);
                            });
                            _this.data = _this.transactions.slice();
                        });
                    });
                };
                return AiuComponent;
            }());
            AiuComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AiuComponent, selectors: [["app-aiu"]], factory: function AiuComponent_Factory(t) { return new (t || AiuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_costo_indirecto_costo_indirecto_service__WEBPACK_IMPORTED_MODULE_2__["CostoIndirectoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_proyecto_proyecto_service__WEBPACK_IMPORTED_MODULE_3__["ProyectoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_item_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"])); }, consts: 30, vars: 5, template: function AiuComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-header");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " A.I.U ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", _c0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "more_vert");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-menu", _c1, _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", _c3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Expand");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", _c3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Remove");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card-content", _c4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "table", _c5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, _c6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AiuComponent_th_16_Template, 2, 0, "th", _c7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AiuComponent_td_17_Template, 2, 1, "td", _c8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AiuComponent_td_18_Template, 2, 0, "td", _c9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, _c10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AiuComponent_th_20_Template, 2, 0, "th", _c7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AiuComponent_td_21_Template, 3, 3, "td", _c8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AiuComponent_td_22_Template, 3, 3, "td", _c9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](23, _c11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AiuComponent_th_24_Template, 2, 0, "th", _c7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AiuComponent_td_25_Template, 3, 3, "td", _c8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AiuComponent_td_26_Template, 3, 3, "td", _c9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AiuComponent_tr_27_Template, 1, 0, "tr", _c12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AiuComponent_tr_28_Template, 1, 0, "tr", _c13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AiuComponent_tr_29_Template, 1, 0, "tr", _c14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        var _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r146);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.data);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](27);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](28);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](29);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matFooterRowDef", ctx.displayedColumns);
                    }
                }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatFooterRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%; }\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2FpdS9DOlxcVXNlcnNcXEFuZHJlcyBGZWxpcGVcXERvY3VtZW50c1xcT2JyYXNcXG9icmFzL3NyY1xcYXBwXFxob21lXFxjb21wb25lbnRzXFxhaXVcXGFpdS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2FpdS9haXUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudHIubWF0LWZvb3Rlci1yb3cge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfSJdfQ== */"] });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AiuComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                    args: [{
                            selector: 'app-aiu',
                            templateUrl: './aiu.component.html',
                            styleUrls: ['./aiu.component.scss']
                        }]
                }], function () { return [{ type: _core_services_costo_indirecto_costo_indirecto_service__WEBPACK_IMPORTED_MODULE_2__["CostoIndirectoService"] }, { type: src_app_core_services_proyecto_proyecto_service__WEBPACK_IMPORTED_MODULE_3__["ProyectoService"] }, { type: src_app_core_services_item_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] }]; }, null);
            /***/ 
        }),
        /***/ "./src/app/home/components/chapters/chapters.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/home/components/chapters/chapters.component.ts ***!
          \****************************************************************/
        /*! exports provided: ChaptersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChaptersComponent", function () { return ChaptersComponent; });
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_item_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/item/item.service */ "./src/app/core/services/item/item.service.ts");
            /* harmony import */ var src_app_core_services_proyecto_proyecto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/proyecto/proyecto.service */ "./src/app/core/services/proyecto/proyecto.service.ts");
            /* harmony import */ var src_app_core_services_capitulo_capitulo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/capitulo/capitulo.service */ "./src/app/core/services/capitulo/capitulo.service.ts");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
            var _c0 = ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"];
            var _c1 = ["matColumnDef", "codigo"];
            var _c2 = ["mat-header-cell", "", 4, "matHeaderCellDef"];
            var _c3 = ["mat-cell", "", 4, "matCellDef"];
            var _c4 = ["matColumnDef", "descripcion"];
            var _c5 = ["matColumnDef", "unidad"];
            var _c6 = ["matColumnDef", "cantidad"];
            var _c7 = ["matColumnDef", "precio"];
            var _c8 = ["matColumnDef", "parcial"];
            var _c9 = ["matColumnDef", "aporte"];
            var _c10 = ["mat-header-row", "", 4, "matHeaderRowDef"];
            var _c11 = ["mat-row", "", 4, "matRowDef", "matRowDefColumns"];
            var _c12 = ["mat-header-cell", ""];
            function ChaptersComponent_th_7_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", _c12);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " C\u00F3digo ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }
            var _c13 = ["mat-cell", ""];
            function ChaptersComponent_td_8_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", _c13);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    var item_r138 = ctx.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r138.numeroCapitulo, " ");
                }
            }
            function ChaptersComponent_th_10_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", _c12);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Descripci\u00F3n ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }
            function ChaptersComponent_td_11_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", _c13);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    var item_r139 = ctx.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r139.descripcion, " ");
                }
            }
            function ChaptersComponent_th_13_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", _c12);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Unidad ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }
            function ChaptersComponent_td_14_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", _c13);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    var item_r140 = ctx.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r140.unidad, " ");
                }
            }
            function ChaptersComponent_th_16_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", _c12);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cantidad ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }
            function ChaptersComponent_td_17_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", _c13);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    var item_r141 = ctx.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r141.cantidad, " ");
                }
            }
            function ChaptersComponent_th_19_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", _c12);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Valor Unitario ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }
            function ChaptersComponent_td_20_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", _c13);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    var item_r142 = ctx.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, item_r142.valorUnitario), " ");
                }
            }
            function ChaptersComponent_th_22_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", _c12);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Valor Parcial ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }
            function ChaptersComponent_td_23_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", _c13);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    var item_r143 = ctx.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, item_r143.valorUnitario * item_r143.cantidad), " ");
                }
            }
            function ChaptersComponent_th_25_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", _c12);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Aporte ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }
            function ChaptersComponent_td_26_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", _c13);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    var item_r144 = ctx.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r144.aporte, " ");
                }
            }
            var _c14 = ["mat-header-row", ""];
            function ChaptersComponent_tr_27_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", _c14);
                }
            }
            var _c15 = ["mat-row", ""];
            function ChaptersComponent_tr_28_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", _c15);
                }
            }
            var ChaptersComponent = /** @class */ (function () {
                function ChaptersComponent(itemService, proyectoService, capituloService) {
                    this.itemService = itemService;
                    this.proyectoService = proyectoService;
                    this.capituloService = capituloService;
                    this.items = [];
                    this.data = [];
                    this.displayedColumns = ['codigo', 'descripcion', 'unidad', 'cantidad', 'precio', 'parcial', 'aporte'];
                }
                ChaptersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.proyectoService.project$
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (proyecto) {
                        _this.proyecto = proyecto;
                        return _this.capituloService.getCapitulosByProyectoId(proyecto.id);
                    }))
                        .subscribe(function (capitulos) {
                        _this.capitulos = capitulos;
                        capitulos.forEach(function (c) { return _this.startData(c); });
                    }, function (error) {
                        console.log(error.error);
                    });
                };
                ChaptersComponent.prototype.startData = function (capitulo) {
                    var _this = this;
                    var itemCapitulo = {
                        id: 0,
                        descripcion: capitulo.descripcion,
                        aporte: '',
                        cantidad: null,
                        codigo: '',
                        proyectoId: this.proyecto.id,
                        unidad: '',
                        detalles: null,
                        valorUnitario: null,
                        numeroCapitulo: capitulo.numero,
                    };
                    this.items.push(itemCapitulo);
                    this.itemService.getItemByCapituloId(capitulo.id).subscribe(function (items) {
                        console.log(items);
                        items.forEach(function (i) {
                            i.valorParcial = i.valorUnitario * i.cantidad;
                            i.numeroCapitulo = Number(capitulo.id + "." + i.numeroCapitulo);
                            console.log(i);
                            _this.items.push(i);
                            _this.data = _this.items.slice();
                        });
                        console.log(_this.data);
                    }, function (error) {
                        console.error(error.error);
                    });
                };
                return ChaptersComponent;
            }());
            ChaptersComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChaptersComponent, selectors: [["app-chapters"]], factory: function ChaptersComponent_Factory(t) { return new (t || ChaptersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_item_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_proyecto_proyecto_service__WEBPACK_IMPORTED_MODULE_3__["ProyectoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_capitulo_capitulo_service__WEBPACK_IMPORTED_MODULE_4__["CapituloService"])); }, consts: 29, vars: 3, template: function ChaptersComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Capitulos ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", _c0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, _c1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ChaptersComponent_th_7_Template, 2, 0, "th", _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ChaptersComponent_td_8_Template, 2, 1, "td", _c3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, _c4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ChaptersComponent_th_10_Template, 2, 0, "th", _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ChaptersComponent_td_11_Template, 2, 1, "td", _c3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, _c5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ChaptersComponent_th_13_Template, 2, 0, "th", _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ChaptersComponent_td_14_Template, 2, 1, "td", _c3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, _c6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ChaptersComponent_th_16_Template, 2, 0, "th", _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ChaptersComponent_td_17_Template, 2, 1, "td", _c3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, _c7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ChaptersComponent_th_19_Template, 2, 0, "th", _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ChaptersComponent_td_20_Template, 3, 3, "td", _c3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, _c8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ChaptersComponent_th_22_Template, 2, 0, "th", _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ChaptersComponent_td_23_Template, 3, 3, "td", _c3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](24, _c9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ChaptersComponent_th_25_Template, 2, 0, "th", _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ChaptersComponent_td_26_Template, 2, 1, "td", _c3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ChaptersComponent_tr_27_Template, 1, 0, "tr", _c10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ChaptersComponent_tr_28_Template, 1, 0, "tr", _c11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.data);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](27);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵselect"](28);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
                    }
                }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2NoYXB0ZXJzL0M6XFxVc2Vyc1xcQW5kcmVzIEZlbGlwZVxcRG9jdW1lbnRzXFxPYnJhc1xcb2JyYXMvc3JjXFxhcHBcXGhvbWVcXGNvbXBvbmVudHNcXGNoYXB0ZXJzXFxjaGFwdGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9jaGFwdGVycy9jaGFwdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChaptersComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                    args: [{
                            selector: 'app-chapters',
                            templateUrl: './chapters.component.html',
                            styleUrls: ['./chapters.component.scss']
                        }]
                }], function () { return [{ type: src_app_core_services_item_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] }, { type: src_app_core_services_proyecto_proyecto_service__WEBPACK_IMPORTED_MODULE_3__["ProyectoService"] }, { type: src_app_core_services_capitulo_capitulo_service__WEBPACK_IMPORTED_MODULE_4__["CapituloService"] }]; }, null);
            /***/ 
        }),
        /***/ "./src/app/home/components/dashboard/dashboard.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/home/components/dashboard/dashboard.component.ts ***!
          \******************************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/grid-list.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
            /* harmony import */ var _aiu_aiu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../aiu/aiu.component */ "./src/app/home/components/aiu/aiu.component.ts");
            /* harmony import */ var _shared_components_table_cost_table_cost_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/table-cost/table-cost.component */ "./src/app/shared/components/table-cost/table-cost.component.ts");
            /* harmony import */ var _chapters_chapters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chapters/chapters.component */ "./src/app/home/components/chapters/chapters.component.ts");
            var _c0 = [1, "grid-container"];
            var _c1 = [1, "mat-h1"];
            var _c2 = ["cols", "2", "rowHeight", "350px"];
            var _c3 = [3, "colspan", "rowspan"];
            var _c4 = [1, "dashboard-card"];
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(breakpointObserver) {
                    this.breakpointObserver = breakpointObserver;
                    /** Based on the screen size, switch from standard to one column per row */
                    this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
                        var matches = _a.matches;
                        if (matches) {
                            return [
                                { title: 'Card 1', cols: 1, rows: 1 },
                                { title: 'Card 2', cols: 1, rows: 1 },
                                { title: 'Card 3', cols: 1, rows: 1 },
                                { title: 'Card 4', cols: 1, rows: 1 }
                            ];
                        }
                        return [
                            { title: 'Card 1', cols: 2, rows: 1 },
                            { title: 'Card 2', cols: 1, rows: 1 },
                            { title: 'Card 3', cols: 1, rows: 2 },
                            { title: 'Card 4', cols: 1, rows: 1 }
                        ];
                    }));
                }
                return DashboardComponent;
            }());
            DashboardComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], factory: function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); }, consts: 13, vars: 6, template: function DashboardComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", _c1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-list", _c2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile", _c3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", _c4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-aiu");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile", _c3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", _c4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-table-cost");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-grid-tile", _c3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", _c4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-chapters");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 2)("rowspan", 2);
                    }
                }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _aiu_aiu_component__WEBPACK_IMPORTED_MODULE_5__["AiuComponent"], _shared_components_table_cost_table_cost_component__WEBPACK_IMPORTED_MODULE_6__["TableCostComponent"], _chapters_chapters_component__WEBPACK_IMPORTED_MODULE_7__["ChaptersComponent"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px; }\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2Rhc2hib2FyZC9DOlxcVXNlcnNcXEFuZHJlcyBGZWxpcGVcXERvY3VtZW50c1xcT2JyYXNcXG9icmFzL3NyY1xcYXBwXFxob21lXFxjb21wb25lbnRzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuXG4ubW9yZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                            selector: 'app-dashboard',
                            templateUrl: './dashboard.component.html',
                            styleUrls: ['./dashboard.component.scss']
                        }]
                }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }]; }, null);
            /***/ 
        }),
        /***/ "./src/app/home/components/home/home.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/home/components/home/home.component.ts ***!
          \********************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/home/components/dashboard/dashboard.component.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], factory: function HomeComponent_Factory(t) { return new (t || HomeComponent)(); }, consts: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard");
                    }
                }, directives: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                            selector: 'app-home',
                            templateUrl: './home.component.html',
                            styleUrls: ['./home.component.scss']
                        }]
                }], function () { return []; }, null);
            /***/ 
        }),
        /***/ "./src/app/home/home-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/home/home-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: HomeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () { return HomeRoutingModule; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/home/components/home/home.component.ts");
            var routes = [
                {
                    path: '',
                    component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
                }
            ];
            var HomeRoutingModule = /** @class */ (function () {
                function HomeRoutingModule() {
                }
                return HomeRoutingModule;
            }());
            HomeRoutingModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
            HomeRoutingModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[
                        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                    ],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                    args: [{
                            imports: [
                                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                            ],
                            exports: [
                                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                            ]
                        }]
                }], null, null);
            /***/ 
        }),
        /***/ "./src/app/home/home.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/home/home.module.ts ***!
          \*************************************/
        /*! exports provided: HomeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function () { return HomeModule; });
            /* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../material/material.module */ "./src/app/material/material.module.ts");
            /* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/home/components/home/home.component.ts");
            /* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/home/components/dashboard/dashboard.component.ts");
            /* harmony import */ var _components_chapters_chapters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chapters/chapters.component */ "./src/app/home/components/chapters/chapters.component.ts");
            /* harmony import */ var _components_aiu_aiu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/aiu/aiu.component */ "./src/app/home/components/aiu/aiu.component.ts");
            var HomeModule = /** @class */ (function () {
                function HomeModule() {
                }
                return HomeModule;
            }());
            HomeModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeModule });
            HomeModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
                        _material_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]
                    ]] });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _components_chapters_chapters_component__WEBPACK_IMPORTED_MODULE_7__["ChaptersComponent"], _components_aiu_aiu_component__WEBPACK_IMPORTED_MODULE_8__["AiuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]] });
            /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HomeModule, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
                    args: [{
                            declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _components_chapters_chapters_component__WEBPACK_IMPORTED_MODULE_7__["ChaptersComponent"], _components_aiu_aiu_component__WEBPACK_IMPORTED_MODULE_8__["AiuComponent"]],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                                _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
                                _material_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]
                            ]
                        }]
                }], null, null);
            /***/ 
        })
    }]);
//# sourceMappingURL=home-home-module-es2015.js.map
//# sourceMappingURL=home-home-module-es5.js.map
//# sourceMappingURL=home-home-module-es5.js.map