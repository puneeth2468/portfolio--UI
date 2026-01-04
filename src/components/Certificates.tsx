import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  { title: "LLMs with Cohere API", issuer: "Microsoft Student Ambassadors" },
  { title: "Introduction to Power BI", issuer: "Microsoft Learn" },
  { title: "Cloud Skills Challenge", issuer: "Microsoft Learn" },
  { title: "Introduction to Python", issuer: "University of Pennsylvania" },
  { title: "Web Development Fundamentals", issuer: "IBM SkillsBuild" },
  { title: "Generative Adversarial Networks", issuer: "Infosys Springboard" },
  { title: "Programming Fundamentals", issuer: "Duke University" },
  { title: "TCS iON Career Edge", issuer: "Tata Consultancy Services" },
  { title: "Basics of Python", issuer: "Infosys Springboard" },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
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
            Certifications & <span className="gradient-text">Achievements</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-12 rounded-full"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="glass rounded-xl p-5 group cursor-pointer hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1 truncate">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground truncate">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
