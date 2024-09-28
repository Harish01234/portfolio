export default function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A web app for sharing files efficiently.',
      image: '/images/project1.png',
      bgColor: 'bg-purple-500',
      techStack: ['Next.js', 'Tailwind CSS', 'MongoDB'],
      links: {
        live: 'https://liveprojectone.com',
        code: 'https://github.com/user/projectone',
      },
    },
    // Add more projects here...
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md text-white ${project.bgColor} hover:scale-105 transform transition duration-300 ease-in-out`}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4"/>
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-4 py-2 rounded shadow">Live Site</a>
                <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-4 py-2 rounded shadow">View Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
