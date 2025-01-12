"use client";

import React from "react";
import classNames from "classnames";

import MessageBulkIcon from "../../../../../public/icons/messages-bulk.svg";
import CardTickIcon from "../../../../../public/icons/card-tick.svg";
import DesignIcon from "../../../../../public/icons/design.svg";
import PlayIcon from "../../../../../public/icons/play.svg";

import styles from "./index.module.css";

type SlideItem = {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
  gradient: string;
  content?: React.ReactNode;
};

const item1 = {
  title: "In-Platform<br /> Messaging",
  subTitle:
    "Communicate with your team and clients with integrated in-platform messaging app.",
  icon: <MessageBulkIcon />,
  content: (
    <div className={classNames(styles.content, styles.content1)}>
      <div className={classNames(styles.messageBox, styles.messageBoxSupport)}>
        <p>Support</p>
        <p>Hey, how can I assist you?</p>
      </div>
      <div className={classNames(styles.messageBox, styles.messageBoxClient)}>
        <p>Client</p>
        <p>Hi, can you help me out with packages?</p>
      </div>
      <div className={classNames(styles.messageBox, styles.messageBoxSupport)}>
        <p>Support</p>
        <p>Sure, let me check your ID...</p>
      </div>
    </div>
  ),
  gradient: "linear-gradient(315deg, #4E256E 0%, #8930CF 100%)",
};

const item2 = {
  title: "Advanced Billing Integration",
  subTitle:
    "Manage payments with API integration and billing solutions for your video streaming business and OTT services.",
  icon: <CardTickIcon />,
  content: (
    <div className={classNames(styles.content, styles.content2)}>
      <div className={classNames(styles.messageBox, styles.messageBoxShort)}>
        <p>40+ Integrations</p>
        <p>A bunch of third-party payment systems</p>
      </div>
      <div className={classNames(styles.messageBox, styles.messageBoxLong)}>
        <p>20+ Payment Methods</p>
        <p>We have many payment options for your business!</p>
      </div>
    </div>
  ),
  gradient: "linear-gradient(135deg, #ED0D92 0%, #B70A71 40%, #870753 100%)",
};

const item3 = {
  title: "Own Video Player",
  subTitle: "Deliver HD video playback with a flexible, web-ready player.",
  icon: <PlayIcon />,
  content: (
    <div className={classNames(styles.content, styles.content3)}>
      <div className={styles.messageBox}>
        <p>Dynamic Ad Insertion</p>
      </div>
      <div className={styles.messageBox}>
        <p>High-Quality Playback</p>
      </div>
      <div className={styles.messageBox}>
        <p>Adaptive Streaming</p>
      </div>
      <div className={styles.messageBox}>
        <p>Secure Delivery</p>
      </div>
    </div>
  ),
  gradient: "linear-gradient(315deg, #4E256E 0%, #8930CF 100%)",
};

const item4 = {
  title: "Code-Free Website Builder",
  subTitle: "No-code website builder for streaming services.",
  icon: <DesignIcon />,
  content: (
    <div className={classNames(styles.content, styles.content3)}>
      <div className={styles.messageBox}>
        <p>Responsive Design</p>
      </div>
      <div className={styles.messageBox}>
        <p>Content Managment</p>
      </div>
      <div className={styles.messageBox}>
        <p>Custom Layout</p>
      </div>
      <div className={styles.messageBox}>
        <p>Your Branding</p>
      </div>
    </div>
  ),
  gradient: "linear-gradient(135deg, #ED0D92 0%, #B70A71 40%, #870753 100%)",
};

export const slides: SlideItem[] = [
  item1,
  item2,
  item3,
  item4,
  item1, // for infinite loop purpose
  item2, // for infinite loop purpose
  item3, // for infinite loop purpose
  item4, // for infinite loop purpose
];
