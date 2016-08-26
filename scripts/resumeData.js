

// Complete data available in one variable
var resume_data = {
	basicInfo : {
		title : 'Basic Information',
		menu : false,
		description :'',
		data : {
			name : 'Amit Upadhyay',
			email : 'amit.upadhyay@outlook.com',
			phone : '+91-9833188838', 
			website : 'www.amitupadhyay.in',
			profileImage : './images/profileImage.jpg'
		}
	},
	summary : {
		title : 'About me',
		description : '',
		menu : true,
		icon : 'glyphicon-user',
		data : {
			text : 'Hi there, I am primarily a UI Developer with some experience in backend. Most of my time goes into converting the designs(Illustrations and Images) into reality(Working Html and Javascript code). I believe in code quality, not quantity.',
			slides : [
				{
					link:'#',
					title: 'Responsive Design',
					image: './images/responsive.png',
					description: 'Your Website should be flexible enough to perfectly fit across all types of mobiles/tablets/laptops or desktops. There are several frameworks which helps you to support responsive design. One of the most widely used among them is <a href="http://www.getbootstrap.com">Bootstrap</a> which I have also used for this website.'
				},
				{
					link:'#',
					title: 'Browser Compatibility',
					image: './images/browsers2.png',
					description: 'You never know what browser the customer would use to open your website. Especially when your site is on internet. There are several mechanisms which would allow you to write code that would work same on most of the browsers. Still there would be minor differences across them as the browsers implemention of <a href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">Ecmascript</a> differs.'
				},
				{
					link:'#',
					title: 'Frameworks',
					image: './images/backbone.png',
					description: 'From a tiny library like <a href="http://backbonejs.org/">Backbone</a> to heavy weight <a href="https://www.sencha.com/products/extjs/">Extjs</a>, there are many JS frameworks. Although internally all of them finally use core Javascript, but saves you a lot of time to write the same code again and again. Libraries such as <a href="https://jquery.com/">JQuery</a> are so popular that sometimes $ seems to be a default part of javascript for the beginners.'
				},

			]
		}
	},
	skills : {
		title : 'Skills',
		description : 'Learning never ends. There will always be something that you need to learn. I find myself working with these..',
		menu : true,
		icon : 'glyphicon-briefcase',
		image : 'skills.jpg',
		data : [
			{
				name : 'Javascript',
				proficiency : 90,
				experience : 24,
				image : './images/javascript.png'
			},
			{
				name : 'Html',
				proficiency : 75,
				experience : 36,
				image : './images/html.png'
			},
			{
				name : 'Css',
				proficiency : 70,
				experience : 24,
				image : './images/css.png'
			},
			{
				name : 'SQL',
				proficiency : 70,
				experience : 24,
				image : './images/sql.png'
			},
		]
	},
	toolset : {
		title : 'Tools',
		description : 'In this ever-changing technological world you always need some powerful weapons by your side; My ammunition set includes',
		icon : 'glyphicon-wrench',
		image : 'interface.png',
		data : [
			{
				name : 'Sublime',
				experience : 24,
				image : 'sublime.png',
				website : 'https://www.sublimetext.com/',
				text : 'Awsome and simple editor. The closest you can get to an IDE at such a low size'
			},
			{
				name : 'Git',
				experience : 24,
				image : 'git.png',
				website : 'https://git-scm.com/',
				text : 'Ofcourse, there is SVN, Perforce etc. But git takes repository management to another level'
			},
			{
				name : 'Eclipse',
				experience : 24,
				image : 'eclipse.png',
				website:'https://eclipse.org/',
				text : 'The most popular and free IDE that comes with long term support'
			},
			{
				name : 'Jira',
				experience : 24,
				image : 'jira.png',
				website : 'https://www.atlassian.com/software/jira',
				text : 'A very intuitive project management tool. Integrates with git easily'
			},
			{
				name : 'Node',
				experience : 12,
				image : 'node.png',
				website : 'https://nodejs.org/',
				text : 'Node has made javascript even more powerful. With npm its a breeze to use libraries'
			},
			{
				name : 'Developer Tools',
				experience : 12,
				image : 'chrome.png',
				website : 'https://developers.google.com/web/tools/chrome-devtools/?hl=en',
				text : 'Firefox or chrome : Its always a personal choice. Being a UI developer you need to pick yours'
			}
		]
	},
	technologies : {
		title : 'Technologies',
		description : 'I work with the below technologies',
		icon : 'glyphicon-phone',
		image : 'interface.png',
		data : [
			{
				name : 'Java',
				experience : 24,
				image : './images/java.png'
			},
			{
				name : 'Struts',
				experience : 24,
				image : './images/struts.png'
			},
			{
				name : 'IBM DB2',
				experience : 24,
				image : './images/db2.png'
			},
			{
				name : 'MongoDB',
				experience : 2,
				image : './images/mongodb.png'
			},
			{
				name : 'SQL',
				experience : 24,
				image : './images/sql.png'
			},
		]
	},
	future : {
		title : 'Would like to work in',
		description : 'Would like to work in',
		icon : 'glyphicon-calendar',
		data : [
			'UI Technologies',
			'Javascript Frameworks',
			'App Development'
		]
	},
	achievements : {
		title : 'Achievements/Certifications',
		description : 'Have got',
		icon : 'glyphicon-flag',
		data : [
			'IBM Certified DB2 Associate',
			'Awarded TCS Gems for performance in Training Program'
		]
	},
	education : {
		title : 'Education',
		description : 'The best source of knowledge is always experience. Nevertheless, here is a brief history about my formal education. ',
		menu : true,
		icon : 'glyphicon-education',
		data : [
			{
				year : 2011,
				description : 'BE in Computer Science from RGPV Bhopal',
				degree : 'Bachelor of Engineering',
				percentage : 70.7,
				image : 'degree.png'
			},
			{
				year : 2007,
				description : '12th from Kendriya Vidyalaya Jabalpur',
				degree : 'Higher Secondary School',
				percentage : 80.4,
				image : 'degree.png'
			},
			{
				year : 2005,
				description : '10th from Army School Mathura Cantt',
				degree : 'High School',
				percentage : 85.2,
				image : 'degree.png'
			},
		]
	},
	experience : {
		title : 'Experience',
		description : 'Companies I have worked for',
		icon : 'glyphicon-tower',
		data : [
			{
				companyName : 'Accenture',
				designation : 'Analyst',
				role : 'UI Developer',
				description :'UI Developer in Backbone JS',
				startDate : '01/12/2015',
				endDate : ''
			},
			{
				companyName : 'Tata Consultancy Services',
				designation : 'Systems Engineer',
				role : 'Java Developer',
				description :'Java developer for intranet based web application',
				startDate : '01/03/2011',
				endDate : '01/06/2015'
			},
		]
	},
	projects : {
		title : 'Portfolio',
		description : 'I have worked on a variety of projects with different domains. With each new project you get a new set of challenging problems.',
		icon : 'glyphicon-shopping-cart',
		menu :true,
		data : [
			{
				id : 1,
				projectName : 'Supply Chain Product',
				description : 'Complete supply chain management from order to shipment',
				image : 'delivery.jpg',
				responsibilities : [
					'The product enables the customer(basically large enterprises) to manage their stocks efficiently and also decrease wastage using several mechanisms such as forecasting',
					'The appliction uses java services as a backend.',
					'My role in this project was to create User Interfaces using ExtJS on top of company developed platform. For different clients the application needs to be customized to adhere to their requirements.'
				],
				duration : 12
			},
			{
				id : 2,
				projectName : 'Online portfolio',
				description : 'A small project to keep my online presence',
				image : 'portfolio.png',
				responsibilities : [
					'This is a small project for my online profile. This would serve as a playground for me to test various code snippets.',
					'I have tried to use minimal libraries and create most of the effects using jquery and css directly',
					'The libraries used in this project are Bootstrap for responsive design, jquery for dom operations, backbone and underscore for generating html markup from raw json data.',
					'First the json data is converted into html markup. This markup is then deployed to the server as Search engines are not able to index the data if it is generated at runtime.'
				],
				duration : 12
			},
			{
				id : 3,
				projectName : 'Ecommerce Web Portal',
				description : 'A Liferay based configurable ecommerce platform',
				image : 'shopping.jpg',
				responsibilities : [
					'The product is a highly configurable ecommerce platform which can be used by several customers. The backend was based on Amazon Webservices and hence many customers can integrate their data using Amazon cloud without managing the hardware.',
					'My role here was to develop UI widgets which would be configurable by the administrator.',
					'Marionette and Backbone was used to create the structure and views at runtime using data from the rest services, while handlebars was used as a templating framework.'
				],
				duration : 12
			},
			{
				id : 4,
				projectName : 'Customer Data Management Application',
				description : 'Banking',
				image : 'banking.jpg',
				responsibilities : [
					'This project was a banking application for the employees of the bank. The front-end for the application used xslt to convert generated xml to jsp pages.',
					'My role was to customize the Java services and front-end JSP pages according to the customer\'s requirements. The challenge here was to modify the code without breaking other existing functionalities.'
				],
				duration : 24
			},
		]
	},
	contact : {
		title : 'Contact',
		description : 'In case you want to reach me...',
		menu: true,
		icon : './images/contact.jpg',
		subTitle : 'A lot of ways to connect these days',
		text : '',
		data : {
			email : 'amiit8@gmail.com',
			phone : 'Phone number on request',
			text : 'Pune India'
		}

	}

};