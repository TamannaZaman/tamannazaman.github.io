import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';  // Importing an icon for the experience section.

const Experience = () => {
  // Define your work experiences. You can customize this data as needed.
  const experiences = [
    {
      role: "Digital Accessibility Auditor",
      company: "a2i - Innovate for All",
      period: "June 2023 – Present",
      points: [
        "Conducting accessibility audits following WCAG standards.",
        "Providing technical feedback to improve web usability.",
        "Evaluating government platforms for digital inclusion."
      ]
    },
    {
      role: "Director (Management)",
      company: "Bangladesh Wheelchair Sports Foundation®",
      period: "July 2023 – Present",
      points: [
        "Driving organization's mission and managing technical maintenance.",
        "Designed a custom Digital Accessibility Menu for PWDs.",
        "Leading community initiatives for social impact."]
    },
    {
      role: "Backend Developer Trainee",
      company: "Eutropia IT Solution",
      period: "Feb 2023 – April 2023",
      points: [
        "Developed backend logic using Python/Django.",
        "Used Test-Driven Development (TDD) for code reliability and integrated services using MVT architecture.",
        "Collaborated with the CTO to meet project deadlines and technical requirements."]
    }
  ];

  // Render the Experience section with animated experience cards.
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Work <span className="text-indigo-500">Experience</span></h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}   // Stagger the animation for each experience card.
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-indigo-500/20"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-900" />
              <div className="flex flex-wrap justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-indigo-400 text-sm font-mono">{exp.period}</span>
              </div>
              <p className="text-indigo-300 font-medium mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> {exp.company}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default Experience;