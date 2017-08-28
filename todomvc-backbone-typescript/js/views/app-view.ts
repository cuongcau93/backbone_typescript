/*global Backbone, jQuery, _, ENTER_KEY */


module app {

	'use strict';

	// export class AppView extends Backbone.View<app.Infomation> {

	// 	private static tpl = `
	// 		<div class="hero-unit">
	// 			<% for (let idx in infos){%>
	// 				<span class="item-type" style="background-color:<%= infos[idx].color%>;display:block; width: 15px; height: 15px;"> </span> <p> <%= infos[idx].title%> </p>
	// 			<%}%>
	// 		</div>
	// 	`

	// 	statsTemplate: (...data: any[]) => string;

	// 	constructor() {			

	// 		//this.el = '.container';
	// 		super({
	// 			el: '.container',
	// 		});

	// 	}

	// 	initialize() {
	// 		this.statsTemplate = _.template(AppView.tpl);
	// 		var infomation1 = new Infomation({
	// 			color:'yellow',
	// 			title: 'Financial news/press release'
	// 		});

	// 		var infomation2 = new Infomation({
	// 			color:'blue',
	// 			title: 'Board Meetings'
	// 		});
			
	// 		var infomation3 = new Infomation({
	// 			color:'green',
	// 			title: 'Results'
	// 		});

	// 		var data = [];
	// 		data.push(infomation1, infomation2, infomation3);

	// 		//var infomations
	// 		this.collection = new Infomations(data);

	// 		this.render();

	// 	}

	// 	render() {
	// 		let that = this;
	// 		this.$el.html(this.statsTemplate({
	// 			infos: that.collection.toJSON()
	// 		}));
	// 		return this;

	// 	}

	// }

	export class InfomationView extends Backbone.View<app.Infomation>{
		
		template: (...data: any[]) => string;
		private static tpl = `
				<div class="hero-unit">
						<span class="glyphicon glyphicon-stop" style="color: <%= color %>;"></span>
						<%= title %>
				</div>
			`

		constructor(option?){	

			this.tagName = 'div';
			this.id = 'space';
			super(option);
			console.log(option);
			//this.collection = model;
			this.template = _.template(InfomationView.tpl);
			this.render();
		
		};

		render(){
			
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		
		}
	}

	export class InfomationsView extends Backbone.View<app.Infomation>{
		
		//template: any;
		template: (...data: any[]) => string;

		constructor(){

			super({
				el : '.container'
			});

		};

		initialize(){
			 
			let infomation1 = new Infomation({
				color: 'yellow',
	            title: 'Financial news/press release'
			});

			let infomation2 = new Infomation({
				color: 'blue',
	            title: 'Board Meetings'
			});

			let infomation3 = new Infomation({
				color: 'green',
	            title: 'Results'
			});

			var data = [];
			data.push(infomation1,infomation2, infomation3);
			this.collection = new Infomations(data);
			console.log(this.collection.models);
			this.render();

		}

		render() {
			var self = this;
			
			this.$el.html('');
			
			_.each(this.collection.toArray(), function(todo) {
				self.$el.append((new InfomationView({model: todo})).render().$el);
			});

			return this;

		}
	}
}