import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A passionate computer engineer, I possess strong skills in full-stack development and a great motivation for technological innovation. My journey has allowed me to explore various aspects of software development, and I am excited about contributing to ambitious projects.`;

export const ABOUT_TEXT = `I am a junior software engineer, recently graduated, with 5 years of academic experience where I developed numerous projects. During my studies, I also freelanced for a startup, focusing on fixing bugs for a mobile app.

I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I have experience working with various technologies, including React, Next.js, Node.js, MySQL,Java, PostgreSQL, and MongoDB.

I thrive in collaborative environments, enjoy solving complex problems, and am committed to delivering high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "March 2024 - July 2024",
    role: "Mobile Developer",
    company: "Boostifly-LTD",
    description: `
Active participation in the development of the application architecture in collaboration with the BOOSTIFLY LTD team, using Flutter for mobile development.
Proposed new features to enhance user experience, such as customizable notifications and the integration of personalized health advice.
Close collaboration with the backend developer to ensure smooth integration of APIs and databases.
Used the Scrum methodology for project management, with regular meetings to ensure adherence to project timelines and objectives.
Strengthened communication between design, development, and management teams to ensure a clear understanding of the application's needs and objectives.`,
    technologies: ["Flutter", "Firebase", "Nest.js"],
  },
  {
    year: "July 2023 - September 2023",
    role: "Fulll Stack Developer",
    company: "Tawjeeh",
    description: `Development of a web application aimed at guiding high school students towards appropriate higher education institutions, with a focus on the various fields available in Morocco.  
Active participation in the development of the application architecture in collaboration with the Tawjeeh team, using Django, HTML/CSS, JavaScript, and PHP.  
Contribution to innovation by proposing new features to enhance user experience and platform efficiency.  
Strengthened communication between technical and non-technical teams to ensure a clear understanding of the application's needs and objectives.`,
    technologies: ["HTML", "CSS", "Javascript", "Djnago","Python","Php"],
  },
  {
    year: "July 2022 - September 2022",
    role: "Full Stack Developer",
    company:"Organisme Régional de Mise en Valeur Agricole de l'Oriental",
    description: `Development of a web application for employees of L'Office, allowing them to take online training in various fields such as IT and communication.
Active participation in the development of the application architecture in collaboration with the L'Office team, using React, HTML/CSS, and MongoDB.
Contribution to innovation by proposing new features to enhance user experience and platform efficiency.`,
    technologies: ["Html", "Css", "Javascript", "React","MongoDb"],
  },
  
];

export const PROJECTS = [
  {
    title: "Real-Time Chat Application",
    image: project1,
    description:
      "This is a real-time chat application built using React.js, designed to provide users with a seamless and modern messaging experience. The application is equipped with key features like instant message exchange, user-friendly UI, and responsiveness, making it suitable for desktop and mobile devices.",
    technologies: ["JavaScript (ES6+)", "Backend", "React.js", "Css"],
    github: "https://github.com/Naciri-Anas/anas-reactjs-chat.git",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Marrakech 40000 ",
  email: "anasnaciridev@gmail.com",
};
