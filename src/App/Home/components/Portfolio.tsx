import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "web" | "mobile" | "design" | "other";
  technologies: string[];
  link: string;
  github?: string;
  featured: boolean;
}

interface CategoryFilter {
  id: string;
  label: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categoryFilters: CategoryFilter[] = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "design", label: "UI/UX Design" },
    { id: "other", label: "Other Projects" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for online stores with real-time analytics and inventory management.",
      image:
        "https://i.pinimg.com/1200x/31/a7/48/31a7485da9103cb9e9078e12e2ecbd5f.jpg",
      category: "web",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Chart.js"],
      link: "https://example.com/project1",
      github: "https://github.com/yourusername/project1",
      featured: true,
    },
    {
      id: 2,
      title: "Travel Companion App",
      description:
        "Mobile application that helps users discover local attractions and create personalized travel itineraries.",
      image:
        "https://i.pinimg.com/1200x/28/60/99/286099f41ec654a984a17ad52543fd37.jpg",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Google Maps API", "Expo"],
      link: "https://example.com/project2",
      github: "https://github.com/yourusername/project2",
      featured: true,
    },
    {
      id: 3,
      title: "Financial News Portal",
      description:
        "News aggregation platform focused on financial markets with customizable watchlists and alerts.",
      image:
        "https://i.pinimg.com/1200x/63/69/d0/6369d0fb96193672c474d6f20b09e93e.jpg",
      category: "web",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      link: "https://example.com/project3",
      github: "https://github.com/yourusername/project3",
      featured: false,
    },
    {
      id: 4,
      title: "Healthcare Provider Portal",
      description:
        "Secure platform for healthcare professionals to manage patient records and appointments.",
      image:
        "https://i.pinimg.com/1200x/70/60/74/7060748bddf520429201bd91a93f1d0f.jpg",
      category: "web",
      technologies: ["React", "Express", "PostgreSQL", "Auth0"],
      link: "https://example.com/project4",
      featured: true,
    },
    {
      id: 5,
      title: "Productivity Timer",
      description:
        "Pomodoro-based productivity application with task tracking and analytics.",
      image:
        "https://i.pinimg.com/1200x/93/0f/ff/930fff1381c3ff5e83f8382e5c91842f.jpg",
      category: "mobile",
      technologies: ["Flutter", "Dart", "SQLite", "Material Design"],
      link: "https://example.com/project5",
      github: "https://github.com/yourusername/project5",
      featured: false,
    },
    // {
    //   id: 6,
    //   title: "Corporate Website Redesign",
    //   description:
    //     "Complete redesign of a corporate website focusing on improved UX and conversion optimization.",
    //   image: "/api/placeholder/600/400",
    //   category: "design",
    //   technologies: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript"],
    //   link: "https://example.com/project6",
    //   featured: true,
    // },
  ];

  const handleFilterChange = (filter: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setIsAnimating(false);
    }, 300);
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-down"
            className="text-2xl font-bold text-gray-400 mb-2"
          >
            MY WORK
          </h2>
          <h1 data-aos="fade-up" className="text-5xl font-bold mb-4">
            Featured Projects
          </h1>
          <div className="w-20 h-1 bg-[#00ff99] mx-auto shadow-[0_0_10px_rgba(0,255,153,0.7)]"></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className=" max-w-2xl mx-auto"
          >
            A selection of my recent projects showcasing my skills in web
            development, mobile applications, and UI/UX design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryFilters.map((filter) => (
            <button
              data-aos="fade-up"
              data-aos-delay="300"
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer 
                ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] text-[#1c1c22]"
                    : "bg-gray-800 text-gray-300 hover:bg-[#00ff99] hover:text-[#1c1c22]"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          {filteredProjects.map((project) => (
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:border-[#00ff99] transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] text-[#1c1c22] text-xs px-2 py-1 rounded-md">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] text-[#1c1c22] px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-[#00ff99] text-[#1c1c22] text-sm font-medium rounded-md hover:bg-transparent hover:border hover:border-[#00ff99] hover:text-[#00ff99] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#00ff99]/50"
                  >
                    View Project
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-transparent border border-[#00ff99] text-[#00ff99] text-sm font-medium rounded-md hover:bg-[#00ff99] hover:text-[#1c1c22] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#00ff99]/50 active:shadow-[#00ff99]/70 hover:scale-105"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom indicator */}
              <div
                className={`h-1 bg-[#00ff99] transition-all duration-300 ${
                  hoveredProject === project.id ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
