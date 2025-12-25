import { motion } from "framer-motion";
import { Mail, Linkedin, Github, GraduationCap, Code2 } from "lucide-react";

const education = [
  {
    degree: "MS in Computer Science",
    institution: "UMass Amherst",
    period: "2025 - 2027",
  },
  {
    degree: "BE in Electronics & Communication",
    institution: "KLE Technological University",
    period: "2020 - 2024",
  },
];

const skills = [
  "Python",
  "PyTorch3D",
  "Open3D",
  "Blender",
  "CUDA",
  "OpenCV",
  "TensorFlow",
  "NumPy",
];

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:vbaligar@umass.edu",
    display: "vbaligar@umass.edu",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/vvbaligar",
    display: "vvbaligar",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/VasundharaBaligar",
    display: "Vasundhara Baligar",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 px-6 bg-hero-gradient">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-primary text-sm font-sans tracking-widest uppercase mb-4">
            Get to Know Me
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-charcoal">
            About & Contact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="pl-4 border-l-2 border-primary/30"
                >
                  <h4 className="font-sans font-medium text-slate-text">
                    {edu.degree}
                  </h4>
                  <p className="text-muted-foreground font-sans text-sm">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground font-sans text-xs mt-1">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal">
                Technical Skills
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-sm font-sans font-medium rounded-full bg-card border border-border text-slate-text shadow-soft transition-shadow hover:shadow-soft-lg"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal">
                Get in Touch
              </h3>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all shadow-soft hover:shadow-soft-lg group"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide">
                      {link.label}
                    </p>
                    <p className="font-sans text-sm text-slate-text font-medium">
                      {link.display}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
