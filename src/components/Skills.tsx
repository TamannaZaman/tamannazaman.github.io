import { motion } from 'framer-motion';
import { Code2, Layout, Database, Terminal } from 'lucide-react';   // Importing icons for skill categories.

const Skills = () => {
  // skill Categories array with title, icon and list of skills for each category.
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6 text-indigo-400" />,
      skills: ["Python", "JavaScript", "C++", "C", "SQL"]
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      skills: ["Django", "MySQL", "SQLite", "REST APIs", "Django REST Framework"]
    },
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      skills: ["HTML", "CSS", "Bootstrap", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Tools & Platforms",
      icon: <Terminal className="w-6 h-6 text-indigo-400" />,
      skills: ["Git", "GitHub", "Linux", "Arduino/Robotics", "VS Code"]
    },
    {
      title: "Specialized",
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      skills: ["Digital Accessibility", "NLP/BERT", "XLM-RoBERTa"]
    }
  ];

  // Render the Skills section with animated skill cards.
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        
        {/* // Section Title. */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-indigo-500">Skills</span></h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-slate-800 rounded-2xl border border-white/5 hover:border-indigo-500/50 transition-all group"
            >
              <div className="mb-4 p-3 bg-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-900 text-gray-400 text-sm rounded-md border border-white/5 hover:text-indigo-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
// This is the Skills component, which showcases your technical skills in a visually appealing way. Each skill category has an icon, a title, and a list of relevant skills. The component uses Framer Motion for animations and Tailwind CSS for styling. You can customize the skill categories, icons, and skills as needed to better reflect your expertise and experience.