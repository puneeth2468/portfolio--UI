import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp, Code2, Database, ChefHat } from "lucide-react";

const projects = [
  {
    title: "Code Insights",
    icon: Code2,
    description: "A data analytics project exploring the evolution of programming languages from 2000 to 2025.",
    fullDescription: "Code Insights is a data analytics project that explores the evolution of programming languages from 2000 to 2025. The project focuses on identifying which programming languages were most widely used across different years. Using the R programming language, I performed data cleaning, analysis, and visualization to uncover meaningful trends. Interactive bar charts and line graphs were created to visually represent language popularity over time.",
    tech: ["R", "Data Visualization", "Analytics"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "NoteNest",
    icon: Database,
    description: "A smart note-taking application with multimedia support and automatic timestamping.",
    fullDescription: "NoteNest is a smart and user-friendly note-taking application designed to help users organize their thoughts, ideas, and important information efficiently. The platform allows users to create and manage notes that can include text, images, and audio recordings. Each note is automatically saved with a timestamp, helping users track when the content was created or updated.",
    tech: ["JavaScript", "Web APIs", "LocalStorage"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Chief's Palette",
    icon: ChefHat,
    description: "A React application helping users discover recipes based on available ingredients.",
    fullDescription: "Chief's Palette is a web application built using React that helps users discover recipes based on the ingredients they have. Users can simply enter one or more ingredient names, and the application dynamically displays a list of recipes that can be prepared using those ingredients. This feature helps reduce food waste and makes cooking easier and more efficient.",
    tech: ["React", "API Integration", "Responsive Design"],
    gradient: "from-orange-500 to-red-600",
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
      className="glass rounded-2xl overflow-hidden group"
    >
      <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
      
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient}`}>
            <project.icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm">
              {isExpanded ? project.fullDescription : project.description}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-primary text-sm font-medium mb-4 hover:underline"
        >
          {isExpanded ? "Show less" : "Read more"}
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-secondary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-12 rounded-full"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
