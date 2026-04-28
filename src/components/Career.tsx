import "./styles/Career.css";

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
        </div>
      </div>
    </div>
  );
};

export default Career;
