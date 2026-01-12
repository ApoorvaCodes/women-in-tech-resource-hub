import { useEffect, useRef, useState } from "react";

function ResourceSection({ title, icon, resources }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section fade-slide ${isVisible ? "visible" : ""}`}
      id={title.toLowerCase().replace(/\s/g, "")}
    >
      <div className="section-header">
        <img src={icon} alt={`${title} icon`} />
        <h2>{title}</h2>
      </div>

      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link} target="_blank" rel="noreferrer">
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ResourceSection;
