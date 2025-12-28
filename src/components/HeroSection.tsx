import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-hero-gradient px-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-rose-gold-light/20 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-primary/10 blur-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-soft-lg">
            <img
              src={profilePhoto}
              alt="Vasundhara Vishwanath Baligar"
              className="w-full h-full object-cover scale-125"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-charcoal leading-tight mb-6"
        >
          Namaste, I'm{" "}
          <span className="text-gradient whitespace-nowrap">Vasundhara Vishwanath Baligar.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 font-sans font-light leading-relaxed text-justify"
        >
          <p className="mb-4">
            Master's student in Computer Science at{" "}
            <span className="text-slate-text font-medium">UMass Amherst</span>, specializing in{" "}
            <span className="text-primary font-medium">3D Computer Vision</span> and{" "}
            <span className="text-primary font-medium">Machine Learning</span>.
          </p>
          <p className="mb-4">
            Most recently, I was a Visiting Researcher at the{" "}
            <span className="text-slate-text font-medium">University of Wyoming</span> working with Dr. Shivanand Sheshappanavar on 3D Visual Question Answering (VQA). Previously, I conducted research at{" "}
            <span className="text-slate-text font-medium">IIT Delhi</span> on neural mesh transfer for brain surfaces under Prof. Subodh Kumar, and at{" "}
            <span className="text-slate-text font-medium">IISc</span> on anomaly detection systems with Dr. Subba Reddy B.
          </p>
          <p>
            My work focuses on geometric deep learning tasks, including point cloud completion and surface reconstruction.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-6 mb-10"
        >
          <a
            href="https://github.com/VasundharaBaligar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
          >
            <FileText className="w-5 h-5" />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vasundhara-v-baligar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
          >
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:vbaligar@umass.edu"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
          >
            <Mail className="w-5 h-5" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -4px rgba(180, 120, 130, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium text-base shadow-soft hover:shadow-soft-lg transition-all duration-300"
        >
          View Research
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      </div>

    </section>
  );
};

export default HeroSection;
