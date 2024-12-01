import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md bg-neutral-100 transition-transform duration-300 transform hover:scale-105"
          >
            <h6 className="mb-2 font-semibold text-lg">{project.title}</h6>
            <p className="mb-4 text-neutral-600">{project.description}</p>
            <div className="flex items-center gap-2 mb-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-purple-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M12 2a10 10 0 00-3.16 19.48c.5.09.68-.22.68-.48v-1.68c-2.77.61-3.36-1.34-3.36-1.34a2.65 2.65 0 00-1.1-1.45c-.9-.6.07-.59.07-.59a2.1 2.1 0 011.54 1 2.14 2.14 0 002.94.83 2.14 2.14 0 01.63-1.34c-2.22-.25-4.56-1.11-4.56-4.92a3.85 3.85 0 011.02-2.67 3.6 3.6 0 01.1-2.63s.84-.27 2.76 1a9.57 9.57 0 015.03 0c1.92-1.3 2.76-1 2.76-1a3.6 3.6 0 01.1 2.63 3.85 3.85 0 011.02 2.67c0 3.81-2.34 4.67-4.56 4.92a2.43 2.43 0 01.69 1.9v2.82c0 .26.18.58.69.48A10 10 0 0012 2z" />
                  </svg>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-purple-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M12 2a10 10 0 11-10 10A10 10 0 0112 2zm1 5h-2v6h6v-2h-4z" />
                  </svg>
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
