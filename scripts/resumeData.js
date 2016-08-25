

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
					title: 'HTML 5',
					image: './images/html5.png',
					description: 'HTML is the thing'
				},
				{
					link:'#',
					title: 'Javascript',
					image: './images/javascript.png',
					description: 'Javascript'
				},
				{
					link:'#',
					title: 'Frameworks',
					image: './images/marionette.png',
					description: 'JS Frameworks'
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
				image : 'warehouse.jpg',
				responsibilities : [
					'Developing standalone widgets on Liferay portal with Backbone.js',
					'Using backbone channels to communicate between different widgets',
					'Using Git as code repository to checkout and commit code changes',
					'Consuming Rest Services to fetch and update data via web services',
					'Developing widgets using Ajile methodology with jira',
					'Implementing responsive design with css and javascript'
				],
				duration : 12
			},
			{
				id : 2,
				projectName : 'Online portfolio',
				description : 'A small project to keep my online presence',
				image : 'portfolio.png',
				responsibilities : [
					'Single Page app to showcase my work and skills',
					'Using marionette to create the whole application',
					'Deployed on free hosting',
					'Used bootstrap for responsive design and inbuilt styles',
					'Optimizing and ugly-fying code for deployment with r.js'
				],
				duration : 12
			},
			{
				id : 3,
				projectName : 'Ecommerce Web Portal',
				description : 'A Liferay based configurable ecommerce platform',
				image : 'shopping.jpg',
				responsibilities : [
					'Developing standalone widgets on Liferay portal with Backbone.js',
					'Using backbone channels to communicate between different widgets',
					'Using Git as code repository to checkout and commit code changes',
					'Consuming Rest Services to fetch and update data via web services',
					'Developing widgets using Ajile methodology with jira',
					'Implementing responsive design with css and javascript'
				],
				duration : 12
			},
			{
				id : 4,
				projectName : 'Customer Data Management Application',
				description : 'Banking',
				image : 'banking.jpg',
				responsibilities : [
					'Provide solution to Client for production issues according to the defined SLA',
					'Coordinating with different teams from other vendors for providing quick solution',
					'Responsible for Incident/Change/Problem management',
					'Provide patches/enhancement as per customer request',
					'Responsible for availability of the application in Business hours'
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
		subTitle : 'My contact channels',
		text : 'Preferred channel would be email',
		data : {
			email : 'abcd@gmail.com',
			phone : '9812121212',
			text : 'PB 301 India'
		}

	}

};