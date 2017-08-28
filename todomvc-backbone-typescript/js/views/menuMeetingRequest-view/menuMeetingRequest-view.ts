module app {

	'use strict';

	export class MenuMeetingRequestView extends Backbone.View<app.MenuMeetingRequest>{
		
		template: (...data: any[]) => string;
		private static menu = `
        			<span class = "<%= id %>"><%= name %> </span>
			`

		constructor(option?){	

            this.tagName = 'a';
            this.className='btn btn-primary';
			super(option);
			console.log(option);
			//this.collection = model;
			this.template = _.template(MenuMeetingRequestView.menu);
			this.render();
		
		};

		events(): Backbone.EventsHash{
			return{
				"click .1":"onClickTypeOfMeeting",
				"click .2":"onClickApplicantInfomation",
				"click .3":"onClickAgenda",
				"click .4":"onClickOtherAttendees",
			}
		}

		render(){
			
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		
		}

		onClickTypeOfMeeting(){
			
		}
	}

	export class MenuMeetingRequestsView extends Backbone.View<app.MenuMeetingRequest>{
		
		//template: any;
		template: (...data: any[]) => string;

		constructor(){

			super({
			});

		};

		initialize(){
			 
			let menuMeetingRequest1 = new MenuMeetingRequest({
				id: 1,
				name: 'Type of Meeting',
			});

			let menuMeetingRequest2 = new MenuMeetingRequest({
				id: 2,
				name: 'Applicant Infomation',
			});

			let menuMeetingRequest3 = new MenuMeetingRequest({
				id: 3,
				name: 'Agenda',
			});

            let menuMeetingRequest4 = new MenuMeetingRequest({
				id: 4,
				name: 'Other Attendees',
			});

			var data = [];
			data.push(menuMeetingRequest1, menuMeetingRequest2, menuMeetingRequest3, menuMeetingRequest4);
			this.collection = new MenuMeetingRequests(data);
			console.log(this.collection.models);
			this.render();

		}

		render() {
			var self = this;
			
			this.$el.html('');
			
			_.each(this.collection.toArray(), function(todo) {
				self.$el.append((new MenuMeetingRequestView({model: todo})).render().$el);
			});

			return this;
			
		}

	
	}
}