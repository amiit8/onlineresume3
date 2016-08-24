var resume_data = {
	basicInfo : {
		title : 'Basic Information',
		description :'',
		data : {
			name : 'Amit Upadhyay',
			email : 'amit.upadhyay@outlook.com',
			phone : '+91-9833188838/+91-9765868838', 
			website : 'www.amitupadhyay.in',
			profileImage : './images/profileImage.jpg'
		}
	},
	summary : {
		title : 'About me',
		description : '',
		icon : 'glyphicon-user',
		data : {
			text : 'UI developer with 4+ years experience in Javascript, HTML5, CSS3, jQuery, Responsive Design, Backbone'
		}
	},
	skillset : {
		title : 'Skills',
		description : 'I work with the below technologies',
		icon : 'glyphicon-briefcase',
		data : [
			{
				name : 'Javascript',
				proficiency : 90,
				experience : 24,
				image : './images/javascript.png'
			},
			{
				name : 'Backbone js',
				proficiency : 90,
				experience : 12,
				image : './images/backbone.png'
			},
			{
				name : 'Marionette',
				proficiency : 85,
				experience : 12,
				image : './images/marionette.png'
			},
			{
				name : 'JQuery',
				proficiency : 80,
				experience : 24,
				image : './images/jquery.png'
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
		]
	},
	toolset : {
		title : 'Tools',
		description : 'I work with the below technologies',
		icon : 'glyphicon-wrench',
		data : [
			{
				name : 'Sublime',
				experience : 24,
				image : './images/sublime.png'
			},
			{
				name : 'Git',
				experience : 24,
				image : './images/git.png'
			},
			{
				name : 'Eclipse',
				experience : 24,
				image : './images/eclipse.png'
			},
			{
				name : 'Jira',
				experience : 24,
				image : './images/jira.png'
			},
			{
				name : 'Node',
				experience : 12,
				image : './images/node.png'
			}
		]
	},
	technologies : {
		title : 'Technologies',
		description : 'I work with the below technologies',
		icon : 'glyphicon-phone',
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
		description : 'Education',
		icon : 'glyphicon-education',
		data : [
			{
				year : 2011,
				description : 'BE in Computer Science from RGPV Bhopal',
				degree : 'Bachelor of Engineering',
				percentage : 70.7,
				image : '/images/education/pic1.jpg'
			},
			{
				year : 2007,
				description : '12th from Kendriya Vidyalaya Jabalpur',
				degree : 'Higher Secondary School',
				percentage : 80.4,
				image : '/images/education/pic2.jpg'
			},
			{
				year : 2005,
				description : '10th from Army School Mathura Cantt',
				degree : 'High School',
				percentage : 85.2,
				image : '/images/education/pic3.jpg'
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
		title : 'Projects',
		description : 'Projects I have worked on',
		icon : 'glyphicon-shopping-cart',
		data : [
			{
				projectName : 'Online portfolio',
				description : 'An online portfolio to showcase my skills',
				image : './images/projects/pic1.jpg',
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
				projectName : 'Ecommerce Web Portal',
				description : 'Ecommerce Web portal',
				image : './images/projects/pic2.jpg',
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
				projectName : 'Customer Data Management Application',
				description : 'Banking',
				image : './images/projects/pic3.jpg',
				responsibilities : [
					'Provide solution to Client for production issues according to the defined SLA',
					'Coordinating with different teams from other vendors for providing quick solution',
					'Responsible for Incident/Change/Problem management',
					'Provide patches/enhancement as per customer request',
					'Responsible for availability of the application in Business hours'
				],
				duration : 24
			},
			{
				projectName : 'Initial Corporate Training',
				description : 'Training',
				image : './images/projects/pic4.jpg',
				responsibilities : [
					'Training program in IBM Mainframes and DB2',
					'End to End Project development and delivery training'
				],
				duration : 3
			},
			{
				projectName : 'Online Examination System',
				description : 'College',
				image : './images/projects/pic5.jpg',
				responsibilities : [
					'Intranet based Online examination system in JSP and servlets'
				],
				duration : 1
			},
			{
				projectName : 'Library Management System',
				description : 'College',
				image : './images/projects/pic6.jpg',
				responsibilities : [
					'Desktop Application for Library Management in Visual Basic'
				],
				duration : 1
			},
		]
	},
	contact : {
		title : 'Contact',
		description : 'Contact',
		icon : './images/contact.jpg',
		data : {
			name : 'Amit Upadhyay',
			email : 'abcd@gmail.com',
			phone : '9812121212',
			text : 'Sample Text'
		}

	}

};