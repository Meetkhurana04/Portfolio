import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/meetkhurana04/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — meetkhurana04
              </a>
            </p>
            <p>
              <a
                href="mailto:Meetwillstudy@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Meetwillstudy@gmail.com
              </a>
            </p>
            <p>+91 8076570883</p>
            <h4>Education</h4>
            <p>
              B.Tech — Computer Science (AI & ML)
              <br />
              Dronacharya College of Engineering, Gurugram
              <br />
              GPA: 8.3/10 · Aug 2023 – May 2027
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/meetkhurana04"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/meetkhurana04/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/meetshrvrve/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
            <a
              href="https://twitter.com/meetkhurana04"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Meet Khurana</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
