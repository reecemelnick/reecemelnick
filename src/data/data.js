import jsLogo from '../assets/jsLogo.png';

const JS = { id: 1, name: "JavaScript", icon: jsLogo };
const REACT = { id: 2, name: "React", icon: jsLogo };
const TAILWIND = { id: 3, name: "Tailwind", icon: jsLogo };
const FLASK = { id: 4, name: "Flask", icon: jsLogo };
const PYTHON = { id: 5, name: "Python", icon: jsLogo };
const SQLITE = { id: 6, name: "SqlLite", icon: jsLogo };
const C_LANG = { id: 7, name: "C", icon: jsLogo };
const NCURSES = { id: 8, name: "Ncurses", icon: jsLogo };

export const tools = [JS, REACT, TAILWIND, FLASK, PYTHON, SQLITE, C_LANG, NCURSES];

export const projects = [
  {
    id: 1,
    name: "QuickStyle",
    description: "QuickSyle is a developer tool for React projects that use Tailwindcss. QuickStyle was awarded 1st overall prize at the HackTheBreak hackathon.",
    toolsUsed: [JS, REACT, TAILWIND], 
  },
  {
    id: 2,
    name: "Hockey-Insight",
    description: "Hockey-Insight is a dashboard with advanced hockey graphics and statistics. I created this off of my love of hockey.",
    toolsUsed: [FLASK, PYTHON, REACT, SQLITE],
  },
  {
    id: 3,
    name: "Chat Application",
    description: "This was a class-wide project done at BCIT where we were split into client, server, and protocol teams and has to work together to implement a chat application written in C using POSIX networking sockets.",
    toolsUsed: [C_LANG, NCURSES],
  },
];