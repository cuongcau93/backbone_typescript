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
            _this.el = '.menu';
            _this = _super.call(this, option) || this;
            //this.collection = model;
            //this.template = _.template(MenuMeetingRequestView.typeOfMeeting);
            _this.onClickTypeOfMeeting();
            return _this;
        }
        ;
        MenuMeetingRequestView.prototype.events = function () {
            return {
                "click .typeOfMeeting": "onClickTypeOfMeeting",
                "click .applicantInfomation": "onClickApplicantInfomation",
                "click .agenda": "onClickAgenda",
                "click .otherAttendees": "onClickOtherAttendees",
                "click .next": "onClickNext",
                "click .back": "onClickBack"
            };
        };
        MenuMeetingRequestView.prototype.initialize = function () {
            this.$content = this.$('.content');
            this.$contentTypeOfmeeting = this.$('.content-typeOfmeeting');
        };
        MenuMeetingRequestView.prototype.render = function () {
            this.$content.append(this.template);
            return this;
        };
        MenuMeetingRequestView.prototype.onClickTypeOfMeeting = function () {
            this.template = _.template(MenuMeetingRequestView.typeOfMeeting);
            this.$content
                .addClass('contentTypeOfMeeting')
                .removeClass('contentApplicantInfomation contentAgenda contentOtherAttendees');
            if (this.$content.hasClass('uploadTypeOfMeeting') == false) {
                this.$content
                    .addClass('uploadTypeOfMeeting');
                this.render();
            }
            $(".typeOfMeeting").css("background-color", "red");
            $(".applicantInfomation").css("background-color", "#337ab7");
            $(".agenda").css("background-color", "#337ab7");
            $(".otherAttendees").css("background-color", "#337ab7");
            $('.content-TypeOfMeeting').show();
            $('.content-ApplicantInfomation').hide();
            $('.content-Agenda').hide();
            $('.content-otherAttendees').hide();
        };
        MenuMeetingRequestView.prototype.onClickApplicantInfomation = function () {
            if (this.$content.hasClass('contentApplicantInfomation')) {
                this.template = _.template(MenuMeetingRequestView.applicantInfomation);
                this.$content
                    .removeClass('contentAgenda contentOtherAttendees');
                if (this.$content.hasClass('uploadApplicantInfomation') == false) {
                    this.$content
                        .addClass('uploadApplicantInfomation');
                    this.render();
                }
                $(".applicantInfomation").css("background-color", "red");
                $(".agenda").css("background-color", "#337ab7");
                $(".otherAttendees").css("background-color", "#337ab7");
                $('.content-TypeOfMeeting').hide();
                $('.content-ApplicantInfomation').show();
                $('.content-Agenda').hide();
                $('.content-otherAttendees').hide();
            }
        };
        MenuMeetingRequestView.prototype.onClickAgenda = function () {
            if (this.$content.hasClass('contentAgenda')) {
                this.template = _.template(MenuMeetingRequestView.agenda);
                this.$content
                    .removeClass('contentOtherAttendees');
                if (this.$content.hasClass('uploadContentAgenda') == false) {
                    this.$content
                        .addClass('uploadContentAgenda');
                    this.render();
                }
                $(".agenda").css("background-color", "red");
                $(".otherAttendees").css("background-color", "#337ab7");
                $('.content-TypeOfMeeting').hide();
                $('.content-ApplicantInfomation').hide();
                $('.content-Agenda').show();
                $('.content-otherAttendees').hide();
            }
        };
        MenuMeetingRequestView.prototype.onClickOtherAttendees = function () {
            if (this.$content.hasClass('contentOtherAttendees')) {
                this.template = _.template(MenuMeetingRequestView.otherAttendees);
                if (this.$content.hasClass('uploadOtherAttendees') == false) {
                    this.$content
                        .addClass('uploadOtherAttendees');
                    this.render();
                }
                $(".otherAttendees").css("background-color", "red");
                $('.content-TypeOfMeeting').hide();
                $('.content-ApplicantInfomation').hide();
                $('.content-Agenda').hide();
                $('.content-otherAttendees').show();
            }
        };
        MenuMeetingRequestView.prototype.onClickNext = function () {
            if (this.$content.hasClass('contentAgenda')) {
                this.$content
                    .addClass('contentOtherAttendees');
                this.onClickOtherAttendees();
            }
            else if (this.$content.hasClass('contentApplicantInfomation')) {
                this.$content
                    .addClass('contentAgenda');
                this.onClickAgenda();
            }
            else if (this.$content.hasClass('contentTypeOfMeeting')) {
                this.$content
                    .addClass('contentApplicantInfomation');
                this.onClickApplicantInfomation();
            }
        };
        MenuMeetingRequestView.prototype.onClickBack = function () {
            if (this.$content.hasClass('contentOtherAttendees')) {
                this.onClickAgenda();
                this.$content
                    .removeClass('contentOtherAttendees');
            }
            else if (this.$content.hasClass('contentAgenda')) {
                this.onClickApplicantInfomation();
                this.$content
                    .removeClass('contentAgenda');
            }
            else if (this.$content.hasClass('contentApplicantInfomation')) {
                this.onClickTypeOfMeeting();
                this.$content
                    .removeClass('contentApplicantInfomation');
            }
        };
        MenuMeetingRequestView.typeOfMeeting = "\n\t\t\t\t<div class = \"content-TypeOfMeeting\">\n        \t\t\t<h1> Hello typeOfMeeting </h1>\n\t\t\t\t</div>\n\t\t\t";
        MenuMeetingRequestView.applicantInfomation = "\n\t\t\t\t<div class = \"content-ApplicantInfomation\">\n\t\t\t\t\t<h1> Hello Applicant Infomation </h1>\n\t\t\t\t</div>\n\t\t\t";
        MenuMeetingRequestView.agenda = "\n\t\t\t\t<div class = \"content-Agenda\">\n\t\t\t\t\t<h1> Hello Agenda </h1>\n\t\t\t\t</div>\n\t\t\t";
        MenuMeetingRequestView.otherAttendees = "\n\t\t\t\t<div class = \"content-otherAttendees\">\n\t\t\t\t\t<h1> Hello otherAttendees </h1>\n\t\t\t\t</div>\n\t\t\t";
        return MenuMeetingRequestView;
    }(Backbone.View));
    app.MenuMeetingRequestView = MenuMeetingRequestView;
    // export class MenuMeetingRequestsView extends Backbone.View<app.MenuMeetingRequest>{
    // 	//template: any;
    // 	template: (...data: any[]) => string;
    // 	constructor(){
    // 		super({
    // 		});
    // 	};
    // 	initialize(){
    // 		let menuMeetingRequest1 = new MenuMeetingRequest({
    // 			id: 1,
    // 			name: 'Type of Meeting',
    // 		});
    // 		let menuMeetingRequest2 = new MenuMeetingRequest({
    // 			id: 2,
    // 			name: 'Applicant Infomation',
    // 		});
    // 		let menuMeetingRequest3 = new MenuMeetingRequest({
    // 			id: 3,
    // 			name: 'Agenda',
    // 		});
    //         let menuMeetingRequest4 = new MenuMeetingRequest({
    // 			id: 4,
    // 			name: 'Other Attendees',
    // 		});
    // 		var data = [];
    // 		data.push(menuMeetingRequest1, menuMeetingRequest2, menuMeetingRequest3, menuMeetingRequest4);
    // 		this.collection = new MenuMeetingRequests(data);
    // 		console.log(this.collection.models);
    // 		this.render();
    // 	}
    // 	render() {
    // 		var self = this;
    // 		this.$el.html('');
    // 		_.each(this.collection.toArray(), function(todo) {
    // 			self.$el.append((new MenuMeetingRequestView({model: todo})).render().$el);
    // 		});
    // 		return this;
    // 	}
    // }
})(app || (app = {}));
//# sourceMappingURL=menuMeetingRequest-view.js.map