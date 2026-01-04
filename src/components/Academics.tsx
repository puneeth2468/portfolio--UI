import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const academics = [
  {
    degree: "B.Tech in Data Science",
    institution: "Malla Reddy University",
    location: "Hyderabad",
    duration: "2022 – 2026",
    grade: "8.3 CGPA",
    type: "current",
  },
  {
    degree: "Intermediate Education",
    institution: "Sri Chaitanya Junior Kalasala",
    location: "Hyderabad",
    duration: "2020 – 2022",
    grade: "9.5 CGPA",
    type: "completed",
  },
  {
    degree: "Secondary Education",
    institution: "St. Peter's Model School",
    location: "",
    duration: "2019 – 2020",
    grade: "9.5 CGPA",
    type: "completed",
  },
];

const Academics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="academics" className="py-24 relative">
      <div className="absolute inset-0 hero-glow opacity-30" />
      
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
            Academic <span className="gradient-text">Journey</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-12 rounded-full"
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

            {academics.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 glow z-10" />

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`glass rounded-2xl p-6 ${item.type === "current" ? "border border-primary/30" : ""}`}
                  >
                    {item.type === "current" && (
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                        Current
                      </span>
                    )}
                    
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-bold">{item.degree}</h3>
                    </div>
                    
                    <p className="text-muted-foreground font-medium mb-3">{item.institution}</p>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {item.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1 text-primary">
                        <Award className="w-4 h-4" />
                        {item.grade}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academics;
