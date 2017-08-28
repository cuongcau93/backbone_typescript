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
    var MenuMeetingRequestView = (function (_super) {
        __extends(MenuMeetingRequestView, _super);
        function MenuMeetingRequestView(option) {
            var _this = this;
            _this.className = 'menu-view';
            _this.tagName = 'a';
            _this.className = 'btn btn-primary';
            _this = _super.call(this, option) || this;
            console.log(option);
            //this.collection = model;
            _this.template = _.template(MenuMeetingRequestView.menu);
            _this.render();
            return _this;
        }
        ;
        MenuMeetingRequestView.prototype.events = function () {
            return {
                "click .1": "onClickTypeOfMeeting",
                "click .2": "onClickApplicantInfomation",
                "click .3": "onClickAgenda",
                "click .4": "onClickOtherAttendees",
            };
        };
        MenuMeetingRequestView.prototype.render = function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        };
        MenuMeetingRequestView.prototype.onClickTypeOfMeeting = function () {
            console.log('hello');
            this.$el.html("Hello world");
        };
        MenuMeetingRequestView.menu = "\n        \t\t\t<span class = \"<%= id %>\"><%= name %> </span>\n\t\t\t";
        return MenuMeetingRequestView;
    }(Backbone.View));
    app.MenuMeetingRequestView = MenuMeetingRequestView;
    var MenuMeetingRequestsView = (function (_super) {
        __extends(MenuMeetingRequestsView, _super);
        function MenuMeetingRequestsView() {
            return _super.call(this, {
                el: '.btn-breadcrumb'
            }) || this;
        }
        ;
        MenuMeetingRequestsView.prototype.initialize = function () {
            var menuMeetingRequest1 = new app.MenuMeetingRequest({
                id: 1,
                name: 'Type of Meeting',
            });
            var menuMeetingRequest2 = new app.MenuMeetingRequest({
                id: 2,
                name: 'Applicant Infomation',
            });
            var menuMeetingRequest3 = new app.MenuMeetingRequest({
                id: 3,
                name: 'Agenda',
            });
            var menuMeetingRequest4 = new app.MenuMeetingRequest({
                id: 4,
                name: 'Other Attendees',
            });
            var data = [];
            data.push(menuMeetingRequest1, menuMeetingRequest2, menuMeetingRequest3, menuMeetingRequest4);
            this.collection = new app.MenuMeetingRequests(data);
            console.log(this.collection.models);
            this.render();
        };
        MenuMeetingRequestsView.prototype.render = function () {
            var self = this;
            this.$el.html('');
            _.each(this.collection.toArray(), function (todo) {
                self.$el.append((new MenuMeetingRequestView({ model: todo })).render().$el);
            });
            return this;
        };
        return MenuMeetingRequestsView;
    }(Backbone.View));
    app.MenuMeetingRequestsView = MenuMeetingRequestsView;
})(app || (app = {}));
//# sourceMappingURL=menuMeetingRequest-view.js.map