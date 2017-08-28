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
    var MenuMeetingRequests = (function (_super) {
        __extends(MenuMeetingRequests, _super);
        function MenuMeetingRequests(models, options) {
            return _super.call(this, models, options) || this;
        }
        return MenuMeetingRequests;
    }(Backbone.Collection));
    app.MenuMeetingRequests = MenuMeetingRequests;
})(app || (app = {}));
//# sourceMappingURL=menuMeetingRequests.js.map