import "./styles/Achievements.css";

const achievements = [
  { title: "Winner", event: "Best FinTech Innovation", venue: "ABESEC Hackathon 2026", detail: "Beat 38 teams" },
  { title: "Runner-Up", event: "Futurix 2026", venue: "Dronacharya College of Engineering", detail: "2nd Prize" },
  { title: "Runner-Up", event: "Nextify 2026", venue: "Sushant University", detail: "Overall 2nd · 50 teams" },
  { title: "Runner-Up 2nd", event: "HackMSIT 2026", venue: "", detail: "Top 10/60 teams" },
  { title: "Winner", event: "Matiks League", venue: "Aptitude & Problem Solving", detail: "Highest rating in 7 days · 200 participants" },
  { title: "Runner-Up 2nd", event: "Dronathon Code Manthan", venue: "DSA Coding Competition", detail: "" },
  { title: "Rank", event: "GeeksForGeeks", venue: "", detail: "Top 5% among 1,400+ participants" },
];

const getBadgeClass = (title: string) => {
  if (title === "Winner") return "winner";
  if (title === "Runner-Up") return "runner-up";
  if (title === "Runner-Up 2nd") return "runner-up-2";
  if (title === "Rank") return "rank";
  return "";
};

const getEmoji = (title: string) => {
  if (title === "Winner") return "🏆";
  if (title === "Runner-Up") return "🥈";
  if (title === "Runner-Up 2nd") return "🥉";
  return "🎯";
};

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((ach, i) => (
            <div key={i} className="achievement-card">
              <span className={`ach-badge ${getBadgeClass(ach.title)}`}>
                {getEmoji(ach.title)} {ach.title}
              </span>
              <h4>{ach.event}</h4>
              {ach.venue && <p className="ach-venue">{ach.venue}</p>}
              <span className="ach-detail">{ach.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;