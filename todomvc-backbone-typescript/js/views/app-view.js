/*global Backbone, jQuery, _, ENTER_KEY */
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
    var InfomationView = (function (_super) {
        __extends(InfomationView, _super);
        function InfomationView(option) {
            var _this = this;
            _this.className = 'space';
            _this = _super.call(this, option) || this;
            console.log(option);
            //this.collection = model;
            _this.template = _.template(InfomationView.tpl);
            _this.render();
            return _this;
        }
        ;
        InfomationView.prototype.render = function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        };
        InfomationView.tpl = "\n\t\t\t\t<div class=\"hero-unit\">\n\t\t\t\t\t\t<div class=\"icon\" style=\"width: 20px; height: 20px; background: <%= color %>; float: left; margin-right: 15px; \"> </div>\n\t\t\t\t\t\t<div style=\"float: left;\" ><%= title %></div>\n\t\t\t\t</div>\n\t\t\t";
        return InfomationView;
    }(Backbone.View));
    app.InfomationView = InfomationView;
    var InfomationsView = (function (_super) {
        __extends(InfomationsView, _super);
        function InfomationsView() {
            return _super.call(this, {
                el: '.container'
            }) || this;
        }
        ;
        InfomationsView.prototype.initialize = function () {
            var infomation1 = new app.Infomation({
                color: 'yellow',
                title: 'Financial news/press release'
            });
            var infomation2 = new app.Infomation({
                color: 'blue',
                title: 'Board Meetings'
            });
            var infomation3 = new app.Infomation({
                color: 'green',
                title: 'Results'
            });
            var data = [];
            data.push(infomation1, infomation2, infomation3);
            this.collection = new app.Infomations(data);
            console.log(this.collection.models);
            this.render();
        };
        InfomationsView.prototype.render = function () {
            var self = this;
            this.$el.html('');
            _.each(this.collection.toArray(), function (todo) {
                self.$el.append((new InfomationView({ model: todo })).render().$el);
            });
            return this;
        };
        return InfomationsView;
    }(Backbone.View));
    app.InfomationsView = InfomationsView;
})(app || (app = {}));
//# sourceMappingURL=app-view.js.map