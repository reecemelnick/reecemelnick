import jsLogo from '../assets/jsLogo.png';
import reactLogo from '../assets/reactLogo.png';
import tailwindLogo from '../assets/tailwindLogo.png';
import flaskLogo from '../assets/flaskLogo.png';
import pythonLogo from '../assets/pythonLogo.png';
import sqlliteLogo from '../assets/sqlliteLogo.png';
import cLogo from '../assets/cLogo.png';
import quickStyleImage from '../assets/quickStyleImage.png'; 
import hockeyInsightImage from '../assets/hockeyInsightImage.png'; 
import cchatImage from '../assets/cchatImage.png'; 
import aiAgentImage from '../assets/aiAgentImage.png';
import fangoImage from '../assets/fangoImage.PNG';
import htmlLogo from '../assets/htmlLogo.png';
import cssLogo from '../assets/cssLogo.png';
import postgresLogo from '../assets/postgresLogo.png';
import djangoLogo from '../assets/djangoLogo.png';
import tsLogo from '../assets/tsLogo.png';
import difyLogo from '../assets/difyLogo.png';
import bcitLogo from '../assets/bcitLogo.png';
import clinicImage from '../assets/clinicImage.PNG';

const JS = { id: 1, name: "JavaScript", icon: jsLogo };
const REACT = { id: 2, name: "React", icon: reactLogo };
const TAILWIND = { id: 3, name: "Tailwind", icon: tailwindLogo };
const FLASK = { id: 4, name: "Flask", icon: flaskLogo };
const PYTHON = { id: 5, name: "Python", icon: pythonLogo };
const SQLITE = { id: 6, name: "SqlLite", icon: sqlliteLogo };
const C_LANG = { id: 7, name: "C", icon: cLogo };
const DIFY = { id: 8, name: "Dify", icon: difyLogo };
const POSTGRESQL = { id: 9, name: "PostgreSQL", icon: postgresLogo };
const DJANGO = { id: 10, name: "Django", icon: djangoLogo };
const TYPESCRIPT = { id: 11, name: "TypeScript", icon: tsLogo };
const HTML = { id: 12, name: "HTML", icon: htmlLogo };
const CSS = { id: 13, name: "CSS", icon: cssLogo };
export const tools = [JS, REACT, TAILWIND, FLASK, PYTHON, SQLITE, C_LANG, DIFY, POSTGRESQL, DJANGO, TYPESCRIPT, HTML, CSS];

const BSC = { id: 1, name: "Bachelor of Science in Applied Computer Science: Network Security Applications Development Option", icon: bcitLogo };
const CST = { id: 2, name: "Computer Systems Technology: Data Communication and Networking Option", icon: bcitLogo };
export const education = [CST, BSC];

export const projects = [
  {
    id: 1,
    name: "QuickStyle",
    description: "QuickSyle is a developer tool for React projects that use Tailwindcss. QuickStyle was awarded 1st overall prize at the HackTheBreak hackathon. In this project I lead the backend implementation, focusing on easy to use endpoints and file manipulation.",
    toolsUsed: [JS, REACT, TAILWIND], 
    image: quickStyleImage,
    github: "https://github.com/kvnbanunu/quick-style",
    live: null,
    award: "https://devpost.com/software/quickstyle"
  },
  {
    id: 2,
    name: "Hockey-Insight",
    description: "Hockey-Insight is a web application that provides NHL rankings, player point-per-game predictions, live NHL scores. This is my passion projects where I love to experiment with new technologies and build something to do with my love of hockey.",
    toolsUsed: [FLASK, PYTHON, REACT, SQLITE],
    image: hockeyInsightImage,
    github: "https://github.com/reecemelnick/hocky-insight",
    live: "https://gymrally.com/",
  },
  {
    id: 3,
    name: "Chat Application",
    description: "This was a class-wide project done at BCIT where we were split into client, server, and protocol teams and had to work together to implement a chat application written in C using POSIX networking sockets. This project taught me the importance of clear communication.",
    toolsUsed: [C_LANG],
    image: cchatImage,
    github: "https://github.com/reecemelnick/project-client/tree/dev",
    live: null,
  },
  {
    id: 4,
    name: "Natural Language-to-SQL AI Agent",
    description: "This project was part of the BCIT ISSP program. We were tasked with building an AI agent that would help our clinets non-technical staff query their database using natural language. I was resonsible for testing and communicating with our client about requirements.",
    toolsUsed: [PYTHON, DIFY], 
    image: aiAgentImage,
    github: null,
    live: null,
  },
  {
    id: 5,
    name: "Clinic Management & Imaging Tool",
    description: "This project was part of the BCIT ISSP program. We worked with a dental clinic and used their patient data to leverage machine learning to predict patient dental conditions, visit frequency, and buying behaviour.",
    toolsUsed: [PYTHON, JS, POSTGRESQL],
    image: clinicImage,
    github: "https://github.com/reecemelnick/COMP3800-Group20",
    live: null,
  },
  {
    id: 6,
    name: "Fango",
    description: "FANGO is a just-in-time language tool that helps travellers navigate the real world. Snap a photo of anything, food, menus, signs, or landmarks, and FANGO instantly recognizes it, translates it, and provides pronunciation with practical, travel-ready phrases.",    toolsUsed: [PYTHON, TYPESCRIPT, DJANGO, POSTGRESQL],
    image: fangoImage,
    github: "https://github.com/Jyyunrin/group5_softwareengineering",
    live: null,
  },
];