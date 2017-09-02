module app {
	
		'use strict';
	
		export class MenuMeetingRequestView extends Backbone.View<Backbone.Model>{
	
			$content: JQuery;
			$arrowApplicantInfomation: JQuery;
			$arrowAgenda: JQuery;
			$arrowOtherAttendees: JQuery;
			$contentTypeOfmeeting: JQuery;
	
			 
			template: (...data: any[]) => string;
	
			private static typeOfMeeting = `
					<div class = "content-TypeOfMeeting">
						<h1> Hello typeOfMeeting </h1>
					</div>
				`
			private static applicantInfomation = `
					<div class = "content-ApplicantInfomation">
						<h1> Hello Applicant Infomation </h1>
					</div>
				`
			private static agenda = `
					<div class = "content-Agenda">
						<h1> Hello Agenda </h1>
					</div>
				`
			private static otherAttendees = `
					<div class = "content-otherAttendees">
						<h1> Hello otherAttendees </h1>
					</div>
				`
	
			constructor(option?) {
	
				super({
					el : '.menu',
				});
				this.onClickTypeOfMeeting();
	
			};
	
			events(): Backbone.EventsHash {
	
				return {
					"click .typeOfMeeting": "onClickTypeOfMeeting",
					"click .applicantInfomation": "onClickApplicantInfomation",
					"click .agenda": "onClickAgenda",
					"click .otherAttendees": "onClickOtherAttendees",
					"click .next": "onClickNext",
					"click .back": "onClickBack"
				}
				
			}
	
			initialize() {
				
				this.$content = this.$('.content');
				this.$contentTypeOfmeeting = this.$('.content-TypeOfMeeting');
				this.$arrowApplicantInfomation = this.$('.arrow-applicantInfomation');
				this.$arrowAgenda = this.$('.arrow-agenda');
				this.$arrowOtherAttendees = this.$('.arrow-otherAttendees');
			}
	
			render() {
	
				this.$content.append(this.template);
				return this;
			
			}
	
			onClickTypeOfMeeting() {
	
				this.template = _.template(MenuMeetingRequestView.typeOfMeeting);
				this.$content
					.addClass('contentTypeOfMeeting')
					.removeClass('contentApplicantInfomation contentAgenda contentOtherAttendees');
	
				this.$arrowAgenda.removeClass('active');
				this.$arrowOtherAttendees.removeClass('active');
				  
				this.$arrowApplicantInfomation.removeClass('active');
	
				if (this.$content.hasClass('uploadTypeOfMeeting') == false) {
					this.$content
						.addClass('uploadTypeOfMeeting');
					this.render();
				}
	
				$(".typeOfMeeting").css({"background-color": "#4c7baa", "color":"white"});
				$(".arrow-start:after").css("border-left-color","#005fbf");
	
				$(".applicantInfomation").css({"background-color": "#9B9B9B", "color":"black"});
				$(".agenda").css({"background-color": "#9B9B9B", "color":"black"});
				$(".otherAttendees").css({"background-color": "#9B9B9B", "color":"black"});
	
				$('.content-TypeOfMeeting').show();
				$('.content-ApplicantInfomation').hide();
				$('.content-Agenda').hide();
				$('.content-otherAttendees').hide();
	
			}
	
			onClickApplicantInfomation() {
	
				if (this.$content.hasClass('contentApplicantInfomation')) {
					this.template = _.template(MenuMeetingRequestView.applicantInfomation);
					this.$content
						.removeClass('contentAgenda contentOtherAttendees');
					  this.$arrowApplicantInfomation.addClass('active');
					this.$arrowAgenda.removeClass('active');
					this.$arrowOtherAttendees.removeClass('active');
	
					if (this.$content.hasClass('uploadApplicantInfomation') == false) {
						this.$content
							.addClass('uploadApplicantInfomation');
						this.render();
					}
	
					$(".applicantInfomation").css({"background-color": "#4c7baa", "color":"white"});
					$(".agenda").css({"background-color": "#9B9B9B", "color":"black"});
					$(".otherAttendees").css({"background-color": "#9B9B9B", "color":"black"});
	
					$('.content-TypeOfMeeting').hide();
					$('.content-ApplicantInfomation').show();
					$('.content-Agenda').hide();
					$('.content-otherAttendees').hide();
	
				}
			}
	
			onClickAgenda() {
	
				if (this.$content.hasClass('contentAgenda')) {
					this.template = _.template(MenuMeetingRequestView.agenda);
					this.$content
						.removeClass('contentOtherAttendees');
					this.$arrowOtherAttendees.removeClass('active');
					 this.$arrowAgenda.addClass('active');
					if (this.$content.hasClass('uploadContentAgenda') == false) {
						this.$content
							.addClass('uploadContentAgenda');
						this.render();
					}
	
					$(".agenda").css({"background-color": "#4c7baa", "color":"white"});
					$(".otherAttendees").css({"background-color": "#9B9B9B", "color":"black"});
	
					$('.content-TypeOfMeeting').hide();
					$('.content-ApplicantInfomation').hide();
					$('.content-Agenda').show();
					$('.content-otherAttendees').hide();
	
				}
	
			}
	
			onClickOtherAttendees() {
	
				if (this.$content.hasClass('contentOtherAttendees')) {
					this.template = _.template(MenuMeetingRequestView.otherAttendees);
					this.$arrowOtherAttendees.addClass('active');
					if (this.$content.hasClass('uploadOtherAttendees') == false) {
						this.$content
							.addClass('uploadOtherAttendees');
						this.render();
					}
					$(".otherAttendees").css({"background-color": "#4c7baa", "color":"white"});
	
					$('.content-TypeOfMeeting').hide();
					$('.content-ApplicantInfomation').hide();
					$('.content-Agenda').hide();
					$('.content-otherAttendees').show();
	
				}
			}
	
			onClickNext() {
				
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
				
			}
	
			onClickBack() {
	
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
						.removeClass('contentApplicantInfomation')
				}
	
			}
	
		}
	
	
	
	
	
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
	}