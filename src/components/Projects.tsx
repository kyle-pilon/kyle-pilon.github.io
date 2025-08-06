import { useEffect, useRef, useState } from 'react';
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
    description: 'An intelligent document summarization tool that transforms lengthy texts into concise, actionable insights. Built with modern web technologies to help users quickly digest complex information.',
    imageUrl: exsumImage, 
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    liveUrl: 'https://ezsum.netlify.app/', 
    repoUrl: 'https://github.com/kyle-pilon/Ezsum', 
  },
  {
    id: 2,
    title: 'NASA Wildfire Data Visualizer',
    description: 'Interactive data visualization platform that transforms NASA wildfire datasets into compelling visual stories. Features real-time data processing and dynamic charting capabilities.',
    imageUrl: nasawildfireImage,
    techStack: ['Python', 'Flask', 'D3.js', 'MongoDB'],
    repoUrl: 'https://github.com/kyle-pilon/CosmicComets-NASA',
  },
  {
    id: 3,
    title: 'SpotifyU',
    description: 'A comprehensive music discovery platform that leverages Spotify\'s API to provide personalized recommendations and playlist management with advanced filtering capabilities.',
    imageUrl: spotifyuImage,
    techStack: ['Java', 'Spring Boot', 'AWS S3'],
    repoUrl: 'https://github.com/kyle-pilon/SpotifyU',
  },
];

const Projects: React.FC = () => {
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
                    if (entry.isIntersecting) {
                        setVisibleCards(prev => new Set([...prev, cardIndex]));
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '-50px 0px -50px 0px'
            }
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            cardRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section id="projects" className="projects">
            <h2>PROJECTS</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div 
                        key={project.id} 
                        className={`project-card ${visibleCards.has(index) ? 'visible' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
                        data-index={index}
                        ref={el => cardRefs.current[index] = el}
                    >
                        <div className="project-content">
                            <div className="project-text">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech-stack">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <a 
                                href={project.liveUrl || project.repoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-image-wrapper"
                            >
                                <img 
                                    src={project.imageUrl} 
                                    alt={`${project.title} preview`} 
                                    className="project-image" 
                                />
                                <div className="image-overlay">
                                    <span className="overlay-text">
                                        {project.liveUrl ? 'View Demo' : 'View Repository'}
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;