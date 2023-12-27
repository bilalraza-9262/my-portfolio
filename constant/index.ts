import {
	RxCrop,
	RxDesktop,
	RxPencil2,
	RxReader,
	RxRocket,
	RxAccessibility,
	RxHome,
	RxPerson,
	RxDashboard,
} from "react-icons/rx";

export const Skills = {
	frontend: [
		{
			title: "HTML",
			para: "In the realm of markup, I've become proficient in HTML (HyperText Markup Language), the bedrock of web structure. HTML enables me to define the skeletal structure of web pages, creating a foundation for seamless content rendering.",
			slug: 1,
			percentage: 90,
			src: "/assets/skills/html.png"
		},
		{
			title: "CSS",
			para: "For styling and presentation, I've harnessed the capabilities of CSS (Cascading Style Sheets). This versatile styling language empowers me to craft visually compelling and responsive user interfaces by controlling layout, color schemes, and typography.",
			slug: 2,
			percentage: 80,
			src: "/assets/skills/css2.png"
		},
		{
			title: "TAILWIND",
			para: "To streamline my styling workflow, I've delved into Tailwind CSS. Its pre-defined utility classes and modular structure allow for rapid development and easy customization, providing a valuable toolkit for crafting modern and sleek interfaces.",
			slug: 3,
			percentage: 80,
			src: "/assets/skills/tailwind.png"
		},
		{
			title: "SASS",
			para: "Taking the styling journey further, I've explored SASS (Syntactically Awesome Stylesheets). This preprocessor scripting language enhances my stylesheets with features like variables, nesting, and mixins, making my styles more maintainable and expressive.",
			slug: 4,
			percentage: 80,
			src: "/assets/skills/sass.png"
		},
		{
			title: "JS",
			para: "In the dynamic landscape of web development, I've embraced JavaScript, the scripting language that adds life to web pages. Its ability to manipulate the DOM and respond to user interactions has been pivotal in creating interactive and engaging web experiences.",
			slug: 5,
			percentage: 85,
			src: "/assets/skills/js.png"
		},
		{
			title: "TS",
			para: "I've mastered JavaScript's core features and embraced TypeScript, a superset introducing static typing and advan features. TypeScript's advantages, including error catching and improved code organization, greatly enhance development workflow.",
			slug: 6,
			percentage: 80,
			src: "/assets/skills/ts.png"
		},
		{
			title: "REACT JS",
			para: "For building robust and dynamic user interfaces, I've adopted React.js, a declarative library that facilitates the creation of reusable UI components. React's component-based architecture and virtual DOM make it a powerful tool for developing modern and efficient web applications.",
			slug: 7,
			percentage: 70,
			src: "/assets/skills/react.png"
		},
		{
			title: "NEXT JS",
			para: "Diving into server-rendered applications, I've ventured into the world of Next.js. This React framework has streamlined my development process with features like server-side rendering and automatic code splitting, enabling me to build performant and scalable web applications.",
			slug: 8,
			percentage: 70,
			src: "/assets/skills/nextjs.png"
		}
	],
	backend: [
		{
			title: "PYTHON",
			para: "As a versatile Python enthusiast, I bring a wealth of experience to projects spanning web development, data science, and artificial intelligence. I leverage Python's inherent readability and simplicity, ensuring efficiency and effectiveness in every facet of my work.",
			slug: 1,
			percentage: "Still learning",
			src: "/assets/skills/python.png"
		},
		{
			title: "NODE JS",
			para: "In my journey, I've achieved mastery in Node.js, specializing in the creation of scalable and efficient network applications. My expertise extends to leveraging its event-driven, non-blocking I/O model and tapping into its extensive ecosystem, positioning me to tackle diverse challenges in the realm of web development.",
			slug: 2,
			percentage: "Still learning",
			src: "/assets/skills/nodejs.png"
		}
	],
	database: [
		{
			title: "FIREBASE",
			para: "My proficiency in Firebase is central to my ability to seamlessly develop mobile and web applications. I skillfully utilize its real-time databases and authentication services, enabling me to create responsive and collaborative digital experiences.",
			slug: 1,
			percentage: "Coming Soon",
			src: "/assets/skills/firebase.png"
		},
		{
			title: "MONGODB",
			para: "In the domain of data storage, I showcase expertise in MongoDB—a robust and scalable NoSQL solution. I capitalize on its document-oriented approach, ensuring flexibility and adaptability to evolving project requirements. MongoDB is a cornerstone in my toolkit for projects demanding efficient and agile development.",
			slug: 2,
			percentage: "Coming Soon",
			src: "/assets/skills/mongo-db.png"
		}
	]
}

export const projects = {
	typescript: [
		{
			title: "ATM",
			description: "The ATM Project is a simulation of a banking system, allowing users to perform common financial transactions. It covers tasks like checking account balances, withdrawing or depositing funds, and transferring money between accounts, offering a practical experience akin to a real-world ATM.",
			src: "/assets/typescriptProjects/atm.jpg",
			slug: 1
		},
		{
			title: "Todo List",
			description: "The Todo Project is a task management app that enables users to create, edit, and organize tasks efficiently. It facilitates features such as categorization, due dates, and priority levels for improved organization and productivity.",
			src: "/assets/typescriptProjects/todo.jpg",
			slug: 2
		},
		{
			title: "Currency Convertor",
			description: "The Currency Converter Project provides users with real-time currency conversion capabilities. By fetching up-to-date exchange rates, users can input an amount in one currency and see its equivalent value in another. This project demonstrates API integration, user-friendly interfaces, and real-time data updates for international currency conversions",
			src: "/assets/typescriptProjects/currencyConverter.jpg",
			slug: 3
		},
		{
			title: "Student Management System",
			description: "The Student Management Project streamlines student information management in educational institutions. It includes features like registration, course enrollment, grade tracking, and performance analysis. Administrators can efficiently organize student data, generate reports, and monitor academic progress.",
			src: "/assets/typescriptProjects/student-management.jpg",
			slug: 4
		},
		{
			title: "Adventure Game",
			description: "The Adventure Game Project offers an interactive storytelling experience, immersing users in a fictional world. Users navigate through the story, making decisions that shape the narrative. This project highlights elements of game design, narrative branching, providing an engaging and creative digital storytelling experience.",
			src: "/assets/typescriptProjects/adventureGame.jpg",
			slug: 5
		}

	],
	nextjs: [
		{
			title: "Recipee Website",
			description: "The Weather App delivers real-time weather information with a user-friendly interface. Users can check current conditions, forecasts, and detailed data, often featuring interactive maps and notifications for staying updated on the go.",
			src: "/assets/NextProjects/recipee.PNG",
			slug: 1,
			ref:"https://recipe-web-fh9d.vercel.app/"
		},
		{
			title: "Weather App",
			description: "The Recipe Website is a culinary hub, offering a diverse collection of user-friendly recipes. With features like ingredient lists, step-by-step instructions, and user reviews, it's a go-to resource for home cooks seeking inspiration and delicious flavors.",
			src: "/assets/NextProjects/weather.PNG",
			slug: 2,
			ref:"https://weather-app-black-omega.vercel.app/"
		}
	]
}

export const Socials = [
	{
		name: "Discord",
		slug: 1,
		src: "/assets/github.svg",
		link: "https://github.com/bilalraza-9262"
	},
	{
		name: "Facebook",
		slug: 2,
		src: "/assets/facebook.svg",
		link: "https://www.facebook.com/profile.php?id=100076563670297"
	},
	{
		name: "Instagram",
		slug: 3,
		src: "/assets/instagram.svg",
		link: "https://www.instagram.com/i_am_bilalraza/"
	},
];

export const NavLinks = [
	{
		name: "Home",
		slug: 1,
		icon: RxHome,
		link: "/",
	},
	{
		name: "About me",
		slug: 2,
		icon: RxPerson,
		link: "/about-me",
	},
	{
		name: "Projects",
		slug: 3,
		icon: RxDashboard,
		link: "/my-projects",
	},
];



