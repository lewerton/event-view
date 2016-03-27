System.register(['angular2/core', 'angular2/router', '../../common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1;
    var VehicleButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            VehicleButtonComponent = (function () {
                function VehicleButtonComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VehicleButtonComponent.prototype, "vehicle", void 0);
                VehicleButtonComponent = __decorate([
                    core_1.Component({
                        selector: 'ev-vehicle-button',
                        templateUrl: './app/^vehicles/vehicle-button/vehicle-button.component.html',
                        styles: ["\n    .mdl-card__title-text {font-size: 16px;}\n    .mdl-card {min-height: 60px;}\n  "],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [common_1.InitCapsPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VehicleButtonComponent);
                return VehicleButtonComponent;
            }());
            exports_1("VehicleButtonComponent", VehicleButtonComponent);
        }
    }
});
//# sourceMappingURL=vehicle-button.component.js.map