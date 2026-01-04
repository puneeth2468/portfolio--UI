import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML", level: 90, color: "from-orange-500 to-orange-600" },
  { name: "CSS", level: 85, color: "from-blue-500 to-blue-600" },
  { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-500" },
  { name: "Python", level: 88, color: "from-green-500 to-green-600" },
  { name: "Java", level: 75, color: "from-red-500 to-red-600" },
  { name: "SQL", level: 82, color: "from-cyan-500 to-cyan-600" },
  { name: "AWS", level: 70, color: "from-amber-500 to-orange-500" },
  { name: "React", level: 78, color: "from-sky-400 to-blue-500" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 hero-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-12 rounded-full"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
