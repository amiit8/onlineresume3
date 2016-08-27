
/**************************************
	 	Website : www.amitupadhyay.in
		Author : Aamit Upadhyay
	 	Email : amiit8@gmail.com
***************************************/

// This script converts the raw json data to html dom using backbone and underscore. 
// The views do not contain any functionality here
// The purpose of using backbone here is to generate the html markup from json


// Base View which can be extended by other views to inherit helper functions
var BaseView = Backbone.View.extend({
	helperFunctions : {
		getTenure : function(startDate, endDate){
			var start = new Date(startDate);
			var end = new Date(endDate);
			var endMsg;
			var Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			var startMsg = Months[start.getMonth()] + ' ' + start.getFullYear();
			if(end.toJSON() !== null){
				endMsg = ' to ' + Months[end.getMonth()] + ' ' + end.getFullYear();
			}
			else{
				endMsg = " to Date";				
			}
			return startMsg + endMsg;
		}
	},
	render: function(){
		var data = this.model.toJSON();
		_.extend(data, this.helperFunctions);
		this.$el.html(this.template(data));
		// console.info(this);
	}
});


// Info View
var InfoView = BaseView.extend({
	el: '#banner',
	template : _.template( $('#infoTemplate').html() ),
	ui : {

	}
});

var infoModel = new Backbone.Model(resume_data.basicInfo);

var infoView = new InfoView({
	model : infoModel
});

// Menu View
var MenuView = BaseView.extend({
	el: '#menu',
	template : _.template( $('#menuTemplate').html() ),
});

var menuModel = new Backbone.Model(resume_data);

var menuView = new MenuView({
	model: menuModel
});


// Profile Summary View
var SummaryView = BaseView.extend({
	el: '#summary',
	template : _.template( $('#summaryTemplate').html() ),
});

var summaryModel = new Backbone.Model(resume_data.summary);

var summaryView = new SummaryView({
	model : summaryModel
});

// Skills View
var SkillsView = BaseView.extend({
	el: '#skills',
	template : _.template( $('#skillsTemplate').html() ),
});

var skillsModel = new Backbone.Model(resume_data.skills);

var skillsView = new SkillsView({
	model : skillsModel
});

// Toolset View
var ToolsetView = BaseView.extend({
	el: '#toolset',
	template : _.template( $('#toolsTemplate').html() ),
});

var toolsetModel = new Backbone.Model(resume_data.toolset);

var toolsetView = new ToolsetView({
	model : toolsetModel
});

// Technology View
var TechView = BaseView.extend({
	el: '#tech',
	template : _.template( $('#skillsTemplate').html() ),
});

var techModel = new Backbone.Model(resume_data.technologies);

var techView = new TechView({
	model : techModel
});

// Future View
var FutureView = BaseView.extend({
	el: '#future',
	template : _.template( $('#futureTemplate').html() ),
});

var futureModel = new Backbone.Model(resume_data.future);

var futureView = new FutureView({
	model : futureModel
});

// Achievements View
var AchievementsView = BaseView.extend({
	el: '#achievements',
	template : _.template( $('#achievementsTemplate').html() ),
});

var achievementsModel = new Backbone.Model(resume_data.achievements);

var achievementsView = new AchievementsView({
	model : achievementsModel
});

// Education View
var EducationView = BaseView.extend({
	el: '#education',
	template : _.template( $('#educationTemplate').html() ),
});

var educationModel = new Backbone.Model(resume_data.education);

var educationView = new EducationView({
	model : educationModel
});

// Experience View
var ExperienceView = BaseView.extend({
	el: '#experience',
	template : _.template( $('#experienceTemplate').html() ),
});

var experienceModel = new Backbone.Model(resume_data.experience);

var experienceView = new ExperienceView({
	model : experienceModel
});

// Projects View
var ProjectsView = BaseView.extend({
	el: '#projects',
	template : _.template( $('#projectsTemplate').html() ),
});

var projectsModel = new Backbone.Model(resume_data.projects);

var projectsView = new ProjectsView({
	model : projectsModel
});

// Contact View
var ContactView = BaseView.extend({
	el: '#contact',
	template : _.template( $('#contactTemplate').html() ),
});

var contactModel = new Backbone.Model(resume_data.contact);

var contactView = new ContactView({
	model : contactModel
});

// Render the views
infoView.render();
summaryView.render();
skillsView.render();
toolsetView.render();
techView.render();
experienceView.render();
educationView.render();
futureView.render();
achievementsView.render();
projectsView.render();
contactView.render();
menuView.render();

