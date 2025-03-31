import React, { useState } from "react";

interface TechSkill {
  id: number;
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "design";
  proficiency: number; // 1-5 scale
}

interface CategoryFilter {
  id: string;
  label: string;
}

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const categoryFilters: CategoryFilter[] = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools & DevOps" },
    { id: "design", label: "Design" },
  ];

  const techSkills: TechSkill[] = [
    // Frontend
    { id: 1, name: "React", icon: "⚛️", category: "frontend", proficiency: 5 },
    {
      id: 2,
      name: "TypeScript",
      icon: "📘",
      category: "frontend",
      proficiency: 4,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: "📜",
      category: "frontend",
      proficiency: 5,
    },
    { id: 4, name: "HTML5", icon: "🌐", category: "frontend", proficiency: 5 },
    { id: 5, name: "CSS3", icon: "🎨", category: "frontend", proficiency: 4 },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: "💨",
      category: "frontend",
      proficiency: 5,
    },
    {
      id: 7,
      name: "Next.js",
      icon: "⏭️",
      category: "frontend",
      proficiency: 4,
    },

    // Backend
    { id: 8, name: "Node.js", icon: "🟢", category: "backend", proficiency: 4 },
    { id: 9, name: "Express", icon: "🚂", category: "backend", proficiency: 4 },
    {
      id: 10,
      name: "MongoDB",
      icon: "🍃",
      category: "backend",
      proficiency: 3,
    },
    {
      id: 11,
      name: "PostgreSQL",
      icon: "🐘",
      category: "backend",
      proficiency: 3,
    },
    {
      id: 12,
      name: "Firebase",
      icon: "🔥",
      category: "backend",
      proficiency: 4,
    },

    // Tools & DevOps
    { id: 13, name: "Git", icon: "📊", category: "tools", proficiency: 4 },
    { id: 14, name: "GitHub", icon: "🐙", category: "tools", proficiency: 5 },
    { id: 15, name: "VS Code", icon: "📝", category: "tools", proficiency: 5 },
    { id: 16, name: "Docker", icon: "🐳", category: "tools", proficiency: 3 },
    // { id: 17, name: "IntelliJ", icon: "🃏", category: "tools", proficiency: 4 },

    // Design
    { id: 18, name: "Figma", icon: "🖌️", category: "design", proficiency: 4 },
    {
      id: 19,
      name: "Adobe XD",
      icon: "✏️",
      category: "design",
      proficiency: 3,
    },
    {
      id: 20,
      name: "Photoshop",
      icon: "📸",
      category: "design",
      proficiency: 3,
    },
  ];

  const handleCategoryChange = (category: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsAnimating(false);
    }, 300);
  };

  const filteredSkills =
    activeCategory === "all"
      ? techSkills
      : techSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="tech-stack" className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-400 mb-2">
            TECHNOLOGIES
          </h2>
          <h1 className="text-5xl font-bold mb-4">My Tech Stack</h1>
          <div className="w-20 h-1 bg-[#00ff99] mx-auto shadow-[0_0_10px_rgba(0,255,153,0.7)]"></div>
          <p className=" max-w-2xl mx-auto pt-8">
            These are the technologies I've worked with. I'm always exploring
            new tools and frameworks to expand my skill set.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryFilters.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {skill.name}
              </h3>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full mx-1 ${
                      i < skill.proficiency ? "bg-blue-500" : "bg-gray-600"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
