import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faServer, faLink } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import { motion } from "motion/react";
import "../assets/styles/Expertise.scss";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const labelsFirst = [
  "Unreal Engine",
  "C++",
  "Blueprints",
  "AngelScript",
  "C#",
  "Unity",
  "UBA",
  "Horde",
  "Dedicated Servers",
];

const labelsSecond = [
  "Node.js",
  "TypeScript",
  "Kubernetes",
  "Pulumi",
  "Docker",
  "Cloud",
  "Linux",
  "CI/CD",
  "Microservices",
];

const labelsThird = [
  "Ethereum",
  "Solidity",
  "Node.js",
  "React",
  "DevOps",
  "LLM Agents",
  "MATLAB",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          Expertise
        </motion.h1>
        <motion.div
          className="skills-grid"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faGamepad} size="3x" />
            <h3>Game Engine & Multiplayer Development</h3>
            <p>
              Deep expertise in Unreal Engine C++ development, replicated gameplay
              systems, dedicated server optimization, and build acceleration.
              Published 3 plugins on Fab (all rated 5.0) and made 6 accepted
              engine-level contributions to Unreal Engine.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </motion.div>

          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faServer} size="3x" />
            <h3>Backend & Infrastructure</h3>
            <p>
              Architected scalable multiplayer backends with Node.js/TypeScript
              microservices and Kubernetes-based infrastructure using
              Infrastructure-as-Code. Experienced in cloud infrastructure,
              CI/CD pipelines, and deployment automation.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </motion.div>

          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faLink} size="3x" />
            <h3>Blockchain & Emerging Tech</h3>
            <p>
              Led engineering for a blockchain developer SaaS platform and
              contributed to Ethereum infrastructure tooling. Currently
              exploring LLM agentic workflows for in-editor and runtime AI
              agent actions in Unreal Engine.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Expertise;
