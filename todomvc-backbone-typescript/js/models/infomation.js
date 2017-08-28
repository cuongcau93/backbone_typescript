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
    var Infomation = (function (_super) {
        __extends(Infomation, _super);
        function Infomation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Infomation.prototype.defaults = function () {
            return {
                color: '',
                title: ''
            };
        };
        ;
        return Infomation;
    }(Backbone.Model));
    app.Infomation = Infomation;
})(app || (app = {}));
//# sourceMappingURL=infomation.js.map