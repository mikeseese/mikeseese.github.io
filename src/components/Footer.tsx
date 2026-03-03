import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/mikeseese"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://linkedin.com/in/mikeseese/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://resume.mikeseese.com/assets/latest.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <ArticleIcon />
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Mike Seese
      </p>
    </footer>
  );
}

export default Footer;
