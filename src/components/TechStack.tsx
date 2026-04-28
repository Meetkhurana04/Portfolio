import "./styles/TechStack.css";

const skillCategories = [
  {
    title: "Core Languages",
    skills: ["Python", "Java", "JavaScript", "C++ (STL)"],
  },
  {
    title: "Backend & APIs",
    skills: ["Flask", "Node.js", "REST APIs", "Spring Boot", "Servlet/JSP", "JPA/Hibernate"],
  },
  {
    title: "Scraping & Automation",
    skills: ["Selenium", "BeautifulSoup", "Regex", "Cloudflare Workers", "USSD/GSM"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Supabase", "Firebase"],
  },
  {
    title: "Infrastructure & Tools",
    skills: ["Docker", "Git", "Postman", "VS Code", "Socket.IO", "Render"],
  },
  {
    title: "Data & Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "EDA"],
  },
  {
    title: "Concepts",
    skills: ["DSA", "OOPs", "DBMS", "OS", "Computer Networks", "System Design"],
  },
];

const TechStack = () => {
  return (
    <div className="techstack-section section-container" id="techstack">
      <div className="techstack-container">
        <h2>Tech Stack</h2>
        <div className="techstack-grid">
          {skillCategories.map((category, i) => (
            <div key={i} className="techstack-card">
              <h3>{category.title}</h3>
              <div className="techstack-tags">
                {category.skills.map((skill, j) => (
                  <span key={j} className="techstack-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;