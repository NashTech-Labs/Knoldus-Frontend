"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var list_color_service_1 = require("./list-color.service");
var ListColorsComponent = (function () {
    function ListColorsComponent(listService) {
        this.listService = listService;
        this.colorList = [];
    }
    ListColorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.listService.getColorsList().subscribe(function (data) { return _this.colorList = data; });
    };
    return ListColorsComponent;
}());
ListColorsComponent = __decorate([
    core_1.Component({
        selector: 'list-color-comp',
        templateUrl: './list-colors.component.html'
    }),
    __metadata("design:paramtypes", [list_color_service_1.ListColorService])
], ListColorsComponent);
exports.ListColorsComponent = ListColorsComponent;
//# sourceMappingURL=list-colors.component.js.map