// This is your resume project's page
const projectsData = [
  {
    title: 'Resume Project',
    description: 'An interactive and detailed resume website to showcase my skills and projects.',
    image: '/images/resume-project.png',  // Update the image path based on your project
    techStack: ['Next.js', 'Tailwind CSS'],
    liveLink: 'https://your-resume-live.com',
    codeLink: 'https://github.com/your-username/resume-project',
  },
  {
    title: 'Portfolio Website',
    description: 'A colorful portfolio showcasing all my projects, skills, and contact details.',
    image: '/images/portfolio.png',  // Another image example
    techStack: ['Next.js', 'Styled-components'],
    liveLink: 'https://your-portfolio.com',
    codeLink: 'https://github.com/your-username/portfolio',
  },
  {
    title: 'Todolist',
    description: 'A to-do application using React with local storage for persistent data and Zustand for state management.',
    image: '/todolist.png', // Update the image path
    techStack: ['React', 'Zustand', 'Local Storage'],
    liveLink: 'https://todolist-blush-omega.vercel.app/',
    codeLink: 'https://github.com/Harish01234/todolist.git',
  },
  {
    title: 'ChatMate',
    description: 'A real-time group chat application using React for the frontend and Express with Socket.IO for the backend. Users can create chat rooms and send messages in real time.',
    image: '/chatmate.png', // Update the image path
    techStack: ['React', 'Express', 'Socket.IO', 'CORS'],
    liveLink: 'https://chatmate-frontend.vercel.app/',
    codeLink: 'https://github.com/Harish01234/chatmate-frontend.git',
  }
  
  
  // Add more projects similarly
];

export default function Projects() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 transform transition duration-300 ease-in-out">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-white">{project.title}</h2>
              <p className="text-white mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-white text-gray-900 px-3 py-1 rounded shadow">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-4 py-2 rounded shadow"
                >
                  Live Site
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-4 py-2 rounded shadow"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
