var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var app;
(function (app) {
    'use strict';
    ;
    var MenuMeetingRequest = (function (_super) {
        __extends(MenuMeetingRequest, _super);
        function MenuMeetingRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MenuMeetingRequest.prototype.defaults = function () {
            return {
                id: null,
                name: '',
                currentSelected: false
            };
        };
        ;
        return MenuMeetingRequest;
    }(Backbone.Model));
    app.MenuMeetingRequest = MenuMeetingRequest;
    var Vehicle = (function (_super) {
        __extends(Vehicle, _super);
        function Vehicle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Vehicle.prototype.summary = function () {
            return 'Vehicles arefor travelling';
        };
        return Vehicle;
    }(Backbone.Model));
    app.Vehicle = Vehicle;
    ;
    var l = new Vehicle();
    console.log(l.summary());
})(app || (app = {}));
//# sourceMappingURL=menuMeetingRequest.js.map