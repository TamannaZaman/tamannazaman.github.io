import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  // projects array with title, description, tech stack, image, github link and live demo link.
  const projects = [
    // {
    //   title: "AI Chat Application",
    //   description: "Real-time chat app with AI integration for smart responses and translation.",
    //   tech: ["Next.js", "OpenAI API", "Tailwind", "Firebase"],
    //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    //   github: "#",
    //   live: "#"
    // },

    {
      title: "Student Platform",
      description: "A secure social platform for students with real-time resource sharing and instant messaging.",
      tech: ["Python", "Django", "SQLite", "HTML/CSS"],
      //   image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1523240715639-9538dcd9912b?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/TamannaZaman", // Tmi pore exact link boshabe
      live: "#"
    },
    {
      title: "Bangla Fake News Detection",
      description: "NLP-based research project using BERT model to identify misinformation in Bangla text.",
      tech: ["NLP", "BERT Model", "Python", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/TamannaZaman",
      live: "#"
    },
    {
      title: "eFlyer eCom",
      description: "Full-featured e-commerce website with product listings, shopping cart, order management, payment integration and admin dashboard.",
      tech: ["Django", "Python", "Bootstrap", "MySQL"],
      //   image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/TamannaZaman",
      live: "#"
    },
    {
      title: "Meeting Point",
      description: "Real-time web application for connecting users based on specific interests and logic.",
      tech: ["Django", "Python", "JavaScript", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/TamannaZaman",
      live: "#"
    },
    {
      title: "Obstacle Avoidance Robot",
      description: "Autonomous robotic car with voice command integration and obstacle detection logic.",
      tech: ["Arduino", "Robotics", "C++", "Hardware"],
      //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/TamannaZaman",
      live: "#"
    }

  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-indigo-500">Projects</span></h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-slate-800 rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-all shadow-xl"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.live} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;