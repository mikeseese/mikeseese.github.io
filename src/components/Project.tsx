import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "motion/react";
import "../assets/styles/Project.scss";
import checkpointImg from "../assets/images/checkpoint.png";
import chromiumviewVid from "../assets/images/chromiumview.mp4";
import hathoraImg from "../assets/images/hathora.jpg";
import gardensImg from "../assets/images/gardens.jpg";

function VideoLightbox({ src, onClose }: { src: string; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const isVideo = /\.(mp4|webm|ogg)$/i.test(src);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="lightbox-overlay"
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        &times;
      </button>
      {isVideo ? (
        <video
          src={src}
          className="lightbox-video"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      ) : (
        <img src={src} className="lightbox-video" alt="" />
      )}
    </div>
  );
}

const PLUGINS = [
  {
    href: "https://www.fab.com/listings/9020eef3-f598-473d-9964-84ad507002be",
    src: "https://media.fab.com/image_previews/gallery_images/d11d19a8-2198-43c9-852c-f23c931d5d7e/4ff06efc-bef6-40da-b8e0-2d0e028d7103.jpg",
    alt: "FileSDK",
  },
  {
    href: "https://www.fab.com/listings/1f5fc0dd-6b38-475b-8e5d-4dddae0d5852",
    src: "https://media.fab.com/image_previews/gallery_images/ee5265f4-3af6-447b-80da-1548be0505d4/5a3c4f6e-14fe-4bf9-b336-14c31ff16f93.jpg",
    alt: "Blueprint CSV Parsing",
  },
  {
    href: "https://www.fab.com/listings/cacabb1a-763b-4703-b993-a6f6ca5b807c",
    src: "https://media.fab.com/image_previews/gallery_images/c79e1db3-5f34-400c-bbf7-bf670bfdeec8/6f98b382-9544-4067-9902-5dd70c3ffbfc.jpg",
    alt: "Zen Dev",
  },
];

function PluginCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);

  const prev = useCallback(() => {
    setPaused(true);
    setIndex((i) => (i - 1 + PLUGINS.length) % PLUGINS.length);
  }, []);

  const next = useCallback(() => {
    setPaused(true);
    setIndex((i) => (i + 1) % PLUGINS.length);
  }, []);

  const goTo = useCallback((i: number) => {
    setPaused(true);
    setIndex(i);
  }, []);

  useEffect(() => {
    if (paused) {
      const resume = setTimeout(() => setPaused(false), 4000);
      return () => clearTimeout(resume);
    }
  }, [paused, index]);

  useEffect(() => {
    if (paused || hovering) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % PLUGINS.length),
      4500
    );
    return () => clearInterval(id);
  }, [paused, hovering]);

  const plugin = PLUGINS[index];

  return (
    <div
      className="plugin-carousel"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="plugin-carousel-track">
        <a href={plugin.href} target="_blank" rel="noreferrer">
          <img src={plugin.src} className="project-thumb" alt={plugin.alt} />
        </a>
        <button
          className="carousel-btn carousel-btn--prev"
          onClick={prev}
          aria-label="Previous"
        >
          &#8249;
        </button>
        <button
          className="carousel-btn carousel-btn--next"
          onClick={next}
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>
      <div className="carousel-dots">
        {PLUGINS.map((p, i) => (
          <button
            key={p.alt}
            className={`carousel-dot${i === index ? " carousel-dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={p.alt}
          />
        ))}
      </div>
    </div>
  );
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function Project() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div className="projects-container" id="projects">
      {lightboxSrc && (
        <VideoLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
      >
        Notable Projects &amp; Client Work
      </motion.h1>
      <motion.div
        className="projects-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div className="project" variants={cardVariants}>
          <a
            href="https://redwoodmultiplayer.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.youtube.com/vi/YkwOrgSVNqo/hqdefault.jpg"
              className="project-thumb"
              alt="Redwood Multiplayer Backend"
            />
          </a>
          <a
            href="https://redwoodmultiplayer.com"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Redwood Multiplayer Backend</h2>
          </a>
          <p>
            A scalable self-hosted multiplayer backend with Node.js/TypeScript
            microservices and Kubernetes-based infrastructure using Pulumi IaC.
            Awarded a <strong>$25k Epic MegaGrant</strong>.
          </p>
        </motion.div>
        <motion.div className="project" variants={cardVariants}>
          <a
            href="https://github.com/incanta/Checkpoint"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={checkpointImg}
              className="project-thumb"
              alt="Checkpoint Version Control"
            />
          </a>
          <a
            href="https://github.com/incanta/Checkpoint"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Checkpoint Version Control</h2>
          </a>
          <p>
            Open source, free to self-host version control for games, virtual
            production, and other large file projects.
          </p>
        </motion.div>
        <motion.div className="project" variants={cardVariants}>
          <button
            className="video-thumb-btn"
            onClick={() => setLightboxSrc(chromiumviewVid)}
            aria-label="Play ChromiumView demo"
          >
            <video
              src={chromiumviewVid}
              className="project-thumb"
              autoPlay
              muted
              loop
              playsInline
            />
          </button>
          <a
            href="https://github.com/incanta/ChromiumView"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Unreal Engine ChromiumView Plugin</h2>
          </a>
          <p>
            Open source plugin enabling web rendering (React, Solid, Preact)
            integrated with UE's MVVM plugin for powerful in-engine UI.
          </p>
        </motion.div>
        <motion.div className="project" variants={cardVariants}>
          <a href="https://hathora.dev/" target="_blank" rel="noreferrer">
            <img src={hathoraImg} className="project-thumb" alt="Hathora" />
          </a>
          <a href="https://hathora.dev" target="_blank" rel="noreferrer">
            <h2>Hathora (Client)</h2>
          </a>
          <p>
            500+ hours (2023–2026) developing Hathora's Unreal Engine SDK,
            Unreal Build Accelerator (UBA) support, and providing Horde and UBA
            consulting to AA-AAA client studios including 1047 Games and Frost
            Giant Studios.
          </p>
        </motion.div>
        <motion.div className="project" variants={cardVariants}>
          <a href="https://jaliresearch.com/" target="_blank" rel="noreferrer">
            <img
              src="https://jaliresearch.com/wp-content/uploads/2022/01/6block1-opt-2048x983.jpg"
              className="project-thumb"
              alt="JALI Research"
            />
          </a>
          <a href="https://jaliresearch.com/" target="_blank" rel="noreferrer">
            <h2>JALI Research (Client)</h2>
          </a>
          <p>
            350+ hours (2022–2024) co-developing JALI's Unreal Engine plugin and
            emotion tagging desktop app for automated lip sync and facial
            animation used by studios like CD PROJEKT RED, Xbox, and Obsidian
            Entertainment.
          </p>
        </motion.div>
        <motion.div className="project" variants={cardVariants}>
          <a href="https://gardens.dev/" target="_blank" rel="noreferrer">
            <img
              src={gardensImg}
              className="project-thumb"
              alt="Gardens Interactive"
            />
          </a>
          <a href="https://gardens.dev/" target="_blank" rel="noreferrer">
            <h2>Gardens Interactive (Client)</h2>
          </a>
          <p>
            60+ hours (2024) implementing forking Linux dedicated servers for
            session optimization and debugging CMC/Gameplay Ability
            desynchronization issues for a studio of Journey, Firewatch, and
            Edith Finch alumni.
          </p>
        </motion.div>
        <motion.div className="project" variants={cardVariants}>
          <PluginCarousel />
          <a
            href="https://www.fab.com/sellers/Incanta"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Unreal Engine Plugins on Fab</h2>
          </a>
          <p>
            Published 3 Unreal Engine C++ plugins (all rated ⭐ 5.0):{" "}
            <a
              href="https://www.fab.com/listings/9020eef3-f598-473d-9964-84ad507002be"
              target="_blank"
              rel="noreferrer"
            >
              FileSDK
            </a>
            ,{" "}
            <a
              href="https://www.fab.com/listings/1f5fc0dd-6b38-475b-8e5d-4dddae0d5852"
              target="_blank"
              rel="noreferrer"
            >
              Blueprint CSV Parsing
            </a>
            , and{" "}
            <a
              href="https://www.fab.com/listings/cacabb1a-763b-4703-b993-a6f6ca5b807c"
              target="_blank"
              rel="noreferrer"
            >
              Zen Dev
            </a>
            . Also developing an upcoming UE5 plugin for LLM agentic workflows.
          </p>
        </motion.div>
        <motion.div className="project" variants={cardVariants}>
          <a
            href="https://www.youtube.com/watch?v=LsQ2Iwd5VMc"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.youtube.com/vi/LsQ2Iwd5VMc/hqdefault.jpg"
              className="project-thumb"
              alt="Truffle Teams overview"
            />
          </a>
          <h2>Truffle Teams & Ganache</h2>
          <p>
            Led engineering for a Node.js-based SaaS DevOps platform serving
            blockchain developers. Developed CLI and GUI tools (Ganache) for
            Ethereum development workflows.
          </p>
        </motion.div>
        <motion.div className="project" variants={cardVariants}>
          <button
            className="video-thumb-btn"
            onClick={() =>
              setLightboxSrc(
                "https://camo.githubusercontent.com/bb0afa6ebccbd6185db3a220cf7eb5c7b03e3c35097d26f647a650cbe800d734/68747470733a2f2f692e696d6775722e636f6d2f6b7248357546622e676966"
              )
            }
            aria-label="View Velma demo"
          >
            <img
              src="https://camo.githubusercontent.com/bb0afa6ebccbd6185db3a220cf7eb5c7b03e3c35097d26f647a650cbe800d734/68747470733a2f2f692e696d6775722e636f6d2f6b7248357546622e676966"
              className="project-thumb"
              alt="Velma Solidity Debugger"
            />
          </button>
          <a
            href="https://github.com/mikeseese/velma"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Velma Solidity Debugger</h2>
          </a>
          <p>
            Won a 2k REP (~$70k USD at award) software bounty for building the
            first real-time portable Solidity debugger for the Ethereum
            ecosystem.
          </p>
        </motion.div>
        <motion.div className="project" variants={cardVariants}>
          <a
            href="https://incanta.itch.io/430-shuffle"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.itch.zone/aW1hZ2UvMjIyNjIwMC8xMzE4MjQ5My5wbmc=/original/mktdO0.png"
              className="project-thumb"
              alt="4:30 Shuffle"
            />
          </a>
          <a
            href="https://incanta.itch.io/430-shuffle"
            target="_blank"
            rel="noreferrer"
          >
            <h2>4:30 Shuffle (Game Jam)</h2>
          </a>
          <p>
            Break free from the office at the end of work week to make it to
            happy hour!
          </p>
        </motion.div>
        <motion.div className="project" variants={cardVariants}>
          <a
            href="https://incanta.itch.io/mission-monster"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.itch.zone/aW1hZ2UvMTI1MDAzMC83MzA2OTE4LnBuZw==/original/ovPjBg.png"
              className="project-thumb"
              alt="Mission: Monster"
            />
          </a>
          <a
            href="https://incanta.itch.io/mission-monster"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Mission: Monster (Game Jam)</h2>
          </a>
          <p>
            Gilbert the Intergalactic Gourd is on a mission to rescue a stranded
            agent from Earth's scary trick-or-treaters.
          </p>
        </motion.div>
        <motion.div className="project" variants={cardVariants}>
          <a
            href="https://incanta.itch.io/niko-the-fox"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.youtube.com/vi/qdiG8AjkQDU/hqdefault.jpg"
              className="project-thumb"
              alt="Niko the Fox"
            />
          </a>
          <a
            href="https://incanta.itch.io/niko-the-fox"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Niko the Fox (Game Jam)</h2>
          </a>
          <p>
            A short, cartoon 3D stealth platformer about a fox re-discovering
            his past.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Project;
