import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2020 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Founder / Lead Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Incanta Games &mdash; Vancouver, WA
            </h4>
            <p>
              Architected Redwood multiplayer backend (awarded $25k Epic MegaGrant).
              Built Kubernetes infrastructure with Pulumi IaC.
              Published 3 Unreal Engine plugins on Fab (all rated 5.0).
              Made 6 accepted contributions to Unreal Engine.
              Client work for Hathora, JALI Research, and Gardens Interactive.
            </p>
            <div className="timeline-video-row">
              <a
                href="https://www.youtube.com/live/YkwOrgSVNqo?t=274"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.youtube.com/vi/YkwOrgSVNqo/hqdefault.jpg"
                  alt="Scaling Multiplayer Games with the Redwood Backend - Inside Unreal"
                  className="timeline-thumb"
                />
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2018 - Nov 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Lead, Truffle Teams
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Truffle Suite &mdash; Vancouver, WA
            </h4>
            <p>
              Led engineering for a Node.js SaaS DevOps platform for blockchain developers.
              Scaled cloud infrastructure for CI/CD workflows.
              Grew engineering team from 3 to 10 developers.
              Developed Ganache and Ethereum tooling.
            </p>
            <div className="timeline-video-row">
              <a
                href="https://www.youtube.com/watch?v=LsQ2Iwd5VMc"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.youtube.com/vi/LsQ2Iwd5VMc/hqdefault.jpg"
                  alt="Truffle Teams overview"
                  className="timeline-thumb"
                />
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2017 - May 2018"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Breadboard &mdash; Orlando, FL
            </h4>
            <p>
              Full-stack engineer on Terra Mango, a Unity-based MMO.
              Developed gameplay systems and backend services in C#, Node.js, and Unity.
              Partnered with clients to scope and deliver custom software solutions.
            </p>
            <div className="timeline-video-row">
              <a
                href="https://www.kickstarter.com/projects/breadboard/terra-mango-a-location-based-strategy-game"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.kickstarter.com/assets/015/967/933/3407abfd93380cd0f69c00519fcf6894_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&v=1500468252&width=1024&sig=ImMLYfcSgf0%2B%2FLU69e5y8mu3RyLwlPGQhpkrDHZFTDw%3D"
                  alt="Terra Mango Kickstarter"
                  className="timeline-thumb"
                />
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2013 - Feb 2017"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Systems Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lockheed Martin &mdash; Orlando, FL
            </h4>
            <p>
              Designed autonomous path finding and formation flight C++ algorithms.
              Created tactical missile inertial tracker algorithms.
              Matured and integrated flight simulation software.
            </p>
            <div className="timeline-video-row">
              <a
                href="https://www.youtube.com/watch?v=2cWa7hCAwkk"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.youtube.com/vi/2cWa7hCAwkk/hqdefault.jpg"
                  alt="CODE vehicle demo"
                  className="timeline-thumb"
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=h449oIjg2kY"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.youtube.com/vi/h449oIjg2kY/hqdefault.jpg"
                  alt="LRASM"
                  className="timeline-thumb"
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=qplK5biK5QA"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.youtube.com/vi/qplK5biK5QA/hqdefault.jpg"
                  alt="MEADS"
                  className="timeline-thumb"
                />
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Aug 2019"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              MS, Electrical and Computer Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Florida &mdash; Gainesville, FL
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2013"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              BS, Computer Engineering &amp; Electrical Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Florida &mdash; Gainesville, FL
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
