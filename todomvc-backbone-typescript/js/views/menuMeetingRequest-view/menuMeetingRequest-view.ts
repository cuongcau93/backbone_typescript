module app {

	'use strict';

	export class MenuMeetingRequestView extends Backbone.View<Backbone.Model>{
		
		$content: JQuery;
		$contentTypeOfmeeting: JQuery;
		
		template: (...data: any[]) => string;
		private static typeOfMeeting = `
				<div class = "contentTypeOfMeeting">
        			<h1 class="aaa"> Hello typeOfMeeting </h1>
				</div>
			`
		private static applicantInfomation = `
        		<h1 class="aaa"> Hello Applicant Infomation </h1>
			`
		private static agenda = `
				<h1 class="aaa"> Hello Agenda </h1>
			`
		private static otherAttendees = `
				<h1 class="aaa"> Hello otherAttendees </h1>
			`

		constructor(option?){	

			this.el = '.menu';
			super(option);
			//this.collection = model;
			//this.template = _.template(MenuMeetingRequestView.typeOfMeeting);
			this.onClickTypeOfMeeting();

		};

		events(): Backbone.EventsHash{
			return{
				"click .typeOfMeeting":"onClickTypeOfMeeting",
				"click .applicantInfomation":"onClickApplicantInfomation",
				"click .agenda":"onClickAgenda",
				"click .otherAttendees":"onClickOtherAttendees",
				"click .next":"onClickNext",
				"click .back":"onClickBack"
			}
		}

		initialize(){
			this.$content = this.$('.content');
			this.$contentTypeOfmeeting = this.$('.content-typeOfmeeting');
		}

		render(){
			this.$content.append(this.template);
			return this;
		}

		onClickTypeOfMeeting(){

			this.template = _.template(MenuMeetingRequestView.typeOfMeeting);
			this.$content
			 		.addClass('contentTypeOfMeeting')

			this.$content.show();

			if(this.$content.hasClass('uploadTypeOfMeeting') == false){
				this.$content
			 		.addClass('uploadTypeOfMeeting');
				this.render();
			}
			

		}

		onClickApplicantInfomation(){
				this.template = _.template(MenuMeetingRequestView.applicantInfomation);
				this.$content
				 		.addClass('contentApplicantInfomation')
				this.render();
		}

		onClickAgenda(){
			this.template = _.template(MenuMeetingRequestView.agenda);
			this.$content
			 		.addClass('contentAgenda')
			this.render();
		}
		
		onClickOtherAttendees(){
			this.template = _.template(MenuMeetingRequestView.otherAttendees);
			this.$content
			 		.addClass('contentOtherAttendees')
			this.render();
		}

		onClickNext(){
			if(this.$content.hasClass('contentAgenda')){
				this.onClickOtherAttendees();
			}
			else if(this.$content.hasClass('contentApplicantInfomation')){
				this.onClickAgenda();
			}
			else if(this.$content.hasClass('contentTypeOfMeeting')){
				this.onClickApplicantInfomation();
			}
		}

		onClickBack(){
			if(this.$content.hasClass('contentOtherAttendees')){
				this.onClickAgenda();
				this.$content
							.removeClass('contentOtherAttendees');
			}
			else if(this.$content.hasClass('contentAgenda')){
				this.onClickApplicantInfomation();
				this.$content
							.removeClass('contentAgenda');
			}
			else if(this.$content.hasClass('contentApplicantInfomation')){
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