import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  venue?: string;
  description: string;
  techStack: string[];
  image: string;
  index: number;
  arxivLink?: string;
  githubLink?: string;
}

const ProjectCard = ({
  title,
  venue,
  description,
  techStack,
  image,
  index,
  arxivLink,
  githubLink,
}: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20"
    >
      {/* Visual Side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`relative ${!isEven ? "lg:order-2" : ""}`}
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-card-gradient border border-border shadow-soft-lg group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-charcoal/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-primary-foreground font-sans text-sm tracking-wide px-4 py-2 rounded-full bg-primary/80 backdrop-blur-sm">
              View Details
            </span>
          </motion.div>
        </div>

        {/* Decorative gradient blob */}
        <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 blur-sm" />
      </motion.div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`space-y-5 ${!isEven ? "lg:order-1" : ""}`}
      >
        {/* Title & Venue */}
        <div>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal leading-snug mb-2">
            {title}
          </h3>
          {venue && (
            <p className="text-primary font-sans text-sm font-medium tracking-wide">
              {venue}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground font-sans text-base leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-sans font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {arxivLink && (
            <a
              href={arxivLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-sans font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              arXiv
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-sans font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;
