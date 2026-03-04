import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "motion/react";
import "../assets/styles/Main.scss";
import avatar from "../assets/images/avatar.png";

const heroVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <motion.div
          className="image-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img src={avatar} alt="Mike Seese" />
        </motion.div>
        <motion.div
          className="content"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="social_icons" variants={heroItemVariants}>
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
            <a href="mailto:mike@incanta.dev" rel="noreferrer">
              <EmailIcon />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              title="Resume"
            >
              <ArticleIcon />
            </a>
          </motion.div>
          <motion.h1 variants={heroItemVariants}>Mike Seese</motion.h1>
          <motion.p variants={heroItemVariants}>
            Founder / Lead Developer at Incanta Games
          </motion.p>
          <motion.p variants={heroItemVariants}>Vancouver, WA, USA</motion.p>

          <motion.div
            className="mobile_social_icons"
            variants={heroItemVariants}
          >
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
            <a href="mailto:mike@incanta.dev" rel="noreferrer">
              <EmailIcon />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              title="Resume"
            >
              <ArticleIcon />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <KeyboardArrowDownIcon className="scroll-hint-icon" />
        </motion.div>
      </div>
    </div>
  );
}

export default Main;
