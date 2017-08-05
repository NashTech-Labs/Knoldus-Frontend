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
var userModel_1 = require("../models/userModel");
var log_user_service_1 = require("./log-user.service");
var LogUserComponent = (function () {
    function LogUserComponent(logService) {
        this.logService = logService;
        this.user = new userModel_1.User('', '');
    }
    LogUserComponent.prototype.logUserFun = function (value) {
        var _this = this;
        this.logService.logUserFun(this.user).subscribe(function (data) { return _this.responseToken = data; });
    };
    return LogUserComponent;
}());
LogUserComponent = __decorate([
    core_1.Component({
        selector: 'log-user-comp',
        templateUrl: './log-users.component.html'
    }),
    __metadata("design:paramtypes", [log_user_service_1.LogService])
], LogUserComponent);
exports.LogUserComponent = LogUserComponent;
//# sourceMappingURL=log-users.component.js.map