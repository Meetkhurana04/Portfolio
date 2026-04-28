import "./styles/TechStack.css";

const skillCategories = [
  {
    title: "Core Languages",
    skills: [
      { name: "Python", badge: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
      { name: "Java", badge: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" },
      { name: "JavaScript", badge: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
      { name: "C++", badge: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Flask", badge: "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" },
      { name: "Node.js", badge: "https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" },
      { name: "Spring Boot", badge: "https://img.shields.io/badge/spring_boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" },
      { name: "REST", badge: "https://img.shields.io/badge/rest_api-2F2F2F?style=for-the-badge&logo=rest&logoColor=white" },
    ],
  },
  {
    title: "Scraping & Automation",
    skills: [
      { name: "Selenium", badge: "https://img.shields.io/badge/selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white" },
      { name: "BeautifulSoup", badge: "https://img.shields.io/badge/beautifulsoup-2F2F2F?style=for-the-badge&logo=beautifulsoup&logoColor=white" },
      { name: "Cloudflare", badge: "https://img.shields.io/badge/cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" },
      { name: "Docker", badge: "https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" },
      { name: "MySQL", badge: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" },
      { name: "PostgreSQL", badge: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" },
      { name: "Firebase", badge: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" },
    ],
  },
  {
    title: "Tools & Tech",
    skills: [
      { name: "Git", badge: "https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white" },
      { name: "VS Code", badge: "https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudio&logoColor=white" },
      { name: "Render", badge: "https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white" },
      { name: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
    ],
  },
  {
    title: "Data & Analysis",
    skills: [
      { name: "Pandas", badge: "https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" },
      { name: "NumPy", badge: "https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" },
      { name: "Plotly", badge: "https://img.shields.io/badge/Plotly-3F4F9F?style=for-the-badge&logo=plotly&logoColor=white" },
      { name: "Matplotlib", badge: "https://img.shields.io/badge/Matplotlib-FF6F00?style=for-the-badge&logo=matplotlib&logoColor=white" },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "DSA", badge: "https://img.shields.io/badge/DSA-14B8A6?style=for-the-badge&logo=algorithm&logoColor=white" },
      { name: "OOPs", badge: "https://img.shields.io/badge/OOPs-64748B?style=for-the-badge&logo=class&logoColor=white" },
      { name: "DBMS", badge: "https://img.shields.io/badge/DBMS-336791?style=for-the-badge&logo=database&logoColor=white" },
      { name: "System Design", badge: "https://img.shields.io/badge/System_Design-0D9488?style=for-the-badge&logo=architecture&logoColor=white" },
    ],
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
              <div className="techstack-badges">
                {category.skills.map((skill, j) => (
                  <img
                    key={j}
                    src={skill.badge}
                    alt={skill.name}
                    className="techstack-badge-img"
                  />
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