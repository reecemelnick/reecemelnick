import jsLogo from '../assets/jsLogo.png';
import reactLogo from '../assets/reactLogo.png';
import tailwindLogo from '../assets/tailwindlogo.png';
import flaskLogo from '../assets/flasklogo.png';
import pythonLogo from '../assets/pythonlogo.png';
import sqlliteLogo from '../assets/sqllitelogo.png';
import cLogo from '../assets/clogo.png';
import quickStyleImage from '../assets/quickStyleImage.png'; 
import hockeyInsightImage from '../assets/hockeyInsightImage.png'; 
import cchatImage from '../assets/cchatImage.png'; 

const JS = { id: 1, name: "JavaScript", icon: jsLogo };
const REACT = { id: 2, name: "React", icon: reactLogo };
const TAILWIND = { id: 3, name: "Tailwind", icon: tailwindLogo };
const FLASK = { id: 4, name: "Flask", icon: flaskLogo };
const PYTHON = { id: 5, name: "Python", icon: pythonLogo };
const SQLITE = { id: 6, name: "SqlLite", icon: sqlliteLogo };
const C_LANG = { id: 7, name: "C", icon: cLogo };

export const tools = [JS, REACT, TAILWIND, FLASK, PYTHON, SQLITE, C_LANG];

export const projects = [
  {
    id: 1,
    name: "QuickStyle",
    description: "QuickSyle is a developer tool for React projects that use Tailwindcss. QuickStyle was awarded 1st overall prize at the HackTheBreak hackathon.",
    toolsUsed: [JS, REACT, TAILWIND], 
    image: quickStyleImage,
  },
  {
    id: 2,
    name: "Hockey-Insight",
    description: "Hockey-Insight is a dashboard with advanced hockey graphics and statistics. I created this off of my love of hockey.",
    toolsUsed: [FLASK, PYTHON, REACT, SQLITE],
    image: hockeyInsightImage,
  },
  {
    id: 3,
    name: "Chat Application",
    description: "This was a class-wide project done at BCIT where we were split into client, server, and protocol teams and has to work together to implement a chat application written in C using POSIX networking sockets.",
    toolsUsed: [C_LANG],
    image: cchatImage,
  },
];