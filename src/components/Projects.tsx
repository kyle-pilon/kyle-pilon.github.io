import './../styles/Projects.css';
import exsumImage from '../assets/ezsum.png';
import nasawildfireImage from '../assets/nasa-wildfire-project.png';
import spotifyuImage from '../assets/spotifyU.png';

// Define an interface for the project data structure
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string; 
  techStack: string[];
  liveUrl?: string; // Optional live demo link
  repoUrl?: string; // Optional repository link
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Ezsum',
    description: 'A brief description of Project One, highlighting its purpose and key features. What problem does it solve?',
    imageUrl: exsumImage, 
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    liveUrl: 'https://ezsum.netlify.app/', 
    repoUrl: 'https://github.com/kyle-pilon/Ezsum', 
  },
  {
    id: 2,
    title: 'NASA Wildfire Data Visualizer',
    description: 'This project focused on [mention specific skill, e.g., data visualization, API integration]. Learned a lot about [mention technology/concept].',
    imageUrl: nasawildfireImage,
    techStack: ['Python', 'Flask', 'D3.js', 'MongoDB'],
    repoUrl: 'https://github.com/kyle-pilon/CosmicComets-NASA',
  },
  {
    id: 3,
    title: 'SpotifyU',
    description: 'An exploration into [mention area, e.g., machine learning, mobile dev]. Backend-focused or perhaps a CLI tool.',
    imageUrl: spotifyuImage,
    techStack: ['Java', 'Spring Boot', 'AWS S3'],
    repoUrl: 'https://github.com/kyle-pilon/SpotifyU',
  },
];


const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects">
            <h2>PROJECTS</h2>
            <div className="projects-container">
                {projectsData.map((project) => ( // Add index here if needed for CSS, but :nth-child is better
                    // Add alternating class if needed, but :nth-child is cleaner
                    <div key={project.id} className="project-card">
                        {/* Image Wrapper */}
                        <div className="project-image-wrapper">
                            <img src={project.imageUrl} alt={`${project.title} preview`} className="project-image" />
                        </div>

                        {/* Info Wrapper */}
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech-stack">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-button">
                                        Live Demo
                                    </a>
                                )}
                                {project.repoUrl && (
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link-button">
                                        GitHub Repo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;