import data from "../data/portfolioData";

function Footer() {
  return (
    <footer className="footer">

      <h3>{data.personalInfo.name}</h3>

      <p>{data.personalInfo.role}</p>

      <div className="footer-links">

        <a
          href={data.personalInfo.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href={data.personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </div>

      <p className="copyright">
        © 2026 {data.personalInfo.name}. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;