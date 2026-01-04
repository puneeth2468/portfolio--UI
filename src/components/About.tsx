import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Cloud, Brain } from "lucide-react";

const highlights = [
  { icon: Code, label: "Web Development", color: "text-primary" },
  { icon: Database, label: "Data Analytics", color: "text-primary" },
  { icon: Brain, label: "Machine Learning", color: "text-primary" },
  { icon: Cloud, label: "Cloud Computing", color: "text-primary" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-12 rounded-full"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-8 mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-medium">Puneeth Bandi</span>, 
              currently pursuing B.Tech in Data Science, passionate about solving 
              real-world problems. With strong foundations in{" "}
              <span className="text-primary">Python, Java, SQL, Data Analytics, 
              Machine Learning, Deep Learning</span>, and{" "}
              <span className="text-primary">Cloud Computing</span>, I'm excited 
              to showcase my skills and contribute to tech, ensuring a better 
              tomorrow through coding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 text-center group hover:glow transition-all cursor-default"
              >
                <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color} group-hover:scale-110 transition-transform`} />
                <p className="text-sm font-medium">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
