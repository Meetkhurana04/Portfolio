import "./styles/Career.css";

const achievements = [
  { title: "Winner", event: "Best FinTech Innovation", venue: "ABESEC Hackathon 2026", detail: "Beat 38 teams" },
  { title: "Runner-Up", event: "Futurix 2026", venue: "Dronacharya College of Engineering", detail: "2nd Prize" },
  { title: "Runner-Up", event: "Software Track", venue: "Nextify Hackathon 2026", detail: "50 teams" },
  { title: "2nd Runner-Up", event: "Software Track", venue: "HackMSIT 2026", detail: "Top 10/60 teams" },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Intern</h4>
                <h5>AI Innerscope Technology Pvt. Ltd.</h5>
              </div>
              <h3>Jun 2025 – Jul 2025</h3>
            </div>
            <p>
              Built Dockerized WhatsApp automation bot using Python + Selenium. Developed RBAC-based 
              security controls with dynamic UI configuration. Designed and implemented Fee Management 
              Module end-to-end. Engineered an analytics dashboard with 10+ interactive graphs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Computer Science (AI & ML)</h4>
                <h5>Dronacharya College of Engineering</h5>
              </div>
              <h3>Aug 2023 – May 2027</h3>
            </div>
            <p>
              GPA: 8.3/10. Relevant coursework: DSA, DBMS, Computer Networks, Operating Systems, 
              Design & Analysis of Algorithms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Wins</h4>
                <h5>4 Wins · 7 Competitions</h5>
              </div>
            </div>
            <div className="achievements-grid">
              {achievements.map((ach, i) => (
                <div key={i} className="achievement-card">
                  <span className="ach-badge">{ach.title}</span>
                  <h4>{ach.event}</h4>
                  <p>{ach.venue}</p>
                  <span className="ach-detail">{ach.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
