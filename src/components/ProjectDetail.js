import { useParams, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import projectsData from "../data/projectsData";
import styles from "../styles/ProjectDetail.module.css";

// ✅ Lightbox
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const project = projectsData.find((p) => p.id.toString() === id);

    if (!project) return <h2 className={styles.notFound}>Project not found</h2>;

    const handleBack = () => {
        navigate("/");
        setTimeout(() => {
            scroller.scrollTo("projects", {
                smooth: true,
                duration: 600,
                offset: -70,
            });
        }, 100);
    };

    return (
        <div className={styles.projectDetail}>
            <h2>{project.title}</h2>

            {project.images && project.images.length > 0 && (
                <div className={styles.imageGallery}>
                    {project.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${project.title} ${index + 1}`}
                            className={styles.detailImg}
                            onClick={() => {
                                setPhotoIndex(index);
                                setOpen(true);
                            }}
                        />
                    ))}
                </div>
            )}

            <p className={styles.description}>{project.fullDesc}</p>

            {project.tech && project.tech.length > 0 && (
                <div className={styles.techStack}>
                    <h4>Tech Stack</h4>
                    <ul>
                        {project.tech.map((t, index) => (
                            <li key={index}>{t}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className={styles.links}>
                {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                )}
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                )}
                <button onClick={handleBack} className={styles.backBtn}>
                    ← Back to Projects
                </button>
            </div>

            {/* ✅ Lightbox Popup */}
            {open && (
                <Lightbox
                    open={open}
                    index={photoIndex}
                    close={() => setOpen(false)}
                    slides={project.images.map((img) => ({ src: img }))}
                />
            )}
        </div>
    );
}

export default ProjectDetail;
