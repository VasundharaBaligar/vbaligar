import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import facialMotionImage from "@/assets/project-facial-motion.jpg";
import holeFillingImage from "@/assets/project-hole-filling.png";
import textureInputImage from "@/assets/project-texture-input.png";
import textureOutputImage from "@/assets/project-texture-output.png";
import iiscSetupImage from "@/assets/project-iisc-setup.png";
import iiscOutputImage from "@/assets/project-iisc-output.png";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const projects = [
  {
    title: "Real-Time Facial Emotion Mapping",
    venue: "Computer Vision & Graphics Project",
    description:
      "We developed a real-time facial motion capture system using Python and OpenCV that acts like a digital mirror for 3D avatars. The program uses a standard camera to track 68 specific points on my face, interpreting my head position and expressions in the moment. To ensure the animation looked realistic rather than jittery, we applied smoothing techniques that cleaned up the data before sending it to Blender. This allowed us to control a 3D character's mouth, brows, and head movements instantly with my own face, creating a live link between human perception and robot or avatar action.",
    techStack: ["OpenCV", "Dlib", "Python", "Blender", "NumPy"],
    image: facialMotionImage,
  },
  {
    title: "3D Hole Filling Using Implicit Functions",
    venue: "3D Deep Learning Research",
    description:
      "This project focused on building a smart AI model designed to fix broken or incomplete 3D scans. Using a specialized deep learning architecture (combining PointNet and ResNet), the system analyzes 3D objects with missing parts and automatically learns how to fill in the holes to restore the original shape. Trained on a massive dataset of over 51,000 3D objects, the model successfully reconstructed shapes with over 90% accuracy, demonstrating that it could reliably fix complex, missing data.",
    techStack: ["PyTorch 3D", "Docker", "NVIDIA DGX", "MeshLab"],
    image: holeFillingImage,
    fitImage: true,
  },
  {
    title: "Surface Texture Mapping",
    venue: "IIT Delhi Research Project",
    description:
      "Research conducted at IIT Delhi focused on implementing a neural mesh transfer pipeline to project realistic textures across incomplete 3D brain surfaces. By utilizing progressive positional encoding, the system preserved high-frequency geometric details critical for accurate visualization. The project also involved reconstructing partial brain meshes by identifying and aligning anatomical keypoints between source and target surfaces, which enabled realistic cortical deformation and precise structural alignment.",
    techStack: ["PyTorch", "Open3D", "CUDA"],
    image: textureInputImage,
    imageAlt: textureOutputImage,
    fitImage: true,
  },
  {
    title: "Demand Response & Anomaly Detection",
    venue: "IISc Research Project",
    description: (
      <>
        This research developed a home energy management system integrating Demand Response with Non-Intrusive Load Monitoring (NILM) to optimize electricity usage. A Cumulative Sum (CUSUM) algorithm was implemented to detect abnormal energy patterns by tracking deviations from average consumption, utilizing the recursive equation <InlineMath math="S(t) = S(t-1) + [E(t) - E_{av}]" />. Validated on the real-world REDD dataset, the system successfully identified high-power anomalies and enabled load scheduling to mitigate grid stress during peak hours.
      </>
    ),
    techStack: ["Python", "NILM", "Signal Processing", "Data Analysis"],
    image: iiscSetupImage,
    imageAlt: iiscOutputImage,
    fitImage: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 px-6 bg-background">
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
            Featured Work
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-charcoal">
            Research Projects
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="divide-y divide-border">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
