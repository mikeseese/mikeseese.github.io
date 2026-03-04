import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faTrophy } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import megagrantLogo from "../assets/images/Epic_MegaGrants_Recipient_logo.svg";

function Speaking() {
  return (
    <div id="speaking">
      <div className="items-container">
        <h1>Speaking & Awards</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faMicrophone} />}
          >
            <h3 className="vertical-timeline-element-title">
              Cheating on My CPU with Distributed Unreal Builds: A UBA Love
              Story
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              MDEV 2025, MIGS 2025
            </h4>
            <div className="timeline-video-row">
              <a
                href="https://www.youtube.com/watch?v=fTUBDlvRUy0"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.youtube.com/vi/fTUBDlvRUy0/hqdefault.jpg"
                  alt="UBA Love Story talk"
                  className="timeline-thumb"
                />
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faMicrophone} />}
          >
            <h3 className="vertical-timeline-element-title">
              Scaling Multiplayer Games with the Redwood Backend
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Inside Unreal (Epic Games)
            </h4>
            <div className="timeline-video-row">
              <a
                href="https://www.youtube.com/live/YkwOrgSVNqo?si=b5Eyg3ngdah-bOEd&t=274"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.youtube.com/vi/YkwOrgSVNqo/hqdefault.jpg"
                  alt="Redwood Inside Unreal talk"
                  className="timeline-thumb"
                />
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faTrophy} />}
          >
            <h3 className="vertical-timeline-element-title">
              $25k USD Epic MegaGrant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Redwood Multiplayer Backend
            </h4>
            <a
              href="https://redwoodmultiplayer.com/blog/megagrant-announcement"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={megagrantLogo}
                className="megagrant-logo"
                alt="Epic MegaGrants Recipient"
              />
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faMicrophone} />}
          >
            <h3 className="vertical-timeline-element-title">
              Understanding Asset Dependencies in Unreal Engine 5
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Unreal PDX</h4>
            <div className="timeline-video-row">
              <a
                href="https://www.youtube.com/watch?v=AVSZOEHy3_I"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.youtube.com/vi/AVSZOEHy3_I/hqdefault.jpg"
                  alt="Asset Dependencies talk"
                  className="timeline-thumb"
                />
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faMicrophone} />}
          >
            <h3 className="vertical-timeline-element-title">
              Introduction to Multiplayer in Unreal Engine 5
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Unreal PDX</h4>
            <div className="timeline-video-row">
              <a
                href="https://www.youtube.com/watch?v=0IwWbH7R6i4"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.youtube.com/vi/0IwWbH7R6i4/hqdefault.jpg"
                  alt="Intro to Multiplayer talk"
                  className="timeline-thumb"
                />
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faMicrophone} />}
          >
            <h3 className="vertical-timeline-element-title">
              Truffle Teams Demo
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              TruffleCon 2020
            </h4>
            <div className="timeline-video-row">
              <a
                href="https://www.youtube.com/watch?v=LsQ2Iwd5VMc"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.youtube.com/vi/LsQ2Iwd5VMc/hqdefault.jpg"
                  alt="Truffle Teams Demo"
                  className="timeline-thumb"
                />
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faMicrophone} />}
          >
            <h3 className="vertical-timeline-element-title">
              Push It! Push It Real Good: Truffle Teams Intro & Deployments
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              TruffleCon 2019
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faMicrophone} />}
          >
            <h3 className="vertical-timeline-element-title">
              Just When you Thought Ganache Couldn't get any Sweeter
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              TruffleCon 2018
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2018"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faTrophy} />}
          >
            <h3 className="vertical-timeline-element-title">
              2k REP (~$70k USD) Software Bounty
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Velma &mdash; Portable Solidity Debugger
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Speaking;
