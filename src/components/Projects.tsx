import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'HireReady AI',
      description:
        'HireReady AI is an intelligent platform that leverages AI to simulate realistic job interviews based on user profiles and job requirements.',
      techStack: ['Python', 'Streamlit', 'Mistral AI', 'Speechmatic AI'],
      github: 'https://github.com/swapnil-shikha',
      featured: true,
    },
    {
      title: 'Coming Soon',
      description: 'An exciting project is in development. Stay tuned for updates!',
      techStack: ['React', 'Node.js', 'MongoDB'],
      placeholder: true,
    },
    {
      title: 'Coming Soon',
      description: 'Another innovative project will be showcased here soon.',
      techStack: ['Next.js', 'TypeScript', 'TailwindCSS'],
      placeholder: true,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Showcasing my recent work</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className={`group relative bg-glass backdrop-blur-xl border border-glass-border rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all overflow-hidden ${
                project.placeholder ? 'opacity-70' : ''
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  {!project.placeholder && (
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-muted hover:bg-primary flex items-center justify-center transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <p className="text-foreground/70 mb-6 min-h-[80px]">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-muted border border-glass-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.placeholder && (
                  <div className="mt-6 text-center">
                    <span className="text-sm text-muted-foreground font-medium">Under Development</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
